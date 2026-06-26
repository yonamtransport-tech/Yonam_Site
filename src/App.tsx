import { useState, useEffect } from 'react'
import { Car, MapPin, Shield, Users, Wallet, Star, ArrowRight, Menu, X, CircleCheck as CheckCircle, Phone, MessageCircle, Clock, Navigation, Heart } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="logo">
            <div className="logo-icon">
              <Car size={22} color="#fff" />
            </div>
            <span className="logo-text">Nioudem</span>
          </div>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>Fonctionnalites</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>Comment ca marche</a>
            <a href="#routes" onClick={() => setMenuOpen(false)}>Trajets</a>
            <a href="#safety" onClick={() => setMenuOpen(false)}>Securite</a>
            <a href="#download" className="nav-cta" onClick={() => setMenuOpen(false)}>Telecharger</a>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible au Senegal
          </div>
          <h1>
            Voyagez ensemble avec <span className="highlight">Nioudem</span>
          </h1>
          <p className="hero-subtitle">
            La plateforme de covoiturage qui connecte les villes du Senegal.
            Partagez les frais, reduisez votre empreinte carbone et voyagez en toute confiance.
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

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">10 000+</div>
              <div className="hero-stat-label">Utilisateurs actifs</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Villes desservies</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">4.8/5</div>
              <div className="hero-stat-label">Note moyenne</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">-60%</div>
              <div className="hero-stat-label">Economies sur vos trajets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-tag">Fonctionnalites</span>
          <h2 className="section-title">Tout ce dont vous avez besoin pour voyager sereinement</h2>
          <p className="section-desc">
            Nioudem offre une experience complete pour les conducteurs et les passagers.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon pink">
              <MapPin size={24} />
            </div>
            <h3 className="feature-title">Trajets entre villes</h3>
            <p className="feature-desc">
              Trouvez des trajets entre toutes les grandes villes du Senegal : Dakar, Thies, Saint-Louis, Ziguinchor et bien plus.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">
              <Wallet size={24} />
            </div>
            <h3 className="feature-title">Paiement flexible</h3>
            <p className="feature-desc">
              Payez en especes, par Orange Money, Wave ou via le portefeuille integre. Simple et securise.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue">
              <Shield size={24} />
            </div>
            <h3 className="feature-title">Profils verifies</h3>
            <p className="feature-desc">
              Verification d'identite, avis et notes entre utilisateurs pour une communaute de confiance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <MessageCircle size={24} />
            </div>
            <h3 className="feature-title">Messagerie integree</h3>
            <p className="feature-desc">
              Communiquez directement avec votre conducteur ou passager pour organiser les details du trajet.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon teal">
              <Navigation size={24} />
            </div>
            <h3 className="feature-title">Suivi en temps reel</h3>
            <p className="feature-desc">
              Suivez votre trajet en direct. Partagez votre position avec vos proches pour plus de tranquillite.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon red">
              <Clock size={24} />
            </div>
            <h3 className="feature-title">Notifications en temps reel</h3>
            <p className="feature-desc">
              Reservations, messages, departs imminents : ne manquez plus aucune information importante.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">Comment ca marche</span>
          <h2 className="section-title">Simple comme bonjour</h2>
          <p className="section-desc">
            En 3 etapes, trouvez votre covoiturage ou publiez votre trajet.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Recherchez</h3>
            <p className="step-desc">
              Entrez votre ville de depart, votre destination et la date souhaitee. Parcourez les trajets disponibles.
            </p>
            <div className="step-connector" />
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Reservez</h3>
            <p className="step-desc">
              Choisissez le trajet qui vous convient et reservez votre place en un clic. Contactez le conducteur si besoin.
            </p>
            <div className="step-connector" />
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Voyagez</h3>
            <p className="step-desc">
              Retrouvez-vous au point de rendez-vous et profitez du trajet. Laissez un avis apres votre arrivee.
            </p>
          </div>
        </div>
      </section>

      {/* Popular routes */}
      <section className="routes" id="routes">
        <div className="section-header">
          <span className="section-tag">Trajets populaires</span>
          <h2 className="section-title">Les routes les plus empruntees</h2>
          <p className="section-desc">
            Decouvrez les trajets les plus demandes par la communaute Nioudem.
          </p>
        </div>

        <div className="routes-grid">
          {[
            { from: 'Dakar', to: 'Thies', price: '2 500 FCFA' },
            { from: 'Dakar', to: 'Saint-Louis', price: '5 000 FCFA' },
            { from: 'Dakar', to: 'Mbour', price: '3 000 FCFA' },
            { from: 'Dakar', to: 'Kaolack', price: '4 500 FCFA' },
            { from: 'Dakar', to: 'Touba', price: '4 000 FCFA' },
            { from: 'Dakar', to: 'Ziguinchor', price: '8 000 FCFA' },
            { from: 'Thies', to: 'Mbour', price: '1 500 FCFA' },
            { from: 'Saint-Louis', to: 'Louga', price: '2 000 FCFA' },
          ].map((route) => (
            <div className="route-card" key={`${route.from}-${route.to}`}>
              <div className="route-icon">
                <MapPin size={20} />
              </div>
              <div className="route-info">
                <div className="route-name">{route.from} → {route.to}</div>
                <div className="route-price">A partir de {route.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="safety" id="safety">
        <div className="section-header">
          <span className="section-tag">Securite</span>
          <h2 className="section-title">Votre securite, notre priorite</h2>
          <p className="section-desc">
            Nioudem met en place des mesures concretes pour assurer des trajets en toute confiance.
          </p>
        </div>

        <div className="safety-content">
          <ul className="safety-list">
            <li className="safety-item">
              <div className="safety-item-icon">
                <CheckCircle size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Verification d'identite</h4>
                <p>Chaque conducteur peut verifier son identite avec une piece officielle et un selfie pour obtenir le badge de confiance.</p>
              </div>
            </li>
            <li className="safety-item">
              <div className="safety-item-icon">
                <Phone size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Numero verifie</h4>
                <p>Les numeros de telephone sont verifies par SMS pour garantir la joignabilite de chaque membre.</p>
              </div>
            </li>
            <li className="safety-item">
              <div className="safety-item-icon">
                <Star size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Avis et evaluations</h4>
                <p>Un systeme de notes bidirectionnel permet de connaitre la reputation de chaque utilisateur avant de voyager.</p>
              </div>
            </li>
            <li className="safety-item">
              <div className="safety-item-icon">
                <Shield size={20} />
              </div>
              <div className="safety-item-text">
                <h4>Bouton SOS</h4>
                <p>En cas d'urgence, un bouton SOS permet d'alerter instantanement notre equipe et vos contacts de confiance.</p>
              </div>
            </li>
          </ul>

          <div className="safety-visual">
            <div className="safety-shield">
              <Shield size={48} color="#fff" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="download">
        <div className="cta-card">
          <h2>Pret a voyager avec Nioudem ?</h2>
          <p>
            Rejoignez des milliers de voyageurs qui partagent deja leurs trajets au Senegal.
          </p>
          <button className="cta-btn">
            <Car size={20} />
            Telecharger l'application
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <Car size={20} color="#fff" />
                </div>
                <span className="logo-text" style={{ color: '#fff' }}>Nioudem</span>
              </div>
              <p>
                La plateforme de covoiturage qui connecte les villes du Senegal. Voyagez ensemble, partagez les frais.
              </p>
            </div>

            <div className="footer-col">
              <h4>Produit</h4>
              <ul>
                <li><a href="#features">Fonctionnalites</a></li>
                <li><a href="#routes">Trajets</a></li>
                <li><a href="#safety">Securite</a></li>
                <li><a href="#download">Telecharger</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Carrieres</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">CGU</a></li>
                <li><a href="#">Politique de confidentialite</a></li>
                <li><a href="#">Politique d'annulation</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>2026 Nioudem. Tous droits reserves.</p>
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
