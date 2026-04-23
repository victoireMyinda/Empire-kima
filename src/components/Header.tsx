import { useState } from 'react'
import type { Locale, NavItem, Theme } from '../data/siteContent'
import styles from './Header.module.css'

type HeaderProps = {
  logoSrc: string
  navItems: NavItem[]
  ctaLabel: string
  menuLabel: string
  languageLabel: string
  themeLabel: string
  locale: Locale
  theme: Theme
  switchToLightLabel: string
  switchToDarkLabel: string
  onLocaleChange: (locale: Locale) => void
  onThemeToggle: () => void
}

function Header({
  logoSrc,
  navItems,
  ctaLabel,
  menuLabel,
  languageLabel,
  themeLabel,
  locale,
  theme,
  switchToDarkLabel,
  switchToLightLabel,
  onLocaleChange,
  onThemeToggle,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.siteHeader}>
      <div className={styles.container}>
        <a className={styles.brand} href="#accueil" aria-label="Retour a l accueil">
          <img src={logoSrc} alt="Logo EMPIRE KIMA" />
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
          <span className={styles.menuLabel}>{menuLabel}</span>
        </button>

        <nav
          id="site-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Navigation principale"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileCta}>
              <a href="#contact" onClick={closeMenu}>
                {ctaLabel}
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.controls}>
          <div className={styles.segment} role="group" aria-label={languageLabel}>
            <button
              type="button"
              className={locale === 'fr' ? styles.segmentActive : ''}
              onClick={() => onLocaleChange('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className={locale === 'en' ? styles.segmentActive : ''}
              onClick={() => onLocaleChange('en')}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={styles.themeButton}
            onClick={onThemeToggle}
            aria-label={themeLabel}
            title={theme === 'dark' ? switchToLightLabel : switchToDarkLabel}
          >
            {theme === 'dark' ? '☀' : '🌙'}
          </button>

          <a className={styles.headerCta} href="#contact">
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
