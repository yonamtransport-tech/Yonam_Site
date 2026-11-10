import { Mail } from 'lucide-react'
import LegalLayout from './LegalLayout'

const SUPPORT_EMAIL = 'support@yonam.sn'

const PASSENGER_WINDOWS = [
  {
    level: 'far',
    title: 'Plus de 12h avant le départ',
    delay: 'Délai large',
    passenger: '100 %',
    driver: '0 %',
    note: 'Remboursement intégral de la part du chauffeur. Les frais de service Yonam restent acquis à la plateforme.',
  },
  {
    level: 'medium',
    title: 'Entre 2h et 12h avant le départ',
    delay: 'Délai moyen',
    passenger: '50 %',
    driver: '50 %',
    note: 'La part du chauffeur est partagée à parts égales entre remboursement au passager et dédommagement au chauffeur, qui avait déjà bloqué ce créneau.',
  },
  {
    level: 'late',
    title: 'Moins de 2h avant le départ',
    delay: 'Délai court',
    passenger: '0 %',
    driver: '100 %',
    note: "Aucun remboursement : le chauffeur conserve sa part intégrale en dédommagement d'une annulation trop tardive pour être réorganisée.",
  },
]

const REFUND_METHODS = [
  {
    situation: 'Remboursement intégral (chauffeur annule, ou passager annule >12h avant)',
    method: 'Crédité automatiquement sur le compte mobile money utilisé pour payer (Wave, Orange Money ou autre).',
  },
  {
    situation: 'Remboursement partiel (annulation entre 2h et 12h)',
    method: 'Crédité automatiquement sur le compte mobile money utilisé pour payer (Wave, Orange Money ou autre).',
  },
  {
    situation: 'Dédommagement du chauffeur',
    method: 'Crédité sur le portefeuille Yonam du chauffeur, retirable à tout moment vers Wave ou Orange Money.',
  },
]

function CancellationPolicy() {
  return (
    <LegalLayout
      title="Conditions d'annulation"
      updated="7 novembre 2026"
      lede="Le montant remboursé au passager et le dédommagement versé au chauffeur dépendent du moment où la réservation est annulée par rapport à l'heure de départ prévue, et de qui annule. Les frais de service Yonam (7 % du prix du trajet) ne sont pas remboursés quand c'est le passager qui annule, quel que soit le délai. Tous les remboursements sont crédités automatiquement sur le compte mobile money utilisé pour payer."
    >
      <section className="legal-section">
        <h2><span className="legal-num">1</span> Si le passager annule</h2>
        <div className="cancel-windows">
          {PASSENGER_WINDOWS.map((w) => (
            <div className={`cancel-card glass ${w.level}`} key={w.level}>
              <div className="cancel-head">
                <span className="cancel-title">{w.title}</span>
                <span className="cancel-delay">{w.delay}</span>
              </div>
              <div className="cancel-split-row">
                <div className="cancel-split passenger">
                  <div className="cancel-split-label">Passager reçoit</div>
                  <div className="cancel-split-value">{w.passenger}</div>
                </div>
                <div className="cancel-split driver">
                  <div className="cancel-split-label">Chauffeur reçoit</div>
                  <div className="cancel-split-value">{w.driver}</div>
                </div>
              </div>
              <p className="cancel-note">{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">2</span> Si le chauffeur annule</h2>
        <div className="cancel-card glass driver-cancels">
          <div className="cancel-split-label">Passager reçoit</div>
          <div className="cancel-split-value">100 %</div>
          <p className="cancel-note">
            Quel que soit le délai, si c'est le chauffeur qui annule, le passager est intégralement remboursé,
            frais de service compris. Les frais de service Yonam restent dus par le chauffeur, qui les règle à même son solde si celui-ci
            le permet, ou qui reste redevable de la différence.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">3</span> Comment le remboursement est versé</h2>
        <div className="legal-table glass">
          <div className="legal-row two-cols head">
            <div>Situation</div>
            <div>Mode de remboursement</div>
          </div>
          {REFUND_METHODS.map((row) => (
            <div className="legal-row two-cols" key={row.situation}>
              <div>{row.situation}</div>
              <div>{row.method}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">4</span> Trajet interrompu en cours de route</h2>
        <p>
          Si le chauffeur doit interrompre un trajet déjà commencé (panne, incident...), le passager est
          remboursé au prorata de la distance restant à parcourir, et le chauffeur est payé au prorata de la
          distance effectivement parcourue. Les frais de prise en charge restent acquis au chauffeur ; les frais
          de dépose sont intégralement remboursés au passager.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">5</span> Litiges</h2>
        <p>
          En cas de désaccord sur une annulation (par exemple un chauffeur qui conteste un remboursement intégral
          décidé au-delà du délai prévu), un ticket de litige peut être ouvert depuis l'application. Le
          remboursement reste suspendu jusqu'à la résolution du litige par l'équipe Yonam.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">6</span> Contact</h2>
        <div className="legal-contact glass">
          <p>Pour toute question sur une annulation ou un remboursement :</p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="legal-contact-email">
            <Mail size={18} />
            {SUPPORT_EMAIL}
          </a>
        </div>
      </section>
    </LegalLayout>
  )
}

export default CancellationPolicy
