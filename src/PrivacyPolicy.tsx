import { Mail } from 'lucide-react'
import LegalLayout from './LegalLayout'

const SUPPORT_EMAIL = 'support@yonam.sn'

const DATA_CATEGORIES = [
  {
    category: 'Compte',
    examples: 'Nom complet, numéro de téléphone, e-mail, mot de passe, date de naissance, photo de profil, profession, bio',
    purpose: 'Créer et sécuriser votre compte, vous présenter aux autres utilisateurs',
  },
  {
    category: 'Localisation',
    examples: 'Position GPS au moment de la recherche, de la réservation et pendant un trajet en cours',
    purpose: "Trouver des trajets près de vous, afficher le point de prise en charge, confirmer l'arrivée à destination",
  },
  {
    category: "Vérification d'identité",
    examples: "Photo d'une pièce d'identité officielle et un selfie (facultatif)",
    purpose: 'Confirmer votre identité pour renforcer la confiance entre membres — traité par un prestataire tiers spécialisé, voir section 4',
  },
  {
    category: 'Véhicule',
    examples: "Marque, modèle, couleur, plaque d'immatriculation, photos du véhicule (chauffeurs)",
    purpose: 'Permettre aux passagers de reconnaître le véhicule avant de monter',
  },
  {
    category: 'Paiement',
    examples: 'Numéro de mobile money (Wave, Orange Money), historique des transactions, solde du portefeuille interne',
    purpose: 'Encaisser les réservations, reverser les chauffeurs, traiter les retraits et remboursements — via un prestataire de paiement tiers, voir section 4',
  },
  {
    category: "Usage de l'app",
    examples: "Trajets publiés et réservés, messages entre utilisateurs, avis et notes, tickets d'assistance, alertes SOS",
    purpose: 'Faire fonctionner les réservations, la messagerie, la notation et le support',
  },
  {
    category: 'Appareil',
    examples: "Identifiant de notification push, type d'appareil",
    purpose: 'Vous envoyer des notifications (nouvelle réservation, message, confirmation de paiement...)',
  },
]

const PROVIDERS = [
  'Supabase — hébergement & base de données',
  "Smile Identity — vérification d'identité",
  'PayTech — paiements mobile money',
  'Mapbox / Google Maps — cartographie et itinéraires',
  'Expo — notifications push',
]

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updated="26 octobre 2026"
      lede="Yonam met en relation des conducteurs et des passagers pour du covoiturage. Pour que ça marche — vous trouver un trajet, vérifier qui est qui, et vous payer en toute sécurité — l'application a besoin de certaines de vos données. Ce document dit lesquelles, pourquoi, et ce que vous pouvez en faire."
    >
      <section className="legal-section">
        <h2><span className="legal-num">1</span> Qui nous sommes</h2>
        <p>
          Yonam est une application mobile de covoiturage opérant au Sénégal et en Afrique de l'Ouest. Cette
          politique s'applique à l'application mobile et à tout service associé. Pour toute question, voir la
          section Contact en bas de page.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">2</span> Les données que nous collectons</h2>
        <p>Nous ne collectons que ce dont l'application a besoin pour fonctionner :</p>
        <div className="legal-table glass">
          <div className="legal-row head">
            <div>Catégorie</div>
            <div>Exemples</div>
            <div>Pourquoi</div>
          </div>
          {DATA_CATEGORIES.map((row) => (
            <div className="legal-row" key={row.category}>
              <div>{row.category}</div>
              <div>{row.examples}</div>
              <div>{row.purpose}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">3</span> Ce que nous ne faisons pas</h2>
        <ul>
          <li>Nous ne vendons pas vos données à des tiers.</li>
          <li>Nous ne partageons votre position en temps réel qu'avec le chauffeur ou le passager concerné par votre trajet, et avec les secours en cas d'alerte SOS.</li>
          <li>Les documents d'identité fournis pour la vérification ne sont pas conservés par Yonam au-delà du processus de vérification lui-même.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">4</span> Avec qui nous partageons des données</h2>
        <p>Certaines fonctions s'appuient sur des prestataires spécialisés, qui ne voient que ce dont ils ont besoin pour leur tâche :</p>
        <div className="legal-pills">
          {PROVIDERS.map((provider) => (
            <span className="legal-pill" key={provider}>{provider}</span>
          ))}
        </div>
        <p>
          Chacun de ces prestataires traite vos données uniquement pour le compte de Yonam et dans le cadre de
          ses propres engagements de confidentialité. Nous pouvons également partager des données avec les
          autorités compétentes si la loi l'exige.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">5</span> Combien de temps nous les gardons</h2>
        <p>
          Vos données de compte sont conservées tant que votre compte existe. Si vous supprimez votre compte,
          vos données personnelles sont effacées, à l'exception des informations que nous devons conserver pour
          des obligations légales ou comptables (par exemple l'historique des transactions financières).
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">6</span> Vos droits</h2>
        <p>Vous pouvez à tout moment :</p>
        <ul>
          <li>Consulter et modifier vos informations de profil directement dans l'application</li>
          <li>Demander une copie des données que nous détenons sur vous</li>
          <li>Demander la suppression de votre compte et de vos données personnelles</li>
          <li>Retirer votre consentement à la vérification d'identité ou à la géolocalisation (certaines fonctions de l'app peuvent alors ne plus être disponibles)</li>
        </ul>
        <p>Pour exercer ces droits, contactez-nous à l'adresse ci-dessous.</p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">7</span> Sécurité</h2>
        <p>
          Les mots de passe sont chiffrés, les connexions à l'application sont sécurisées (HTTPS/TLS), et l'accès
          aux données est limité par des règles de permission au niveau de la base de données. Aucun système
          n'est invulnérable à 100 %, mais nous prenons des mesures raisonnables pour protéger vos informations.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">8</span> Âge minimum</h2>
        <p>
          Yonam implique des trajets réels et des paiements réels : l'application est destinée aux personnes
          majeures (18 ans et plus). Nous ne collectons pas sciemment de données auprès de mineurs.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">9</span> Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique pour refléter des changements dans l'application ou dans
          la réglementation. La date de dernière mise à jour en haut de page sera actualisée en conséquence.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">10</span> Contact</h2>
        <div className="legal-contact glass">
          <p>Pour toute question sur cette politique ou sur vos données :</p>
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
