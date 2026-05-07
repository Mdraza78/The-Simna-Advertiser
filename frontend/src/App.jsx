import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ISO from './images/ISO.png';
import ASGA from './images/ASGA.png';
import SGAI from './images/SGAI.png';
import ownerImg from './images/image.png';
import Logo from './images/Logo.png';
import SGIA from './images/SGIA.png';

// ── Machine images ──────────────────────────────────────────────────────────
import imgHPLatex from './images/HP-latex-315.png';
import imgSuperPrint from './images/Super_Print.png';
import imgUVIR from './images/UV_and_IR.png';
import imgFloraFlex from './images/Flora_Flex.png';
import imgUVDTF from './images/UV_DTF.png';
import imgRollToRoll from './images/4\'_roll_to_roll.png';
import imgThermalLam from './images/Thermal_Lamination_Machine.png';
import imgMiniOffset from './images/Mini_offset_digital_machine.png';
import imgHPSensor from './images/4\'_hp_Sensor_cutting_plotter.png';
import imgDoubleHead from './images/2\'_double_plottor.png';
import imgTShirtCap from './images/T-Shirt,Cap,Printing_machine.png';
import imgAutoBunch from './images/Automatic_bunch_cutting_plotter.png';
import imgUVGlover from './images/UV_glovver.png';
import imgMaskingTape from './images/Masking_tape_making.png';
import imgRollCutting from './images/Roll_cutting_machine.png';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const FORMSPREE_ID = 'xykojzwa';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const services = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <rect x="6" y="10" width="36" height="28" rx="2"/>
          <path d="M6 18h36M16 10v8M32 10v8"/>
          <path d="M14 28h6M14 34h12"/>
        </svg>
      ),
      title: 'Self-Adhesive Stickers',
      desc: 'Custom die-cut and roll stickers for industrial, commercial, and retail use. Precision-printed with lasting adhesion for any surface.',
      tag: 'LABELS'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <rect x="8" y="12" width="32" height="24" rx="1.5"/>
          <path d="M14 20h20M14 26h14M14 32h10"/>
          <circle cx="38" cy="14" r="4" strokeWidth="2"/>
          <path d="M36 14h4M38 12v4"/>
        </svg>
      ),
      title: 'Metal Labels & Nameplates',
      desc: 'Durable aluminum and stainless steel labels for OEM machinery, equipment identification, and compliance marking.',
      tag: 'METALEBELS'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <path d="M8 38L24 10l16 28H8z"/>
          <path d="M24 22v8M24 34v.5"/>
          <path d="M6 42h36"/>
        </svg>
      ),
      title: 'Safety Signboards',
      desc: 'ISO-compliant safety and hazard signboards for industrial facilities, warehouses, and construction sites.',
      tag: 'SIGNAGE'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <rect x="4" y="8" width="40" height="26" rx="2"/>
          <path d="M4 20h40M16 8v26M32 8v26"/>
          <path d="M16 38v4M32 38v4M10 42h28"/>
        </svg>
      ),
      title: 'Large Format Printing',
      desc: 'Banner, flex, canvas, and vinyl printing for hoardings, exhibitions, retail branding, and outdoor advertising.',
      tag: 'PRINT'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <circle cx="24" cy="24" r="16"/>
          <path d="M24 14v10l6 6"/>
          <path d="M10 24h4M34 24h4M24 10v4M24 34v4"/>
        </svg>
      ),
      title: 'Industrial Graphics',
      desc: 'Vehicle graphics, fleet branding, and industrial identification graphics for trucks, trailers, and heavy machinery.',
      tag: 'GRAPHICS'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <rect x="6" y="14" width="36" height="20" rx="2"/>
          <path d="M6 22h36M14 14v20M24 14v20"/>
          <circle cx="34" cy="30" r="3"/>
          <path d="M10 18h6M10 26h6M10 30h6"/>
        </svg>
      ),
      title: 'Commercial Printing',
      desc: 'Cosmetics labels, pharmaceutical packaging, brochures, catalogues, and marketing collateral with vibrant color accuracy.',
      tag: 'COMMERCIAL'
    },
  ];

  const machines = [
    {
      name: 'HP Latex 315',
      category: 'Large Format',
      img: imgHPLatex,
    },
    {
      name: 'Super Print Machine',
      category: 'Offset',
      img: imgSuperPrint,
    },
    {
      name: 'UV & IR Machine',
      category: 'UV Print',
      img: imgUVIR,
    },
    {
      name: 'Flora Flex Machine',
      category: 'Flex Print',
      img: imgFloraFlex,
    },
    {
      name: 'UV DTF Machine',
      category: 'DTF Print',
      img: imgUVDTF,
    },
    {
      name: "4' Roll-to-Roll Lamination",
      category: 'Finishing',
      img: imgRollToRoll,
    },
    {
      name: 'Thermal Lamination',
      category: 'Finishing',
      img: imgThermalLam,
    },
    {
      name: 'Mini Offset Digital',
      category: 'Digital',
      img: imgMiniOffset,
    },
    {
      name: "4' HP Sensor Cutting Plotter",
      category: 'Cutting',
      img: imgHPSensor,
    },
    {
      name: "2' Double Head Plotter",
      category: 'Plotting',
      img: imgDoubleHead,
    },
    {
      name: 'T-Shirt, Cap & Mug Printer',
      category: 'Promo Print',
      img: imgTShirtCap,
    },
    {
      name: 'Auto Bunch Cutting Plotter',
      category: 'Cutting',
      img: imgAutoBunch,
    },
    {
      name: 'UV Glover Machine',
      category: 'UV Coat',
      img: imgUVGlover,
    },
    {
      name: 'Masking Tape Maker',
      category: 'Manufacturing',
      img: imgMaskingTape,
    },
    {
      name: 'Roll Cutting Machine',
      category: 'Slitting',
      img: imgRollCutting,
    },
  ];

  const clients = [
    'Tata Motors', 'Ashok Leyland', 'Bharat Benz', 'Hyva India',
    'Tata International Vehicle Application Pvt. Ltd.', 'Black Diamond Motors',
    'Wipro Infrastructure Engg.', 'Kross Limited', 'Jupiter Wagons Ltd.',
    'Utkal Autocoach', 'Shivam Motors', 'Bhalotia Group Of Companies',
    'Aditya Automotive', 'Amma Automobiles', 'Bharat Engineering & Body Building',
    'Indico Motors', 'Surin Automobiles', 'Maurya Motors', 'Maniar Engg.',
    'Jagdamba Trailers Pvt. Ltd.', 'Associated Engineers', 'Jaika Automobiles',
    'Vandana Truck & Trailers', 'Shine Motors', 'Vazron Automobiles',
    'SGB Infrastructure', 'Kailash Vahan', 'Boodhia Motors',
    'Universal Auto Components', 'SRBH Fabricators', 'Palfab Co.',
    'Mirzapur Body Building Co.', 'Suraj Automobiles', 'Garg Engg.',
    'Shokhi Engg.', 'Khemji Trailer Pvt. Ltd.', 'Core-B Trailers', 'MAT Foundry India',
  ];

  const certifications = [
    {
      code: 'ISO',
      title: 'ISO 9001:2015',
      body: 'QCS Management Pvt. Ltd.',
      desc: 'Certified Quality Management System — covering design, manufacturing, printing and delivery services.',
    },
    {
      code: 'MSME',
      title: 'MSME Registered',
      body: 'Udyam Registration',
      desc: 'Officially registered micro, small & medium enterprise with the Government of India.',
    },
    {
      code: 'SGIA',
      title: 'SGIA Member',
      body: 'Specialty Graphic Imaging Association',
      desc: 'International member — Jan 2022 to Dec 2022 — demonstrating commitment to global print standards.',
    },
    {
      code: 'ASGA',
      title: 'ASGA Member',
      body: 'Asia Screen Printing & Graphic Imaging Association',
      desc: 'Regional member body for screen printing and graphic imaging excellence across Asia.',
    },
    {
      code: 'SGAI',
      title: 'SGAI Member',
      body: 'Screen Printing & Graphics Association of India',
      desc: "National member association for India's screen printing and graphics industry.",
    },
    {
      code: 'HYVA',
      title: 'Best Supplier Award',
      body: 'Hyva India — Certificate of Sales & Best Quality',
      desc: 'Recognised by Hyva India for outstanding quality and supply reliability in industrial graphics.',
    },
  ];

  const stats = [
    { value: '29+', label: 'Years of Excellence' },
    { value: '38+', label: 'Major OEM Clients' },
    { value: '15+', label: 'Advanced Machines' },
    { value: '1995', label: 'Established' },
  ];
