import { Mail } from 'lucide-react'
import LegalLayout from './LegalLayout'

const SUPPORT_EMAIL = 'support@yonam.sn'

function TermsOfUse() {
  return (
    <LegalLayout
      title="Conditions générales d'utilisation"
      updated="7 novembre 2026"
      lede="Ces conditions fixent les règles d'utilisation de l'application Yonam : votre compte, la publication et la réservation de trajets, les paiements, les annulations et les responsabilités de chacun."
    >
      <section className="legal-section">
        <h2><span className="legal-num">1</span> Objet</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'accès et l'utilisation de
          l'application mobile Yonam (ci-après "l'Application"), une plateforme de mise en relation entre
          conducteurs et passagers pour le covoiturage au Sénégal et en Afrique de l'Ouest.
        </p>
        <p>
          L'utilisation de l'Application implique l'acceptation pleine et entière des présentes CGU. Si vous
          n'acceptez pas ces conditions, veuillez ne pas utiliser l'Application.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">2</span> Définitions</h2>
        <ul>
          <li>"Utilisateur" : toute personne inscrite sur l'Application, qu'elle soit conducteur ou passager.</li>
          <li>"Conducteur" : un Utilisateur qui publie un trajet et propose des places disponibles.</li>
          <li>"Passager" : un Utilisateur qui réserve une place sur un trajet publié.</li>
          <li>"Trajet" : un déplacement proposé par un Conducteur entre un point de départ et un point d'arrivée.</li>
          <li>"Participation aux frais" : le montant demandé par le Conducteur aux Passagers pour contribuer aux frais du trajet.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">3</span> Inscription et compte</h2>
        <p>
          Pour utiliser l'Application, l'Utilisateur doit créer un compte en fournissant des informations exactes
          et à jour : nom complet, numéro de téléphone, adresse email et mot de passe.
        </p>
        <p>L'Utilisateur s'engage à :</p>
        <ul>
          <li>Fournir des informations véridiques lors de l'inscription</li>
          <li>Maintenir la confidentialité de ses identifiants de connexion</li>
          <li>Ne pas créer plusieurs comptes</li>
          <li>Signaler immédiatement toute utilisation non autorisée de son compte</li>
        </ul>
        <p>L'Application se réserve le droit de suspendre ou supprimer tout compte en cas de non-respect des présentes CGU.</p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">4</span> Vérification d'identité</h2>
        <p>
          Les Utilisateurs peuvent vérifier leur identité en fournissant une pièce d'identité officielle et un
          selfie. La vérification est facultative mais fortement recommandée pour renforcer la confiance entre les
          membres de la communauté. Les documents fournis sont traités par un prestataire tiers sécurisé et ne sont
          pas conservés par l'Application au-delà du processus de vérification.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">5</span> Publication et réservation de trajets</h2>
        <p>Le Conducteur s'engage à :</p>
        <ul>
          <li>Publier uniquement des trajets qu'il prévoit réellement d'effectuer</li>
          <li>Indiquer des informations précises (horaire, itinéraire, nombre de places)</li>
          <li>Fixer une participation aux frais raisonnable, n'excédant pas les frais réels du trajet</li>
          <li>Disposer d'un permis de conduire valide et d'une assurance automobile en cours</li>
          <li>Respecter le code de la route</li>
        </ul>
        <p>Le Passager s'engage à :</p>
        <ul>
          <li>Se présenter à l'heure et au point de rendez-vous convenu</li>
          <li>Payer la participation aux frais selon les modalités prévues</li>
          <li>Respecter le véhicule et les consignes du Conducteur</li>
          <li>Annuler en temps voulu en cas d'empêchement</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">6</span> Tarification et paiements</h2>
        <p>
          La participation aux frais est fixée par le Conducteur dans le respect des barèmes indicatifs de
          l'Application. Le paiement d'une réservation s'effectue dans l'Application par mobile money (Wave, Orange
          Money ou Free Money), via notre prestataire de paiement Intech. Le montant minimum d'un paiement est de
          300 FCFA.
        </p>
        <p>
          L'Application perçoit des frais de service de 7 % du prix du trajet sur chaque réservation. Le paiement du Passager est conservé
          par l'Application jusqu'à la fin du trajet, puis la part du Conducteur est versée dans son portefeuille
          Yonam. Le Conducteur peut retirer son solde vers son compte Wave ou Orange Money.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">7</span> Annulations</h2>
        <p>En cas d'annulation par le Passager :</p>
        <ul>
          <li>Plus de 12 heures avant le départ : le prix du trajet est remboursé, hors frais de service.</li>
          <li>Entre 12 heures et 2 heures avant le départ : la moitié du prix du trajet (hors frais de service) est remboursée au Passager, l'autre moitié est versée au Conducteur en compensation.</li>
          <li>Moins de 2 heures avant le départ, ou absence au rendez-vous : aucun remboursement, le Conducteur reçoit sa part.</li>
        </ul>
        <p>
          Les remboursements au Passager sont crédités automatiquement sur le compte mobile money avec lequel il a
          payé (Wave, Orange Money ou autre).
        </p>
        <p>
          En cas d'annulation par le Conducteur, les Passagers sont intégralement remboursés, frais de service
          compris. Les frais de service sont alors à la charge du Conducteur et
          déduits de son portefeuille. Des annulations répétées par le Conducteur peuvent entraîner des pénalités
          ou la suspension du compte.
        </p>
        <p>Le détail figure dans nos <a href="/conditions-annulation">conditions d'annulation</a>.</p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">8</span> Responsabilités</h2>
        <p>
          L'Application agit uniquement en tant qu'intermédiaire de mise en relation. Elle ne fournit pas de service
          de transport et n'est pas partie au contrat entre le Conducteur et le Passager.
        </p>
        <p>L'Application décline toute responsabilité en cas de :</p>
        <ul>
          <li>Retard, annulation ou modification d'un trajet par le Conducteur</li>
          <li>Dommages corporels ou matériels survenus pendant le trajet</li>
          <li>Comportement inapproprié d'un Utilisateur</li>
          <li>Perte ou vol d'effets personnels</li>
        </ul>
        <p>Chaque Conducteur est seul responsable de son véhicule, de sa conduite et de la sécurité de ses passagers.</p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">9</span> Comportement et sécurité</h2>
        <p>Tous les Utilisateurs s'engagent à :</p>
        <ul>
          <li>Adopter un comportement respectueux et courtois</li>
          <li>Ne pas transporter de substances illégales ou dangereuses</li>
          <li>Ne pas discriminer d'autres Utilisateurs</li>
          <li>Ne pas utiliser l'Application à des fins commerciales de transport</li>
          <li>Signaler tout comportement suspect ou dangereux via le bouton SOS</li>
        </ul>
        <p>
          Tout Utilisateur qui contrevient à ces règles s'expose à une suspension immédiate et définitive de son
          compte, sans préjudice d'éventuelles poursuites.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">10</span> Données personnelles</h2>
        <p>
          L'Application collecte et traite les données personnelles des Utilisateurs conformément à la législation
          sénégalaise en matière de protection des données personnelles (Loi n.2008-12 du 25 janvier 2008).
        </p>
        <p>
          Les données collectées comprennent : nom, prénom, numéro de téléphone, adresse email, photo de profil,
          historique des trajets, et le cas échéant, documents d'identité pour la vérification. Ces données sont
          utilisées exclusivement pour le fonctionnement de l'Application et ne sont jamais vendues à des tiers.
        </p>
        <p>
          L'Utilisateur dispose d'un droit d'accès, de modification et de suppression de ses données en contactant
          le support. Voir aussi notre <a href="/confidentialite">politique de confidentialité</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">11</span> Avis et évaluations</h2>
        <p>
          Après chaque trajet, les Utilisateurs peuvent laisser un avis et une note. Les avis doivent être honnêtes,
          respectueux et basés sur l'expérience réelle du trajet. L'Application se réserve le droit de supprimer
          tout avis diffamatoire, injurieux ou manifestement faux.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">12</span> Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments de l'Application (design, logo, textes, fonctionnalités) sont protégés par les
          lois sur la propriété intellectuelle. Toute reproduction, modification ou exploitation non autorisée est
          strictement interdite.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">13</span> Modification des CGU</h2>
        <p>
          L'Application se réserve le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront
          informés de toute modification substantielle par notification. L'utilisation continue de l'Application
          après modification vaut acceptation des nouvelles conditions.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">14</span> Droit applicable et litiges</h2>
        <p>
          Les présentes CGU sont régies par le droit sénégalais. En cas de litige, les parties s'engagent à
          rechercher une résolution amiable avant toute action judiciaire. À défaut, les tribunaux compétents de
          Dakar seront seuls compétents.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">15</span> Contact</h2>
        <div className="legal-contact glass">
          <p>Pour toute question relative aux présentes CGU ou à l'utilisation de l'Application :</p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="legal-contact-email">
            <Mail size={18} />
            {SUPPORT_EMAIL}
          </a>
        </div>
      </section>
    </LegalLayout>
  )
}

export default TermsOfUse
