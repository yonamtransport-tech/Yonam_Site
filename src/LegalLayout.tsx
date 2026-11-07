import { useEffect, type ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import Logo from './Logo'

type LegalLayoutProps = {
  title: string
  updated: string
  lede: ReactNode
  children: ReactNode
}

function LegalLayout({ title, updated, lede, children }: LegalLayoutProps) {
  useEffect(() => {
    document.title = `${title} - Yonam`
  }, [title])

  return (
    <>
      {/* Header */}
      <header className="header glass scrolled">
        <div className="header-inner">
          <a href="/" className="logo">
            <Logo />
          </a>

          <a href="/" className="legal-back">
            <ArrowLeft size={18} />
            Retour à l'accueil
          </a>
        </div>
      </header>

      <main className="legal">
        <div className="legal-inner">
          <span className="section-tag">Document légal</span>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-meta">Dernière mise à jour : {updated} · Application Yonam, covoiturage au Sénégal</p>
          <p className="legal-lede">{lede}</p>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-bottom">
            <p>2026 Yonam. Tous droits réservés.</p>
            <div className="legal-footer-links">
              <a href="/cgu">CGU</a>
              <a href="/confidentialite">Politique de confidentialité</a>
              <a href="/conditions-annulation">Conditions d'annulation</a>
              <a href="/suppression-compte">Supprimer mon compte</a>
              <a href="/">Accueil</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LegalLayout
