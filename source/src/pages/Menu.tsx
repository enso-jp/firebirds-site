import { useMemo, useState, useEffect } from "react";
import { Footer, Header, LanguageBadge } from "../components/Chrome";
import { useI18n } from "../lib/i18n";
import { tx } from "../lib/locales";
import { categories, menuItems, type MenuCategory } from "../lib/menu";

export function Menu() {
  const { t, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MenuCategory | "all">("all");

  useEffect(() => {
    document.title = "Cocktail menu | Firebirds";
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      return [item.name, item.subcategory ?? "", ...item.ingredients].join(" ").toLowerCase().includes(q);
    });
  }, [query, category]);

  const groups = useMemo(() => {
    const map = new Map<string, typeof visible>();
    for (const item of visible) {
      const key = item.subcategory || item.category;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(item);
    }
    return [...map.entries()];
  }, [visible]);

  return (
    <div className="page">
      <Header />
      <LanguageBadge />
      <main className="page-main">
        <p className="eyebrow">{t.menuKicker}</p>
        <h1>{t.menuTitle}</h1>
        <p className="lead">{t.menuLead}</p>
        <div className="menu-tools">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.menuSearch} />
          <div className="chips">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={category === cat.id ? "on" : ""}
                onClick={() => setCategory(cat.id)}
              >
                {tx(cat.label, locale)}
              </button>
            ))}
          </div>
          <p className="eyebrow" style={{ marginTop: 12 }}>
            {t.menuVat}
          </p>
        </div>
        {visible.length === 0 ? <p>{t.menuEmpty}</p> : null}
        {groups.map(([group, items]) => (
          <section key={group} style={{ marginTop: 36 }}>
            <p className="eyebrow">{tx(categories.find((c) => c.id === group)?.label, locale) || group}</p>
            {items.map((item) => (
              <article className="drink" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  {item.highlight ? <p style={{ color: "rgba(244,239,230,0.7)" }}>{tx(item.highlight, locale)}</p> : null}
                  <p style={{ color: "rgba(244,239,230,0.68)", marginTop: 8 }}>
                    <span className="eyebrow">{t.ingredients} </span>
                    {item.ingredients.join(" · ")}
                  </p>
                  {item.story ? (
                    <p style={{ marginTop: 8 }}>
                      <span className="eyebrow">{t.storyLabel} </span>
                      {tx(item.story, locale)}
                    </p>
                  ) : null}
                </div>
                <div className="price">
                  {item.glassPrice ? `${item.glassPrice}/${item.bottlePrice}` : item.price}
                </div>
              </article>
            ))}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
