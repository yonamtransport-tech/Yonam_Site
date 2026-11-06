import { Mail } from 'lucide-react'
import LegalLayout from './LegalLayout'

const SUPPORT_EMAIL = 'support@yonam.sn'
const DELETION_SUBJECT = 'Suppression de mon compte'

function AccountDeletion() {
  return (
    <LegalLayout
      title="Supprimer mon compte Yonam"
      updated="6 novembre 2026"
      lede="Vous pouvez supprimer votre compte Yonam à tout moment, depuis l'application ou par email. Voici comment faire, et ce qu'il advient de vos données."
    >
      <section className="legal-section">
        <h2><span className="legal-num">1</span> Depuis l'application</h2>
        <ol>
          <li>Ouvrez l'application Yonam et connectez-vous.</li>
          <li>Allez dans l'onglet <strong>Paramètres</strong>, section <strong>Profil et Compte</strong>.</li>
          <li>Appuyez sur <strong>Supprimer mon compte</strong> et confirmez.</li>
        </ol>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">2</span> Sans l'application</h2>
        <p>
          Envoyez un email à {SUPPORT_EMAIL} avec pour objet « {DELETION_SUBJECT} », depuis l'adresse email
          liée à votre compte, en indiquant votre numéro de téléphone. Nous traitons la demande sous 30 jours
          maximum.
        </p>
        <div className="legal-contact glass">
          <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(DELETION_SUBJECT)}`} className="legal-contact-email">
            <Mail size={18} />
            Demander la suppression par email
          </a>
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">3</span> Ce qui est supprimé</h2>
        <p>
          Votre profil (nom, photo, téléphone, email), vos véhicules, vos trajets à venir, vos messages, vos
          positions et votre jeton de notification sont supprimés ou anonymisés.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="legal-num">4</span> Ce qui est conservé</h2>
        <p>
          L'historique des paiements et des transactions financières est conservé de façon anonymisée pendant
          la durée exigée par la loi (obligations comptables).
        </p>
        <p>
          Avant de supprimer votre compte, retirez le solde de votre portefeuille et terminez ou annulez vos
          trajets et réservations en cours : la suppression est refusée tant qu'il en reste.
        </p>
      </section>
    </LegalLayout>
  )
}

export default AccountDeletion
