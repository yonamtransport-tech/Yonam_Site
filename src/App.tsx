import { useState, useEffect } from 'react'
import { Car, MapPin, Shield, Users, Wallet, Star, ArrowRight, Menu, X, CircleCheck as CheckCircle, Phone, MessageCircle, Clock, Navigation, Heart, Mail, Send, Eye } from 'lucide-react'
import Logo from './Logo'

const SUPPORT_EMAIL = 'support@yonam.sn'
const WHATSAPP_NUMBER = '221XXXXXXXXX' // Remplacer par votre numéro WhatsApp (format international sans +)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [supportForm, setSupportForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formSent, setFormSent] = useState(false)
  const [formError, setFormError] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  async function handleSupportSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    setSending(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supportForm),
      })

      if (!response.ok) {
        throw new Error('request_failed')
      }

      setSupportForm({ name: '', email: '', subject: '', message: '' })
      setFormSent(true)
      setTimeout(() => setFormSent(false), 5000)
    } catch {
      setFormError("L'envoi a échoué. Merci de réessayer ou de nous contacter via WhatsApp.")
    } finally {
      setSending(false)
    }
  }

  function handleWhatsApp() {
    const text = encodeURIComponent('Bonjour, j\'ai besoin d\'aide avec Yonam.')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <>
      {/* Header */}
      <header className={`header glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" className="logo">
            <Logo />
          </a>

          <nav className={`nav-links ${menuOpen ? 'open glass' : ''}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>Fonctionnalités</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>Comment ça marche</a>
            <a href="#routes" onClick={() => setMenuOpen(false)}>Trajets</a>
            <a href="#safety" onClick={() => setMenuOpen(false)}>Sécurité</a>
            <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
            <a href="#download" className="nav-cta" onClick={() => setMenuOpen(false)}>Télécharger</a>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge glass">
            <span className="hero-badge-dot" />
            Disponible au Sénégal
          </div>
          <h1>
            Voyagez ensemble avec <span className="highlight">Yonam</span>
          </h1>
          <p className="hero-subtitle">
            La plateforme de covoiturage qui connecte les villes du Sénégal.
            Partagez les frais, réduisez votre empreinte carbone et voyagez en toute confiance.
          </p>
          <div className="hero-ctas">
            <a href="#download" className="btn-primary">
              <Car size={20} />
              Commencer maintenant
            </a>
            <a href="#how-it-works" className="btn-secondary">
              En savoir plus
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-tag">Fonctionnalités</span>
          <h2 className="section-title">Tout ce dont vous avez besoin pour voyager sereinement</h2>
          <p className="section-desc">
            Yonam offre une expérience complète pour les conducteurs et les passagers.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass">
            <div className="feature-icon pink">
              <MapPin size={24} />
            </div>
            <h3 className="feature-title">Trajets entre villes</h3>
            <p className="feature-desc">
              Trouvez des trajets entre toutes les grandes villes du Sénégal : Dakar, Thiès, Saint-Louis, Ziguinchor et bien plus.
            </p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon green">
              <Wallet size={24} />
            </div>
            <h3 className="feature-title">Paiement flexible</h3>
            <p className="feature-desc">
              Payez en espèces, par Orange Money, Wave ou via le portefeuille intégré. Simple et sécurisé.
            </p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon blue">
              <Shield size={24} />
            </div>
            <h3 className="feature-title">Profils vérifiés</h3>
            <p className="feature-desc">
              Vérification d'identité, avis et notes entre utilisateurs pour une communauté de confiance.
            </p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon orange">
              <MessageCircle size={24} />
            </div>
            <h3 className="feature-title">Messagerie intégrée</h3>
            <p className="feature-desc">
              Communiquez directement avec votre conducteur ou passager pour organiser les détails du trajet.
            </p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon teal">
              <Navigation size={24} />
            </div>
            <h3 className="feature-title">Suivi en temps réel</h3>
            <p className="feature-desc">
              Suivez votre trajet en direct. Partagez votre position avec vos proches pour plus de tranquillité.
            </p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon red">
              <Clock size={24} />
            </div>
            <h3 className="feature-title">Notifications en temps réel</h3>
            <p className="feature-desc">
              Réservations, messages, départs imminents : ne manquez plus aucune information importante.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">Comment ça marche</span>
          <h2 className="section-title">Simple comme bonjour</h2>
          <p className="section-desc">
            En 3 étapes, trouvez votre covoiturage ou publiez votre trajet.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Recherchez</h3>
            <p className="step-desc">
              Entrez votre ville de départ, votre destination et la date souhaitée. Parcourez les trajets disponibles.
            </p>
            <div className="step-connector" />
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Réservez</h3>
            <p className="step-desc">
              Choisissez le trajet qui vous convient et réservez votre place en un clic. Contactez le conducteur si besoin.
            </p>
            <div className="step-connector" />
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Voyagez</h3>
            <p className="step-desc">
              Retrouvez-vous au point de rendez-vous et profitez du trajet. Laissez un avis après votre arrivée.
            </p>
          </div>
        </div>
      </section>

      {/* Popular routes */}
      <section className="routes" id="routes">
        <div className="section-header">
          <span className="section-tag">Trajets populaires</span>
          <h2 className="section-title">Les routes les plus empruntées</h2>
          <p className="section-desc">
            Découvrez les trajets les plus demandés par la communauté Yonam.
          </p>
        </div>

        <div className="routes-grid">
          {[
            { from: 'Dakar', to: 'Thiès', price: '2 500 FCFA' },
            { from: 'Dakar', to: 'Saint-Louis', price: '5 000 FCFA' },
            { from: 'Dakar', to: 'Mbour', price: '3 000 FCFA' },
            { from: 'Dakar', to: 'Kaolack', price: '4 500 FCFA' },
            { from: 'Dakar', to: 'Touba', price: '4 000 FCFA' },
            { from: 'Dakar', to: 'Ziguinchor', price: '8 000 FCFA' },
            { from: 'Thiès', to: 'Mbour', price: '1 500 FCFA' },
            { from: 'Saint-Louis', to: 'Louga', price: '2 000 FCFA' },
          ].map((route) => (
            <div className="route-card glass" key={`${route.from}-${route.to}`}>
              <div className="route-icon">
                <MapPin size={20} />
              </div>
              <div className="route-info">
                <div className="route-name">{route.from} → {route.to}</div>
                <div className="route-price">À partir de {route.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="safety" id="safety">
        <div className="section-header">
          <span className="section-tag">Sécurité</span>
          <h2 className="section-title">Votre sécurité, notre priorité</h2>
          <p className="section-desc">
            Yonam met en place des mesures concrètes pour assurer des trajets en toute confiance.
          </p>
        </div>

        <div className="safety-content">
          <ul className="safety-list">
            <li className="safety-item">
              <div className="safety-item-icon">
                <CheckCircle size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Vérification d'identité</h4>
                <p>Chaque conducteur peut vérifier son identité avec une pièce officielle et un selfie pour obtenir le badge de confiance.</p>
              </div>
            </li>
            <li className="safety-item">
              <div className="safety-item-icon">
                <Phone size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Numéro vérifié</h4>
                <p>Les numéros de téléphone sont vérifiés par SMS pour garantir la joignabilité de chaque membre.</p>
              </div>
            </li>
            <li className="safety-item">
              <div className="safety-item-icon">
                <Star size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Avis et évaluations</h4>
                <p>Un système de notes bidirectionnel permet de connaître la réputation de chaque utilisateur avant de voyager.</p>
              </div>
            </li>
            <li className="safety-item">
              <div className="safety-item-icon">
                <Shield size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Bouton SOS</h4>
                <p>En cas d'urgence, un bouton SOS permet d'alerter instantanément notre équipe et vos contacts de confiance.</p>
              </div>
            </li>
          </ul>

          <div className="safety-visual">
            <div className="safety-shield">
              <Eye size={56} color="#fff" className="safety-eye" />
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="support" id="support">
        <div className="section-header">
          <span className="section-tag">Support</span>
          <h2 className="section-title">Comment pouvons-nous vous aider ?</h2>
          <p className="section-desc">
            Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner.
          </p>
        </div>

        <div className="support-content">
          <div className="support-channels">
            <div className="support-channel-card whatsapp" onClick={handleWhatsApp}>
              <div className="support-channel-icon">
                <MessageCircle size={28} />
              </div>
              <div className="support-channel-body">
                <h3>Chat WhatsApp</h3>
                <p>Discutez en direct avec notre équipe via WhatsApp. Réponse rapide garantie.</p>
                <span className="support-channel-action">
                  Ouvrir WhatsApp <ArrowRight size={16} />
                </span>
              </div>
            </div>

            <div className="support-channel-card email" onClick={() => document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="support-channel-icon">
                <Mail size={28} />
              </div>
              <div className="support-channel-body">
                <h3>Email</h3>
                <p>Envoyez-nous un message détaillé et nous vous répondrons dans les 24h.</p>
                <span className="support-channel-action">
                  Remplir le formulaire <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>

          <form
            id="support-form"
            className="support-form glass"
            onSubmit={handleSupportSubmit}
          >
            <h3 className="support-form-title">Envoyez-nous un message</h3>

            {formSent && (
              <div className="support-form-success">
                <CheckCircle size={20} />
                Votre message a bien été envoyé. Notre équipe vous répondra sous 24h !
              </div>
            )}

            {formError && (
              <div className="support-form-error">
                {formError}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="support-name">Votre nom</label>
                <input
                  id="support-name"
                  type="text"
                  placeholder="Ex: Amadou Diop"
                  required
                  value={supportForm.name}
                  onChange={e => setSupportForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="support-email">Votre email</label>
                <input
                  id="support-email"
                  type="email"
                  placeholder="Ex: amadou@email.com"
                  required
                  value={supportForm.email}
                  onChange={e => setSupportForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="support-subject">Sujet</label>
              <input
                id="support-subject"
                type="text"
                placeholder="Ex: Problème de réservation, paiement..."
                value={supportForm.subject}
                onChange={e => setSupportForm(f => ({ ...f, subject: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="support-message">Décrivez votre besoin <span className="form-required">*</span></label>
              <textarea
                id="support-message"
                rows={5}
                placeholder="Expliquez en détail votre problème ou votre demande. Plus vous êtes précis, plus nous pourrons vous aider efficacement."
                required
                value={supportForm.message}
                onChange={e => setSupportForm(f => ({ ...f, message: e.target.value }))}
              />
            </div>

            <div className="support-form-footer">
              <button type="submit" className="btn-primary support-submit" disabled={sending}>
                <Send size={18} />
                {sending ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
              <button type="button" className="btn-whatsapp" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                Ou via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="download">
        <div className="cta-card">
          <h2>Prêt à voyager avec Yonam ?</h2>
          <p>
            Rejoignez des milliers de voyageurs qui partagent déjà leurs trajets au Sénégal.
          </p>
          <button className="cta-btn">
            <Car size={20} />
            Télécharger l'application
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <Logo light />
              </div>
              <p>
                La plateforme de covoiturage qui connecte les villes du Sénégal. Voyagez ensemble, partagez les frais.
              </p>
            </div>

            <div className="footer-col">
              <h4>Produit</h4>
              <ul>
                <li><a href="#features">Fonctionnalités</a></li>
                <li><a href="#routes">Trajets</a></li>
                <li><a href="#safety">Sécurité</a></li>
                <li><a href="#download">Télécharger</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Carrières</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#support">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#support">Centre d'aide</a></li>
                <li><a href="#support">Formulaire de contact</a></li>
                <li>
                  <a href="#support" onClick={e => { e.preventDefault(); handleWhatsApp() }}>
                    WhatsApp
                  </a>
                </li>
                <li><a href={`mailto:${SUPPORT_EMAIL}`}>Email support</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Légal</h4>
              <ul>
                <li><a href="#">CGU</a></li>
                <li><a href="/confidentialite">Politique de confidentialité</a></li>
                <li><a href="/conditions-annulation">Conditions d'annulation</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>2026 Yonam. Tous droits réservés.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social">
                <Heart size={16} />
              </a>
              <a href="#" className="footer-social">
                <Users size={16} />
              </a>
              <a href="#" className="footer-social">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
