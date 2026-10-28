import { Footer, Header, LanguageBadge } from "../components/Chrome";
import { useI18n } from "../lib/i18n";
import { useEffect } from "react";

export function About() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = "Our Story | Firebirds";
  }, []);

  return (
    <div className="page">
      <Header />
      <LanguageBadge />
      <section
        className="story-hero"
        style={{ backgroundImage: "linear-gradient(transparent, #11120f), url('/images/firebirds-founders.jpg')" }}
      >
        <div>
          <p className="eyebrow">{t.aboutKicker}</p>
          <h1 className="serif" style={{ fontWeight: 400, fontSize: "clamp(42px, 7vw, 80px)", margin: 0 }}>
            {t.aboutTitle}
          </h1>
        </div>
      </section>
      <main className="page-main">
        <p className="lead">{t.aboutLead}</p>
        <p className="lead">{t.aboutBrothers}</p>
        <div className="grid-2" style={{ marginTop: 40 }}>
          {t.roles.map((person) => (
            <article className="card" key={person.name}>
              <h3>{person.name}</h3>
              <p className="eyebrow">{person.role}</p>
              <p className="lead">{person.note}</p>
            </article>
          ))}
        </div>
        <p className="lead" style={{ marginTop: 40 }}>
          {t.wanderers}
        </p>
        <p className="lead">{t.house}</p>
        <p className="lead">{t.made}</p>
        <p className="lead">{t.invite}</p>
        <img src="/images/gallery-cabinets.jpg" alt="Vintage medicine cabinets and spirit shelves at Tropical Origin" style={{ marginTop: 40 }} />
      </main>
      <Footer />
    </div>
  );
}
