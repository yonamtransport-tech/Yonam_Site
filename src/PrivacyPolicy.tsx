import { Mail } from 'lucide-react'
import LegalLayout from './LegalLayout'

const SUPPORT_EMAIL = 'support@yonam.sn'

const COLLECTED_DATA = [
  'Les informations de votre compte (nom, numéro de téléphone, adresse email, photo de profil)',
  'Votre position, pour vous proposer des trajets proches et permettre le suivi en temps réel pendant un trajet',
  "Vos documents d'identité et un selfie lors de la vérification de profil, traités par notre prestataire de vérification d'identité (voir section 3)",
  'Les informations de votre véhicule si vous êtes conducteur',
  'Les informations nécessaires au paiement, traitées par notre prestataire de paiement : nous ne stockons jamais vos identifiants bancaires ou mobile money',
  "Votre historique d'utilisation de l'application",
  'Des informations techniques sur votre appareil et un jeton de notification push',
]

const PROVIDERS = [
  { name: 'Supabase', role: 'hébergement de la base de données et authentification' },
  { name: 'Smile Identity', role: "vérification d'identité (pièce officielle et selfie)" },
  { name: 'Intech', role: 'traitement des paiements, remboursements et virements mobile money' },
  { name: 'Mapbox et Google Maps', role: 'cartographie, itinéraires et géolocalisation' },
  { name: 'Expo', role: "infrastructure technique de l'application et notifications push" },
]

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updated="9 novembre 2026"
      lede="Cette politique explique quelles données Yonam collecte, avec qui elles sont partagées, combien de temps elles sont conservées et quels sont vos droits."
    >
      <section className="legal-section">
        <h2><span className="legal-num">1</span> Données que nous collectons</h2>
        <p>Pour fonctionner, Yonam collecte :</p>
        <ul>
          {COLLECTED_DATA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Si vous déclenchez une alerte SOS, votre position est partagée avec l'équipe Yonam tant que l'alerte est
          active, y compris lorsque votre écran est verrouillé, pendant 2 heures au maximum. Une notification reste
          affichée pendant ce suivi, et ces positions sont supprimées après 30 jours.
        </p>
        <p>
          Vous pouvez enregistrer jusqu'à 3 contacts de confiance (nom et numéro de téléphone) : si vous déclenchez
          une alerte SOS, ils reçoivent un SMS avec le trajet, le nom du chauffeur, le véhicule et un lien pour suivre
          votre position.
        </p>
        <p>
          Si vous partagez votre trajet, toute personne disposant du lien voit pendant 24 heures le trajet, le
          chauffeur, le véhicule et la position de la voiture pendant la course ; lors d'une alerte SOS, ce lien
          montre aussi votre position tant que l'alerte est active.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">2</span> Ce que nous ne faisons pas</h2>
        <p>
          Nous ne vendons jamais vos données personnelles à des tiers. Vos documents d'identité ne sont pas conservés
          au-delà du processus de vérification : une fois votre profil vérifié, seul le résultat (vérifié ou non) est
          conservé, pas les documents eux-mêmes.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">3</span> Prestataires tiers</h2>
        <p>
          Pour fonctionner, Yonam s'appuie sur des prestataires spécialisés qui traitent certaines données en notre
          nom :
        </p>
        <ul>
          {PROVIDERS.map((provider) => (
            <li key={provider.name}><strong>{provider.name}</strong> : {provider.role}</li>
          ))}
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">4</span> Conservation des données</h2>
        <p>
          Vos données sont conservées aussi longtemps que votre compte est actif. Si vous supprimez votre compte, vos
          données personnelles sont supprimées ou anonymisées, à l'exception de ce que la loi nous oblige à conserver
          (par exemple l'historique des transactions financières, pour des raisons comptables et légales).
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">5</span> Vos droits</h2>
        <p>
          Vous pouvez à tout moment demander à accéder à vos données, les faire corriger, ou demander la suppression
          de votre compte et de vos données personnelles, en nous contactant à l'adresse ci-dessous. Voir aussi notre
          page <a href="/suppression-compte">Supprimer mon compte</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">6</span> Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données
          contre l'accès non autorisé, la perte ou la divulgation. Les échanges entre l'application et nos serveurs
          sont chiffrés.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">7</span> Âge minimum</h2>
        <p>Yonam est réservé aux personnes âgées de 18 ans ou plus.</p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">8</span> Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. En cas de changement
          important, vous en serez informé dans l'application.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">9</span> Contact</h2>
        <div className="legal-contact glass">
          <p>Pour toute question relative à cette politique ou à vos données personnelles :</p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="legal-contact-email">
            <Mail size={18} />
            {SUPPORT_EMAIL}
          </a>
        </div>
      </section>
    </LegalLayout>
  )
}

export default PrivacyPolicy
