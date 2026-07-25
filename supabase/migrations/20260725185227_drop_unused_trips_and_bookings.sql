/*
# Drop unused trips and bookings tables

## Overview
The trips and bookings tables were created speculatively for a carpooling
app, but this project is a marketing/landing site for a mobile app — those
tables do not match the site's purpose and are not referenced by any code.
They are being removed to keep the database clean. Both tables are empty
(no production data), so dropping them is safe.

## 1. Tables removed
- `bookings` (child table, dropped first due to foreign key dependency)
- `trips` (parent table)

## 2. Notes
1. Both tables were empty — no data is lost.
2. The `bookings` table is dropped before `trips` because it has a foreign
   key referencing `trips.id`.
3. When the contact/support form and appointment booking features are built,
   the correct tables (`support_tickets`, `appointments`) will be created
   at that time with schemas matching the actual feature requirements.
*/

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS trips;
