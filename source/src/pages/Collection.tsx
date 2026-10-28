import { useMemo, useState, useEffect } from "react";
import { Header, LanguageBadge } from "../components/Chrome";
import { Photo } from "../components/Photo";
import { gallery, type BranchId } from "../lib/gallery";

export function Collection() {
  const [branch, setBranch] = useState<BranchId | "all">("all");

  useEffect(() => {
    document.title = "Inside the rooms | Firebirds";
  }, []);

  const shots = useMemo(
    () => (branch === "all" ? gallery : gallery.filter((shot) => shot.branch === branch)),
    [branch],
  );

  return (
    <div className="page">
      <Header />
      <LanguageBadge />
      <main className="page-main">
        <p className="eyebrow">The rooms</p>
        <h1 className="serif">Inside the Room</h1>
        <p className="lead">Space and decor from Tropical Origin and Vietnam Craft Cocktail. Filter by branch.</p>
        <div className="chips">
          <button type="button" className={branch === "all" ? "on" : ""} onClick={() => setBranch("all")}>
            All
          </button>
          <button type="button" className={branch === "tropical" ? "on" : ""} onClick={() => setBranch("tropical")}>
            Tropical Origin
          </button>
          <button type="button" className={branch === "craft" ? "on" : ""} onClick={() => setBranch("craft")}>
            Vietnam Craft
          </button>
        </div>
        <div className="bento" style={{ marginTop: 28 }}>
          {shots.map((shot) => (
            <Photo key={shot.id} shot={shot} />
          ))}
        </div>
      </main>
      <footer className="site-footer">
        <span>© 2026 FIREBIRDS COCKTAIL & MORE</span>
        <span>MADE WITH LOVE IN ĐÀ NẴNG</span>
      </footer>
    </div>
  );
}
