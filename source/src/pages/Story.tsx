import { Link } from "react-router-dom";
import { Header, LanguageBadge } from "../components/Chrome";
import { Photo, RoomGallery } from "../components/Photo";
import { shotsFor, gallery } from "../lib/gallery";
import { useEffect } from "react";

export function StoryTropical() {
  useEffect(() => {
    document.title = "The Cabinet That Waited | Firebirds";
  }, []);

  const hero = gallery.find((shot) => shot.id === "to-15")!;
  const second = gallery.find((shot) => shot.id === "to-11")!;

  return (
    <article className="page story-page">
      <Header story />
      <LanguageBadge />
      <header className="story-top">
        <Photo shot={hero} showCaption={false} className="story-cover" />
        <div className="story-head">
          <p className="eyebrow">Tropical Origin</p>
          <h1 className="serif">The Cabinet That Waited</h1>
          <p className="eyebrow">Vietnam, before everything became new</p>
        </div>
      </header>
      <main className="page-main story-body">
        <section>
          <p className="eyebrow">The thought behind the room</p>
          <p className="lead">
            Some places are designed on a screen. This one began with an old medicine cabinet that had already lived a
            life before us.
          </p>
        </section>
        <Photo shot={second} />
        <section>
          <p className="eyebrow">Found and made in Vietnam</p>
          <h2 className="serif display">The things that stayed</h2>
          <p className="lead">
            We remembered the Vietnam we grew up around: bent metal chairs, dark timber, tiled floors cooled by the
            rain, thermos flasks on a family table. Ordinary things. Good things. Abroad, we began to miss them with an
            ache that surprised us.
          </p>
        </section>
        <section>
          <h2 className="serif display">Nothing matched</h2>
          <p className="lead">
            When we came home, we collected slowly. A cabinet from here. A chair from there. Some pieces were repaired;
            others were made by our own hands. We did not want a museum, and we certainly did not want nostalgia
            polished until it lost its fingerprints.
          </p>
        </section>
        <section>
          <h2 className="serif display">The room found its rhythm</h2>
          <p className="lead">
            Then came tropical leaves, cold glasses, old songs and people leaning across the bar to talk. The room
            loosened up. What began as a collection of memories became a place for making new ones.
          </p>
        </section>
        <blockquote>Old Vietnam was never quiet. It had colour, stubbornness and a good deal of soul.</blockquote>
        <RoomGallery shots={shotsFor("tropical")} />
        <section className="band tight">
          <p className="eyebrow">One spirit, another road</p>
          <h2 className="serif display">Keep going, or come find the room.</h2>
          <div className="cta-row">
            <Link className="ghost" to="/stories/vietnam-craft">
              Read the other story: The alley after rain
            </Link>
            <a className="solid" href="https://share.google/PBuyzr0SoPHqHJs8V" target="_blank" rel="noreferrer">
              Enough reading / Open this branch in Maps
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <Link to="/">Back to both branches</Link>
        <span>© 2026 FIREBIRDS COCKTAIL & MORE</span>
      </footer>
    </article>
  );
}

export function StoryCraft() {
  useEffect(() => {
    document.title = "The Alley After Rain | Firebirds";
  }, []);

  const hero = gallery.find((shot) => shot.id === "vc-01")!;
  const second = gallery.find((shot) => shot.id === "vc-02")!;

  return (
    <article className="page story-page">
      <Header story />
      <LanguageBadge />
      <header className="story-top">
        <Photo shot={hero} showCaption={false} className="story-cover" />
        <div className="story-head">
          <p className="eyebrow">Vietnam Craft Cocktail</p>
          <h1 className="serif">The Alley After Rain</h1>
          <p className="eyebrow">Vietnam street craft, with the volume left on</p>
        </div>
      </header>
      <main className="page-main story-body">
        <section>
          <p className="eyebrow">The thought behind the room</p>
          <p className="lead">
            The second Firebirds came from the street: practical, improvised and a little strange in exactly the right
            way.
          </p>
        </section>
        <Photo shot={second} />
        <section>
          <p className="eyebrow">Found and made in Vietnam</p>
          <h2 className="serif display">Look down the alley</h2>
          <p className="lead">
            Vietnamese streets know how to make use of everything. A plastic stool becomes a dining room. A toolbox
            becomes a counter. Soda crates, hand-painted signs, motorbike mirrors and fluorescent tubes somehow make a
            whole world after dark.
          </p>
        </section>
        <section>
          <h2 className="serif display">Craft without the costume</h2>
          <p className="lead">
            That resourcefulness is our kind of craft. Not precious. Not hidden behind a speech. We take local fruit,
            market herbs, roots, smoke and salt, then work them hard enough to reveal something familiar, and odd enough
            to make you look twice.
          </p>
        </section>
        <section>
          <h2 className="serif display">Keep it a little funky</h2>
          <p className="lead">
            Old-school does not have to mean serious. We left room for loud colour, crooked humour and the happy
            accident. The result is more street workshop than cocktail temple. Come as you are. Curiosity is enough.
          </p>
        </section>
        <blockquote>The street never asked permission to be beautiful. It simply got on with the job.</blockquote>
        <RoomGallery shots={shotsFor("craft")} />
        <section className="band tight">
          <p className="eyebrow">One spirit, another road</p>
          <h2 className="serif display">Keep going, or come find the room.</h2>
          <div className="cta-row">
            <Link className="ghost" to="/stories/tropical-origin">
              Read the other story: The cabinet that waited
            </Link>
            <a className="solid" href="https://share.google/w4QHyot2234SbIWrJ" target="_blank" rel="noreferrer">
              Enough reading / Open this branch in Maps
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <Link to="/">Back to both branches</Link>
        <span>© 2026 FIREBIRDS COCKTAIL & MORE</span>
      </footer>
    </article>
  );
}
