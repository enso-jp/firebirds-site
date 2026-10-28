import { Link } from "react-router-dom";
import { Header, LanguageBadge } from "../components/Chrome";
import { Photo } from "../components/Photo";
import { gallery } from "../lib/gallery";
import { useEffect } from "react";

const maps = {
  tropical: "https://share.google/PBuyzr0SoPHqHJs8V",
  craft: "https://share.google/w4QHyot2234SbIWrJ",
};

const heroShot = gallery.find((shot) => shot.id === "to-15")!;
const craftCard = gallery.find((shot) => shot.id === "vc-01")!;
const founders = gallery.find((shot) => shot.id === "to-11")!;
const craftBar = gallery.find((shot) => shot.id === "vc-02")!;

export function Home() {
  useEffect(() => {
    document.title = "Firebirds - Cocktail & More | One spirit. Two ways home.";
  }, []);

  return (
    <div className="editorial">
      <div className="home">
        <div className="home-bg">
          <img src="/images/firebirds-original.jpg" alt="Tropical Origin bar, checkered floor and Birds neon" />
        </div>
        <Header onPhoto />
        <LanguageBadge />
        <section className="hero" id="top">
          <p className="eyebrow">We went far. We came home thirsty.</p>
          <h1>
            One spirit. <em>Two ways home.</em>
          </h1>
          <p>
            Firebirds began with the things we missed while we were away: loud nights, honest drinks, the smell of rain
            on a hot road. That same spirit now lives in two very different rooms.
          </p>
        </section>
        <div className="branches" id="venues">
          <a className="branch" href="#tropical-origin">
            <p className="eyebrow">The Old Soul · Sơn Trà</p>
            <h2>Tropical Origin</h2>
            <p className="meta">Tropical · Loose · Full of Stories</p>
            <span className="arrow" aria-hidden>
              {"->"}
            </span>
          </a>
          <a className="branch" href="#vietnam-craft">
            <p className="eyebrow">The New Road · Đà Nẵng</p>
            <h2>Vietnam Craft Cocktail</h2>
            <p className="meta">Vietnamese · Thoughtful · Close to the Bone</p>
            <span className="arrow" aria-hidden>
              {"->"}
            </span>
          </a>
        </div>
      </div>

      <section className="band" id="story-intro">
        <p className="eyebrow">Same fire, two rooms</p>
        <p className="eyebrow">Pick the night you need</p>
        <h2 className="serif display">The spirit is the same. The road there is not.</h2>
        <p className="lead">
          We have no interest in opening the same bar twice. One place is wild around the edges. The other sits still
          and listens. Swipe through, then trust your mood.
        </p>
      </section>

      <section className="venue-block" id="tropical-origin">
        <Photo shot={heroShot} showCaption={false} className="venue-photo" />
        <div className="venue-copy">
          <p className="eyebrow">Tropical Origin</p>
          <p className="eyebrow">The Old Soul · Sơn Trà</p>
          <p className="eyebrow">Tropical · Loose · Full of Stories</p>
          <p className="lead">
            Tropical Origin. Our first fire. A green, unruly room built from old cabinets, found chairs and things we
            carried home. The drinks run tropical. The nights tend to run late.
          </p>
          <div className="cta-row">
            <a className="solid" href={maps.tropical} target="_blank" rel="noreferrer">
              Find this room
            </a>
            <Link className="ghost" to="/stories/tropical-origin">
              Read its story
            </Link>
          </div>
        </div>
      </section>

      <section className="venue-block reverse" id="vietnam-craft">
        <Photo shot={craftCard} showCaption={false} className="venue-photo" />
        <div className="venue-copy">
          <p className="eyebrow">Vietnam Craft Cocktail</p>
          <p className="eyebrow">The New Road · Đà Nẵng</p>
          <p className="eyebrow">Vietnamese · Thoughtful · Close to the Bone</p>
          <p className="lead">
            Vietnam Craft Cocktail. The quieter sibling. Here we look harder at Vietnam, its fruit, herbs, bitter edges
            and old flavours, then put what we find into a glass.
          </p>
          <div className="cta-row">
            <a className="solid" href={maps.craft} target="_blank" rel="noreferrer">
              Find this room
            </a>
            <Link className="ghost" to="/stories/vietnam-craft">
              Read its story
            </Link>
          </div>
        </div>
      </section>

      <section className="band split" id="story">
        <Photo shot={founders} showCaption={false} />
        <div>
          <p className="eyebrow">Tropical Origin</p>
          <p className="eyebrow">Welcome home</p>
          <p className="eyebrow">FB</p>
          <p className="eyebrow">How it began</p>
          <h2 className="serif display">NO GRAND PLAN. JUST A PULL HOME.</h2>
          <h3 className="serif sub">We saw enough of away. Home kept calling.</h3>
          <p className="lead">
            We left Vietnam to make a living. We crossed a few borders, worked a few jobs, drank in beautiful rooms and
            forgettable ones. After a while, you learn that polished is not the same thing as alive.
          </p>
          <p className="lead">
            So we came back. The first Firebirds grew from an old medicine cabinet, retro chairs, furniture made by hand
            and whatever honest objects we found along the road. Nothing matched. Somehow, it all belonged.
          </p>
          <blockquote>You go far enough, you stop looking for new. You start looking for true.</blockquote>
        </div>
      </section>

      <section className="band split" id="craft">
        <div>
          <p className="eyebrow">In every glass</p>
          <h2 className="serif display">LESS PERFORMANCE. MORE FLAVOUR.</h2>
          <h3 className="serif sub">Vietnam is not our theme. It is what we know.</h3>
          <p className="lead">
            We start nearby: fruit in season, herbs from the market, bitter roots, smoke, salt and things that wake an
            old memory. Technique matters. But if a drink needs a speech before it tastes good, we have probably gone
            too far.
          </p>
          <ul className="list">
            <li>What grows here, while it is good</li>
            <li>Good hands, no unnecessary theatre</li>
            <li>A proper welcome, every time</li>
          </ul>
          <p className="lead">Stay for one. Leave after several.</p>
        </div>
        <Photo shot={craftBar} showCaption={false} />
      </section>

      <div className="marquee" aria-hidden>
        <span>FIREBIRDS · ĐÀ NẴNG · VIETNAM · COCKTAIL & MORE · FIREBIRDS · ĐÀ NẴNG · VIETNAM · COCKTAIL & MORE · </span>
      </div>

      <section className="band" id="visit">
        <p className="eyebrow">Come find us</p>
        <h2 className="serif display">One spirit. Which road tonight?</h2>
        <div className="grid-2">
          <article className="card">
            <h3>Tropical Origin</h3>
            <p>2D MỸ KHÊ 7 · SƠN TRÀ · ĐÀ NẴNG</p>
            <a className="ghost" href={maps.tropical} target="_blank" rel="noreferrer">
              Find this room
            </a>
          </article>
          <article className="card">
            <h3>Vietnam Craft Cocktail</h3>
            <p>ĐÀ NẴNG · VIETNAM</p>
            <a className="ghost" href={maps.craft} target="_blank" rel="noreferrer">
              Find this room
            </a>
          </article>
        </div>
        <h3 className="serif sub">One spirit. Two ways home.</h3>
        <p className="eyebrow">Reservations & enquiries</p>
        <p>
          <a href="tel:+84905241595">+84 905 241 595</a>
          {" · "}
          <a href="https://www.instagram.com/firebirdscocktail/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
      </section>

      <footer className="site-footer">
        <span>© 2026 FIREBIRDS COCKTAIL & MORE</span>
        <span>MADE WITH LOVE IN ĐÀ NẴNG</span>
      </footer>
    </div>
  );
}
