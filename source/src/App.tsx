import { useEffect, useRef, useState } from "react"
import {
  LOCALES,
  translations,
  type Locale,
  type SiteCopy,
  type StoryId,
} from "./i18n"

const STORAGE_KEY = "firebirds-locale"

function isLocale(val: string | null | undefined): val is Locale {
  return val === "en" || val === "vn" || val === "ja" || val === "ko"
}

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const params = new URLSearchParams(window.location.search)
  const queryLang = params.get("lang")?.toLowerCase()
  if (isLocale(queryLang)) return queryLang

  const firstSegment = window.location.pathname
    .split("/")
    .filter(Boolean)[0]
    ?.toLowerCase()
  if (isLocale(firstSegment)) return firstSegment

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)?.toLowerCase()
    if (isLocale(saved)) return saved
  } catch {
    // ignore storage errors
  }

  return "en"
}

function storyFromPath(): StoryId | null {
  const id = window.location.pathname.split("/").filter(Boolean).at(-1)
  return id === "tropical-origin" || id === "vietnam-craft" ? id : null
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  )
}

function LanguageSwitcher({
  locale,
  onChange,
  className = "",
}: {
  locale: Locale
  onChange: (next: Locale) => void
  className?: string
}) {
  return (
    <div
      className={`lang-switcher ${className}`.trim()}
      role="group"
      aria-label="Language selector"
    >
      {LOCALES.map((item) => {
        const active = locale === item.id
        return (
          <button
            key={item.id}
            type="button"
            className={`lang-btn ${active ? "is-active" : ""}`}
            aria-pressed={active}
            title={item.name}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

function StoryPage({
  storyId,
  copy,
  locale,
  onSelectLocale,
  onHome,
  onOtherStory,
}: {
  storyId: StoryId
  copy: SiteCopy
  locale: Locale
  onSelectLocale: (next: Locale) => void
  onHome: () => void
  onOtherStory: (id: StoryId) => void
}) {
  const story = copy.stories[storyId]
  const venue = copy.venues.find((item) => item.id === storyId)!
  const otherId: StoryId =
    storyId === "tropical-origin" ? "vietnam-craft" : "tropical-origin"
  const otherStory = copy.stories[otherId]

  return (
    <div className={`story-page ${story.tone}`}>
      <header className="story-nav">
        <button type="button" className="story-home" onClick={onHome}>
          Firebirds <span>{copy.brandSub}</span>
        </button>
        <div className="story-nav-actions">
          <LanguageSwitcher locale={locale} onChange={onSelectLocale} />
          <button type="button" className="story-close" onClick={onHome}>
            {copy.storyPage.backToBranches}
          </button>
        </div>
      </header>

      <main>
        <section className="story-hero">
          <img src={story.hero} alt={`${venue.name} inspiration`} />
          <div className="story-hero-shade" />
          <div className="story-hero-copy">
            <p>{venue.name}</p>
            <h1>{story.title}</h1>
            <span>{story.subtitle}</span>
          </div>
        </section>

        <section className="story-lead">
          <p className="section-number">{story.leadLabel}</p>
          <h2>{story.intro}</h2>
        </section>

        <section className="story-article">
          <div className="story-detail-image">
            <img
              src={story.detail}
              alt={story.detailAlt}
            />
            <span>{story.detailCaption}</span>
          </div>
          <div className="story-chapters">
            {story.chapters.map((chapter) => (
              <article key={chapter.heading}>
                <h3>{chapter.heading}</h3>
                <p>{chapter.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-gallery" aria-label={story.galleryTitle}>
          <div className="story-gallery-header">
            <p className="section-number">{story.galleryLabel}</p>
            <h2>{story.galleryTitle}</h2>
          </div>
          <div className="story-gallery-grid">
            {story.gallery.map((photo) => (
              <figure className="story-gallery-item" key={photo.src}>
                <div className="story-gallery-frame">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <blockquote className="story-quote">“{story.quote}”</blockquote>

        <section className="story-ending">
          <p>{copy.storyPage.endingKicker}</p>
          <h2>{copy.storyPage.endingTitle}</h2>
          <div className="story-ending-actions">
            <button type="button" onClick={() => onOtherStory(otherId)}>
              <span>{copy.storyPage.readOther}</span>
              <strong>{otherStory.title}</strong>
              <ArrowIcon />
            </button>
            <a href={venue.link} target="_blank" rel="noreferrer">
              <span>{copy.storyPage.enoughReading}</span>
              <strong>{copy.storyPage.openInMaps}</strong>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeBranch, setActiveBranch] = useState(0)
  const [activeStory, setActiveStory] = useState<StoryId | null>(storyFromPath)
  const [locale, setLocale] = useState<Locale>(detectInitialLocale)
  const venueTrackRef = useRef<HTMLDivElement>(null)

  const copy = translations[locale]
  const venues = copy.venues

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onRouteChange = () => {
      setActiveStory(storyFromPath())
      window.scrollTo(0, 0)
    }
    window.addEventListener("popstate", onRouteChange)
    return () => window.removeEventListener("popstate", onRouteChange)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "vn" ? "vi" : locale
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore storage errors
    }
  }, [locale])

  useEffect(() => {
    if (activeStory) {
      const story = copy.stories[activeStory]
      const venue = copy.venues.find((v) => v.id === activeStory)
      document.title = `${story.title} · Firebirds ${venue?.name ?? ""}`
    } else {
      document.title = "Firebirds Cocktail & More · Da Nang, Vietnam"
    }
  }, [activeStory, copy])

  const closeMenu = () => setMenuOpen(false)

  const handleSelectLocale = (next: Locale) => {
    setLocale(next)
    if (
      window.location.pathname === "/vn" ||
      window.location.pathname === "/ja" ||
      window.location.pathname === "/ko"
    ) {
      window.history.replaceState({}, "", "/")
    }
  }

  const openStory = (storyId: StoryId) => {
    window.history.pushState({}, "", `/stories/${storyId}`)
    setActiveStory(storyId)
    window.scrollTo(0, 0)
  }

  const returnHome = () => {
    window.history.pushState({}, "", "/")
    setActiveStory(null)
    window.scrollTo(0, 0)
  }

  const goToBranch = (index: number) => {
    const track = venueTrackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    if (!track || !card) return
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    })
    setActiveBranch(index)
  }

  const handleHeroBranchClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    e.preventDefault()
    closeMenu()
    const targetSection =
      document.getElementById("venues") ??
      document.getElementById(venues[index].id)
    targetSection?.scrollIntoView({ behavior: "smooth", block: "start" })
    goToBranch(index)
    window.setTimeout(() => goToBranch(index), 350)
  }

  const updateActiveBranch = () => {
    const track = venueTrackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    const cards = Array.from(track.children) as HTMLElement[]
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(
          center - (card.offsetLeft + card.offsetWidth / 2),
        )
        return distance < best.distance ? { index, distance } : best
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    )
    setActiveBranch(nearest.index)
  }

  if (activeStory) {
    return (
      <StoryPage
        storyId={activeStory}
        copy={copy}
        locale={locale}
        onSelectLocale={handleSelectLocale}
        onHome={returnHome}
        onOtherStory={openStory}
      />
    )
  }

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="Firebirds home"
        >
          Firebirds
          <span>{copy.brandSub}</span>
        </a>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#venues" onClick={closeMenu}>
            {copy.nav.branches}
          </a>
          <a href="#story" onClick={closeMenu}>
            {copy.nav.story}
          </a>
          <a href="#craft" onClick={closeMenu}>
            {copy.nav.craft}
          </a>
          <a className="nav-visit" href="#visit" onClick={closeMenu}>
            {copy.nav.visit}
          </a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} onChange={handleSelectLocale} />
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img
            className="hero-image"
            src="/images/firebirds-hero.jpg"
            alt={copy.hero.alt}
          />
          <div className="hero-shade" />

          <div className="hero-content">
            <p className="kicker">{copy.hero.kicker}</p>
            <h1>
              {copy.hero.title1}
              <br />
              <em>{copy.hero.title2}</em>
            </h1>
            <p className="hero-intro">{copy.hero.intro}</p>
          </div>

          <div className="hero-branches" aria-label={copy.hero.branchesLabel}>
            {venues.map((venue, index) => (
              <a
                href={`#${venue.id}`}
                key={venue.id}
                className={
                  venue.id === "tropical-origin"
                    ? "branch-tropical"
                    : "branch-craft"
                }
                onClick={(e) => handleHeroBranchClick(e, index)}
              >
                <span className="branch-label">{venue.eyebrow}</span>
                <strong>{venue.name}</strong>
                <small>{venue.experience}</small>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </section>

        <section className="intro section-pad" id="venues">
          <div className="section-number">{copy.intro.sectionNumber}</div>
          <div className="intro-heading">
            <p className="kicker dark">{copy.intro.kicker}</p>
            <h2>
              {copy.intro.title1}
              <br />
              <em>{copy.intro.title2}</em>
            </h2>
          </div>
          <p className="intro-copy">{copy.intro.copy}</p>
        </section>

        <section className="venue-carousel" aria-label={copy.carousel.ariaLabel}>
          <div
            className="venue-track"
            ref={venueTrackRef}
            onScroll={updateActiveBranch}
          >
            {venues.map((venue) => (
              <article
                className={`venue-card ${venue.tone}`}
                key={venue.id}
                id={venue.id}
              >
                <img src={venue.image} alt={`${venue.name} atmosphere`} />
                <div className="venue-overlay" />
                <div className="venue-top">
                  <span>{venue.name}</span>
                  <span>{venue.eyebrow}</span>
                </div>
                <div className="venue-content">
                  <span className="experience-label">{venue.experience}</span>
                  <h3>{venue.name}</h3>
                  <p>{venue.description}</p>
                  <div className="venue-actions">
                    <a href={venue.link} target="_blank" rel="noreferrer">
                      {copy.carousel.findRoom} <ArrowIcon />
                    </a>
                    <button
                      type="button"
                      className="story-link"
                      onClick={() => openStory(venue.id)}
                    >
                      {copy.carousel.readStory} <ArrowIcon />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="carousel-controls">
            <p>
              <span>{venues[activeBranch].name}</span>
              <small>{copy.carousel.swipeHint}</small>
            </p>
            <div>
              <button
                type="button"
                className="carousel-arrow previous"
                aria-label={copy.carousel.prevLabel}
                disabled={activeBranch === 0}
                onClick={() => goToBranch(Math.max(0, activeBranch - 1))}
              >
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="carousel-arrow"
                aria-label={copy.carousel.nextLabel}
                disabled={activeBranch === venues.length - 1}
                onClick={() =>
                  goToBranch(Math.min(venues.length - 1, activeBranch + 1))
                }
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </section>

        <section className="story section-pad" id="story">
          <div className="story-image-wrap">
            <img
              src="/images/firebirds-founders.jpg"
              alt={copy.story.imageAlt}
            />
            <div className="story-stamp" aria-hidden="true">
              <span>{copy.story.stampTop}</span>
              <strong>{copy.story.stampBottom}</strong>
            </div>
          </div>

          <div className="story-copy">
            <div className="section-number">{copy.story.sectionNumber}</div>
            <p className="kicker dark">{copy.story.kicker}</p>
            <h2>
              {copy.story.title1}
              <br />
              <em>{copy.story.title2}</em>
            </h2>
            <p>{copy.story.p1}</p>
            <p>{copy.story.p2}</p>
            <blockquote>“{copy.story.quote}”</blockquote>
          </div>
        </section>

        <section className="manifesto" id="craft">
          <div className="manifesto-image">
            <img src="/images/bar-craft.jpg" alt={copy.manifesto.imageAlt} />
          </div>
          <div className="manifesto-copy">
            <div className="section-number">{copy.manifesto.sectionNumber}</div>
            <p className="kicker">{copy.manifesto.kicker}</p>
            <h2>
              {copy.manifesto.title1}
              <br />
              <em>{copy.manifesto.title2}</em>
            </h2>
            <p>{copy.manifesto.body}</p>
            <ul>
              {copy.manifesto.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="quote-band">
          <p>{copy.quoteBand.statement}</p>
          <div className="marquee" aria-hidden="true">
            <span>{copy.quoteBand.marquee}</span>
            <span>{copy.quoteBand.marquee}</span>
          </div>
        </section>

        <section className="visit section-pad" id="visit">
          <div className="visit-heading">
            <div className="section-number">{copy.visit.sectionNumber}</div>
            <h2>
              {copy.visit.title1}
              <br />
              <em>{copy.visit.title2}</em>
            </h2>
          </div>

          <div className="visit-list">
            <a
              href={venues[0].link}
              target="_blank"
              rel="noreferrer"
              className="visit-row visit-tropical"
            >
              <span>
                <strong>{venues[0].name}</strong>
                <small>{venues[0].address}</small>
              </span>
              <span className="visit-action">
                {copy.visit.viewLocation} <ArrowIcon />
              </span>
            </a>
            <a
              href={venues[1].link}
              target="_blank"
              rel="noreferrer"
              className="visit-row visit-craft"
            >
              <span>
                <strong>{venues[1].name}</strong>
                <small>{venues[1].address}</small>
              </span>
              <span className="visit-action">
                {copy.visit.viewLocation} <ArrowIcon />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img
            src="/images/firebirds-logo.png"
            alt="Firebirds Cocktail & More"
          />
          <p>{copy.footer.tagline}</p>
        </div>
        <div className="footer-contact">
          <span>{copy.footer.enquiries}</span>
          <a href="tel:+84905241595">+84 905 241 595</a>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/firebirdscocktail/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href={venues[0].facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon /> Tropical Origin
            </a>
            <a
              href={venues[1].facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon /> Vietnam Craft
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {copy.footer.copyright}
          </span>
          <span>{copy.footer.madeWithLove}</span>
        </div>
      </footer>
    </div>
  )
}
