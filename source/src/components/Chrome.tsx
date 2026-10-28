import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n, localeMeta, locales } from "../lib/i18n";

export function Header({ onPhoto, story }: { onPhoto?: boolean; story?: boolean }) {
  const i18n = useI18n();
  if (story) {
    return (
      <header className="page-header">
        <Link to="/" className="brand">
          <div className="brand-name">FIREBIRDS</div>
          <div className="brand-sub">COCKTAIL & MORE</div>
        </Link>
        <nav className="nav">
          <Link to="/">Back to both branches</Link>
        </nav>
      </header>
    );
  }
  return (
    <header className={onPhoto ? "site-header" : "page-header"}>
      <Link to="/" className="brand">
        <div className="brand-name">FIREBIRDS</div>
        <div className="brand-sub">COCKTAIL & MORE</div>
      </Link>
      <nav className="nav">
        <span className="dn-mark">ĐN | VN</span>
        <a href="/#venues">{i18n.t.navBranches}</a>
        <a href="/#story">{i18n.t.navStory}</a>
        <a href="/#craft">{i18n.t.navCraft}</a>
        <a href="/#visit" className="find-btn">
          {i18n.t.navFind}
        </a>
      </nav>
    </header>
  );
}

export function LanguageBadge() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="lang-badge"
        type="button"
        aria-label="Language"
        onClick={() => setOpen((value) => !value)}
      >
        EN / VN
      </button>
      {open ? (
        <div className="lang-menu">
          {locales.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
            >
              {localeMeta[code].label}
              {code === locale ? " ·" : ""}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>CÔNG TY CP DỊCH VỤ FIREBIRDS · 0402297720</span>
      <span>+84 905 241 595 · Daily 7:00 PM to 1:30 AM</span>
    </footer>
  );
}
