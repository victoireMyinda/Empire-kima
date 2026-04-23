import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import logoBlanc from './assets/logoblanc.png'
import Header from './components/Header'
import SectionImage from './components/SectionImage'
import { siteContent } from './data/siteContent'
import type { Locale, Theme } from './data/siteContent'
import styles from './App.module.css'

function App() {
  const [locale, setLocale] = useState<Locale>('fr')
  const [theme, setTheme] = useState<Theme>('dark')
  const content = siteContent[locale]

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const whatsappHref = useMemo(() => {
    const phone = '243974340647'
    return `https://wa.me/${phone}?text=${encodeURIComponent(content.whatsapp.message)}`
  }, [content.whatsapp.message])

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const message = String(formData.get('message') ?? '')

    const body = [
      `${content.contact.fields.name}: ${name}`,
      `${content.contact.fields.email}: ${email}`,
      `${content.contact.fields.phone}: ${phone}`,
      `${content.contact.fields.message}: ${message}`,
    ].join('\n')

    window.location.href = `mailto:empirekima5@gmail.com?subject=${encodeURIComponent(content.contact.mailSubject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className={styles.appShell}>
      <Header
        logoSrc={logoBlanc}
        navItems={content.navItems}
        ctaLabel={content.header.cta}
        menuLabel={content.header.menuLabel}
        languageLabel={content.header.languageLabel}
        themeLabel={content.header.themeLabel}
        locale={locale}
        theme={theme}
        switchToDarkLabel={content.header.switchToDark}
        switchToLightLabel={content.header.switchToLight}
        onLocaleChange={setLocale}
        onThemeToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <section id="accueil" className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
                <h1>{content.hero.title}</h1>
                <p className={styles.lead}>{content.hero.lead}</p>
                <p className={styles.intro}>{content.hero.intro}</p>
                <div className={styles.actionRow}>
                  <a className={styles.primaryButton} href="#contact">
                    {content.hero.primaryCta}
                  </a>
                  <a className={styles.secondaryButton} href="#services">
                    {content.hero.secondaryCta}
                  </a>
                </div>
              </div>
              <div className={styles.heroAside}>
                <SectionImage {...content.sectionImages.accueil} eager />
                <article className={styles.panelCard} aria-label={content.hero.highlightsTitle}>
                  <h2>{content.hero.highlightsTitle}</h2>
                  <ul className={styles.highlightList}>
                    {content.values.map((value) => (
                      <li key={value.title}>{value.title}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="apropos" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{content.about.eyebrow}</p>
              <h2>{content.about.title}</h2>
            </div>
            <div className={styles.mediaLayout}>
              <SectionImage {...content.sectionImages.apropos} />
              <div className={styles.cardsGridThree}>
                {content.about.cards.map((card) => (
                  <article className={styles.panelCard} key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className={styles.cardsGridFive}>
              {content.values.map((value) => (
                <article className={styles.panelCard} key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
            <article className={styles.processCard}>
              <h3>{content.about.processTitle}</h3>
              <ol>
                {content.processSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        <section id="services" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{content.servicesSection.eyebrow}</p>
              <h2>{content.servicesSection.title}</h2>
            </div>
            <div className={styles.mediaLayout}>
              <SectionImage {...content.sectionImages.services} />
              <div className={styles.cardsGridThree}>
                {content.services.map((service) => (
                  <article className={styles.panelCard} key={service.title}>
                    <h3>{service.title}</h3>
                    <ul className={styles.serviceList}>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="maintenance" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{content.maintenanceSection.eyebrow}</p>
              <h2>{content.maintenanceSection.title}</h2>
              <p className={styles.mutedText}>{content.maintenanceSection.description}</p>
            </div>
            <div className={styles.mediaLayout}>
              <SectionImage {...content.sectionImages.maintenance} />
              <div className={styles.planGrid}>
                {content.maintenancePlans.map((plan) => (
                  <article key={plan.name} className={styles.planCard}>
                    <h3>{plan.name}</h3>
                    <p>{plan.details}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="realisations" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{content.realisationsSection.eyebrow}</p>
              <h2>{content.realisationsSection.title}</h2>
            </div>
            <div className={styles.mediaLayout}>
              <SectionImage {...content.sectionImages.realisations} />
              <div className={styles.projectGrid}>
                {content.projects.map((project) => (
                  <article className={styles.panelCard} key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className={styles.badge}>
                      {content.realisationsSection.projectBadge}
                    </span>
                  </article>
                ))}
              </div>
            </div>
            <div className={styles.testimonialGrid}>
              {content.testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className={styles.panelCard}>
                  <p>"{testimonial.quote}"</p>
                  <cite>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{content.contact.eyebrow}</p>
              <h2>{content.contact.title}</h2>
              <p className={styles.lead}>{content.contact.lead}</p>
            </div>
            <div className={styles.mediaLayout}>
              <SectionImage {...content.sectionImages.contact} />
              <div className={styles.contactContent}>
                <ul className={styles.contactDetails}>
                  {content.contact.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <form
                  className={styles.contactForm}
                  aria-label={content.contact.formAriaLabel}
                  onSubmit={handleContactSubmit}
                >
                  <label htmlFor="name">{content.contact.fields.name}</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />

                  <label htmlFor="email">{content.contact.fields.email}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />

                  <label htmlFor="phone">{content.contact.fields.phone}</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required />

                  <label htmlFor="message">{content.contact.fields.message}</label>
                  <textarea id="message" name="message" rows={5} required />

                  <button type="submit" className={styles.primaryButton}>
                    {content.contact.fields.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.container}>
            <article className={styles.ctaPanel}>
              <p className={styles.eyebrow}>{content.cta.eyebrow}</p>
              <h2>{content.cta.title}</h2>
              <p>{content.cta.description}</p>
              <a className={styles.primaryButton} href="#contact">
                {content.cta.button}
              </a>
            </article>
          </div>
        </section>
      </main>

      <a
        className={styles.whatsappFab}
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={content.whatsapp.ariaLabel}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M19.11 17.22c-.27-.14-1.6-.78-1.85-.87-.25-.09-.43-.14-.62.14-.18.27-.71.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.62-1.49-.84-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.47.07-.71.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.55.58.65.2 1.25.17 1.72.11.53-.08 1.6-.65 1.82-1.27.23-.62.23-1.16.16-1.27-.07-.11-.25-.18-.52-.31z" />
          <path d="M27.17 4.84C24.18 1.86 20.21.22 15.98.22 7.24.23.13 7.34.13 16.08c0 2.8.73 5.53 2.13 7.94L.02 31.78l7.94-2.22c2.32 1.27 4.92 1.94 7.58 1.94h.01c8.74 0 15.85-7.11 15.85-15.85 0-4.23-1.64-8.21-4.63-11.2zm-11.62 24c-2.39 0-4.73-.64-6.78-1.86l-.49-.29-4.71 1.32 1.35-4.59-.32-.47a12.8 12.8 0 0 1-2-6.87c0-7.07 5.75-12.82 12.82-12.82 3.42 0 6.63 1.33 9.05 3.75a12.74 12.74 0 0 1 3.75 9.05c0 7.07-5.75 12.82-12.82 12.82z" />
        </svg>
      </a>

      <footer className={styles.siteFooter}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <p>
              © {new Date().getFullYear()} EMPIRE KIMA. {content.footer.rights}
            </p>
            <a href="#accueil">{content.footer.backToTop}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