useEffect(() => {
    const animateCount = (el, target, duration = 2000) => {
      const isPlus = target.toString().includes('+');
      const num = parseInt(target);
      let start = 0;
      const step = Math.ceil(num / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= num) {
          start = num;
          clearInterval(timer);
        }
        el.textContent = start + (isPlus ? '+' : '');
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = el.getAttribute('data-count');
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-value').forEach((el) => {
      el.setAttribute('data-count', el.textContent);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
      <a href="#home" className="nav-logo">
            <div className="logo-icon">
            <img src={Logo} alt="TSA Logo" />
            </div>
          </a>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['Home', 'About', 'Services', 'Machinery', 'Clients', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Get a Quote</a>
            </li>
          </ul>

          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-blob blob1" />
          <div className="hero-blob blob2" />
          <div className="hero-grid-lines" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title reveal-up delay-1">
            <span className="title-line-small">The</span>
            <span className="title-line-main">SIMNA</span>
            <span className="title-line-main accent-line">ADVERTISER</span>
          </h1>

          <p className="hero-tagline reveal-up delay-2">
            Trusted name for quality
          </p>

          <p className="hero-desc reveal-up delay-3">
            India's trusted partner for industrial graphics, metal labels, self-adhesive stickers,
            safety signboards and large-format printing — serving OEM leaders since 1995.
          </p>

          <div className="hero-ctas reveal-up delay-4">
            <a href="#services" className="btn-primary">
              <span>Explore Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn-outline">Get a Quote</a>
          </div>

          <div className="hero-credentials reveal-up delay-5">
            <div className="hero-cred-group">
              <span className="hero-cred-label">ISO Certified</span>
              <img src={ISO} alt="ISO 9001:2015 Certified" className="hero-logo-iso" />
            </div>
            <div className="hero-cred-sep" />
            <div className="hero-cred-group">
              <span className="hero-cred-label">Members</span>
              <div className="hero-logos-row">
                <img src={SGIA} alt="SGIA" className="hero-logo-member" />
                <img src={ASGA} alt="ASGA" className="hero-logo-member" />
                <img src={SGAI} alt="SGAI" className="hero-logo-member" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal-left">
              <div className="about-card-outer">
                <div className="about-card-main">
                  <div className="founder-portrait">
  <img src={ownerImg} alt="Syed Zahid Hussain Quadri" />
</div>
                  <div className="founder-info">
                    <strong>Syed Zahid Hussain Quadri</strong>
                    <span>Founder & Director</span>
                  </div>
                  <div className="about-card-stats">
                    <div className="astat">
                      <b>29+</b>
                      <span>Years</span>
                    </div>
                    <div className="astat-divider" />
                    <div className="astat">
                      <b>38+</b>
                      <span>Major Clients</span>
                    </div>
                    <div className="astat-divider" />
                    <div className="astat">
                      <b>15+</b>
                      <span>Machines</span>
                    </div>
                  </div>
                </div>
                <div className="about-card-accent">
                  <span>Est. 1995 · Jamshedpur</span>
                </div>
              </div>
            </div>

            <div className="about-text reveal-right">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">
                One of India's <span className="text-accent">Leading Advertisers</span>
              </h2>
              <p>
                In 1996, Syed Zahid Hussain Quadri founded The Simna Advertiser with a vision for
                self-reliance and quality-first manufacturing. What started as a local printing venture
                has grown into a major force in commercial printing, cosmetics labels, pharmaceuticals,
                and industrial graphics across India.
              </p>
              <p>
                Today, Simna Advertiser is the go-to supplier of self-adhesive stickers and metal labels
                for India's biggest OEM companies — including Tata Motors, Ashok Leyland, Bharat Benz,
                Wipro Infrastructure, and dozens more. Every product we make carries our promise:
                precision in every process, perfection in every product.
              </p>
              <div className="about-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z"/></svg>
                <span>Simna Advertiser — Meeting every criterion of the market, moving towards a golden tomorrow.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">
              Complete <span className="text-accent">Signage Solutions</span>
            </h2>
            <p className="section-sub">
              From industrial labels to large-format campaigns — every print need, under one roof.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <div
                className={`service-card reveal-up delay-${(i % 3) + 1}`}
                key={i}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-tag">{service.tag}</div>
                <div className={`service-icon-wrap ${activeService === i ? 'active' : ''}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MACHINERY ===== */}
      <section id="machinery" className="section machinery-section">
        <div className="machinery-bg-text">PRINT</div>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-eyebrow light">Our Equipment</span>
            <h2 className="section-title light">
              State-of-the-Art <span className="text-accent-lime">Machinery</span>
            </h2>
            <p className="section-sub light">
              15+ advanced machines ensuring precision, speed, and consistent quality across every job.
            </p>
          </div>

          <div className="machines-grid reveal-up delay-2">
            {machines.map((m, i) => (
              <div className="machine-card" key={i}>
                <div className="machine-img-wrap">
                  <img src={m.img} alt={m.name} className="machine-photo" />
                </div>
                <div className="machine-info">
                  <span className="machine-cat">{m.category}</span>
                  <span className="machine-name">{m.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY BANNER ===== */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-inner reveal-up">
            <div className="quality-quote-mark">"</div>
            <div className="quality-content">
              <h2>Quality Policy</h2>
              <p>
                Simna Advertiser Total Signage System Co. is fully committed to achieve quality
                through ongoing development of manufacturing skill and sale of reliable,
                effective quality products.
              </p>
              <blockquote>Quality is remembered long after the price is forgotten.</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section id="clients" className="section clients-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-eyebrow">Who We Serve</span>
            <h2 className="section-title">
              Trusted by <span className="text-accent">Industry Leaders</span>
            </h2>
            <p className="section-sub">
              Supplying metal labels and industrial graphics to India's top OEM and automotive companies.
            </p>
          </div>

          <div className="clients-marquee-wrap reveal-up delay-1">
            <div className="clients-fade-left" />
            <div className="clients-fade-right" />
            <div className="clients-track">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="client-chip">{c}</span>
              ))}
            </div>
          </div>

          <div className="clients-grid reveal-up delay-2">
            {clients.slice(0, 20).map((c, i) => (
              <div className="client-tile" key={i}>{c}</div>
            ))}
            <div className="client-tile more-tile">+{clients.length - 20} More</div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section certs-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-title">
              Certifications & <span className="text-accent">Memberships</span>
            </h2>
          </div>

          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div className={`cert-card reveal-up delay-${(i % 3) + 1}`} key={i}>
                <div className="cert-code">{cert.code}</div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <span className="cert-body">{cert.body}</span>
                  <p>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title">
              Let's <span className="text-accent">Work Together</span>
            </h2>
            <p className="section-sub">
              Contact us for quotes, custom orders, or any signage and printing requirements.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info reveal-left">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Office &amp; Factory</strong>
                  <p>N.H. Colony, Gulab Bagh, Near Chepapul,<br />Mango, Jamshedpur – 832110, Jharkhand</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12.4 19.79 19.79 0 0 1 1.86 3.77 2 2 0 0 1 3.83 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
             <div>
                  <strong>Phone</strong>
                  <div className="contact-links-group">
                    <a href="tel:06572956012">0657-2956012</a>
                    <a href="tel:+919939184917">+91-9939184917</a>
                    <a href="tel:+916201605149">+91-6201605149</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <div className="contact-links-group">
                    <a href="mailto:simq57@gmail.com">simq57@gmail.com</a>
                    <a href="mailto:simnaadvertiser@gmail.com">simnaadvertiser@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Working Hours</strong>
                  <p>Monday – Saturday: 9:00 AM – 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-form reveal-right">
              <h3>Request a Quote</h3>

              {formStatus === 'success' ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4>Enquiry Received</h4>
                  <p>Thank you for reaching out. Our team will get back to you within 1 business day.</p>
                  <button className="btn-send-another" onClick={() => setFormStatus('idle')}>Send another enquiry →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="name" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+91 XXXXXXXXXX" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Business Email</label>
                    <input type="email" name="email" placeholder="you@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Service Required</label>
                    <select name="service">
                      <option value="">Select a service...</option>
                      <option>Self-Adhesive Stickers</option>
                      <option>Metal Labels &amp; Nameplates</option>
                      <option>Safety Signboards</option>
                      <option>Large Format Printing</option>
                      <option>Industrial Graphics</option>
                      <option>Commercial Printing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Project Details</label>
                    <textarea name="message" rows="4" placeholder="Describe your requirement — quantity, size, material, deadline..." required />
                  </div>
                  {formStatus === 'error' && (
                    <p className="form-error">Something went wrong. Please try again or contact us directly.</p>
                  )}
                  <button type="submit" className="btn-primary full-width" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? (
                      <><span className="btn-spinner" /> Sending...</>
                    ) : (
                      <><span>Send Enquiry</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>
                    )}
                  </button>
                  <p className="form-note">
                    Or reach us directly at <a href="mailto:simnaadvertiser@gmail.com">simnaadvertiser@gmail.com</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-col">
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src={Logo} alt="TSA Logo" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius: 'var(--r-sm)'}} />
                </div>
                <div>
                  <div className="footer-name">THE SIMNA ADVERTISER</div>
                  <div className="footer-sub">Trusted Name for Quality · Est. 1995</div>
                </div>
              </div>
              <p className="footer-tagline">
                A Complete Signage System — ISO 9001:2015 Certified. Serving OEM industries across India since 1995.
              </p>
              <div className="footer-credentials">
                <div className="footer-cred-group">
                  <span className="footer-cred-label">ISO Certified</span>
                  <img src={ISO} alt="ISO 9001:2015 Certified" className="footer-logo-iso" />
                </div>
                <div className="footer-cred-sep" />
                <div className="footer-cred-group">
                  <span className="footer-cred-label">Members</span>
                  <div className="footer-logos-row">
                    <img src={SGIA} alt="SGIA" className="footer-logo-member" />
                    <img src={ASGA} alt="ASGA" className="footer-logo-member" />
                    <img src={SGAI} alt="SGAI" className="footer-logo-member" />
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-links-col">
              <strong>Services</strong>
              <a href="#services">Self-Adhesive Stickers</a>
              <a href="#services">Metal Labels</a>
              <a href="#services">Safety Signboards</a>
              <a href="#services">Large Format Printing</a>
              <a href="#services">Industrial Graphics</a>
              <a href="#services">Commercial Printing</a>
            </div>

            <div className="footer-links-col">
              <strong>Company</strong>
              <a href="#about">About Us</a>
              <a href="#machinery">Machinery</a>
              <a href="#clients">Our Clients</a>
              <a href="#contact">Contact Us</a>
            </div>

            <div className="footer-contact-col">
              <strong>Contact Us</strong>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>N.H. Colony, Gulab Bagh,<br />Near Chepapul, Mango,<br />Jamshedpur – 832110, Jharkhand</p>
              </div>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12.4 19.79 19.79 0 0 1 1.86 3.77 2 2 0 0 1 3.83 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div>
                  <a href="tel:06572956012">0657-2956012</a>
                  <a href="tel:+919939184917">+91-9939184917</a>
                  <a href="tel:+916201605149">+91-6201605149</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <a href="mailto:simq57@gmail.com">simq57@gmail.com</a>
                  <a href="mailto:simnaadvertiser@gmail.com">simnaadvertiser@gmail.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <p>Mon – Sat: 9:00 AM – 7:00 PM<br /><span className="footer-closed">Sunday: Closed</span></p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} The Simna Advertiser. All rights reserved. · Jamshedpur, Jharkhand
            </div>
            <div className="footer-bottom-right">
              ISO 9001:2015 Certified · MSME Registered
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;