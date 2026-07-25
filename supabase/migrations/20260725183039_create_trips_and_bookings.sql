/*
# Create trips and bookings tables for the Andal carpooling platform

## Overview
This migration creates the two core tables that power the carpooling platform:
- `trips`: a driver publishes a ride from one city to another on a given date/time
  with a number of available seats and a price per seat.
- `bookings`: a passenger reserves one or more seats on a published trip.

The app currently has no sign-in screen, so the schema is single-tenant
(no `user_id`, no `auth.users` foreign keys). Both tables are readable and
writable by the anon-key frontend via Row Level Security policies that allow
`anon` and `authenticated` roles.

## 1. New Tables

### `trips`
A published carpool ride.
- `id` (uuid, primary key)
- `driver_name` (text, not null) — name of the person driving
- `driver_phone` (text, not null) — contact number for the driver
- `from_city` (text, not null) — departure city (e.g. "Dakar")
- `to_city` (text, not null) — destination city (e.g. "Thies")
- `departure_date` (date, not null) — day the trip leaves
- `departure_time` (time, not null) — time the trip leaves
- `seats_available` (integer, not null) — total seats offered
- `seats_remaining` (integer, not null) — seats still bookable (denormalized for quick display)
- `price_per_seat` (integer, not null) — price in FCFA per seat
- `notes` (text, nullable) — optional details from the driver (meeting point, etc.)
- `status` (text, not null, default 'active') — 'active' | 'full' | 'cancelled'
- `created_at` (timestamptz, default now())

### `bookings`
A passenger reservation on a trip.
- `id` (uuid, primary key)
- `trip_id` (uuid, not null, foreign key to trips.id, on delete cascade)
- `passenger_name` (text, not null) — name of the passenger
- `passenger_phone` (text, not null) — contact number for the passenger
- `seats_booked` (integer, not null, default 1) — number of seats reserved
- `status` (text, not null, default 'confirmed') — 'confirmed' | 'cancelled'
- `created_at` (timestamptz, default now())

## 2. Indexes
- `trips(from_city, to_city, departure_date)` — supports the search flow
  (city pair + date lookups).
- `bookings(trip_id)` — supports listing bookings for a given trip.

## 3. Security (RLS)
Both tables have Row Level Security enabled. Because the app has no sign-in
screen, policies are scoped to `TO anon, authenticated` so the anon-key
frontend can read and write. This is intentionally public/shared data.

For each table, four separate policies are created (one per CRUD verb):
- SELECT, INSERT, UPDATE, DELETE.

## 4. Important Notes
1. No `user_id` columns or `auth.uid()` checks — the app is single-tenant
   with no authentication at this stage.
2. `seats_remaining` is stored on `trips` for fast display; the frontend is
   responsible for decrementing it when a booking is confirmed.
3. The migration is idempotent: tables use `IF NOT EXISTS` and policies are
   dropped before re-creation so re-running is safe.
*/

-- Trips table
CREATE TABLE IF NOT EXISTS trips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_name text NOT NULL,
  driver_phone text NOT NULL,
  from_city text NOT NULL,
  to_city text NOT NULL,
  departure_date date NOT NULL,
  departure_time time NOT NULL,
  seats_available integer NOT NULL,
  seats_remaining integer NOT NULL,
  price_per_seat integer NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trips ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_trips" ON trips;
CREATE POLICY "anon_select_trips"
  ON trips FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_trips" ON trips;
CREATE POLICY "anon_insert_trips"
  ON trips FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_trips" ON trips;
CREATE POLICY "anon_update_trips"
  ON trips FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_trips" ON trips;
CREATE POLICY "anon_delete_trips"
  ON trips FOR DELETE
  TO anon, authenticated USING (true);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  passenger_name text NOT NULL,
  passenger_phone text NOT NULL,
  seats_booked integer NOT NULL DEFAULT 1,
  status text NOT NULL DEFAULT 'confirmed',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings"
  ON bookings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
  ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
CREATE POLICY "anon_update_bookings"
  ON bookings FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
CREATE POLICY "anon_delete_bookings"
  ON bookings FOR DELETE
  TO anon, authenticated USING (true);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_trips_route_date
  ON trips (from_city, to_city, departure_date);

CREATE INDEX IF NOT EXISTS idx_bookings_trip_id
  ON bookings (trip_id);
