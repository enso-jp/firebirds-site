import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Footer, Header, LanguageBadge } from "../components/Chrome";
import { useI18n } from "../lib/i18n";
import { venues, type LocationId } from "../lib/locations";
import { site } from "../lib/site";

function isLocationId(value: string | null): value is LocationId {
  return value === "tropical" || value === "craft";
}

export function Book() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const requested = params.get("bar");
  const initial: LocationId = isLocationId(requested) ? requested : "tropical";
  const [bar, setBar] = useState<LocationId>(initial);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("21:00");
  const [size, setSize] = useState("2");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    document.title = "Book a table | Firebirds";
  }, []);

  const venue = venues[bar];
  const message = useMemo(
    () =>
      [
        "Firebirds table reservation",
        `Name: ${name || "(guest)"}`,
        `Bar: ${venue.name}`,
        `Address: ${venue.address}`,
        `Date: ${date || "(tbc)"}`,
        `Time: ${time}`,
        `Party size: ${size}`,
        note ? `Note: ${note}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    [name, venue, date, time, size, note],
  );

  return (
    <div className="page">
      <Header />
      <LanguageBadge />
      <main className="page-main">
        <p className="eyebrow">{t.bookKicker}</p>
        <h1>{t.bookTitle}</h1>
        <p className="lead">{t.bookLead}</p>
        <form className="form" onSubmit={(e) => e.preventDefault()} style={{ marginTop: 36 }}>
          <p className="eyebrow">{t.bookLocation}</p>
          <div className="grid-2">
            {(["tropical", "craft"] as LocationId[]).map((id) => (
              <label key={id} className={`choice ${bar === id ? "on" : ""}`}>
                <input type="radio" checked={bar === id} onChange={() => setBar(id)} />
                <strong>{venues[id].shortName}</strong>
                <div>{venues[id].address}</div>
              </label>
            ))}
          </div>
          <div className="grid-2">
            <label>
              {t.bookDate}
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              {t.bookTime}
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
          </div>
          <label>
            {t.bookSize}
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {["1", "2", "3", "4", "5", "6", "8", "10+"].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </label>
          <label>
            {t.bookName}
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            {t.bookNote}
            <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder={t.bookNotePh} rows={3} />
          </label>
          <div className="actions">
            <a className="solid" href={`${site.whatsapp}?text=${encodeURIComponent(message)}`}>
              {t.bookWa}
            </a>
            <a className="ghost" href={`tel:${site.phoneE164}`}>
              {t.bookCall}
            </a>
            <a className="ghost" href={site.messenger} target="_blank" rel="noreferrer">
              {t.bookMsg}
            </a>
            <a className="ghost" href={site.instagramDm} target="_blank" rel="noreferrer">
              {t.bookIg}
            </a>
          </div>
          <p className="lead">{t.bookConfirm}</p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
