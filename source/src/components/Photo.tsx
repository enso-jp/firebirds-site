import type { CSSProperties } from "react";
import type { GalleryShot } from "../lib/gallery";

type Props = {
  shot: GalleryShot;
  className?: string;
  showCaption?: boolean;
};

export function Photo({ shot, className = "", showCaption = true }: Props) {
  const style = {
    "--pos-desktop": shot.posDesktop,
    "--pos-mobile": shot.posMobile,
    "--ratio-desktop": shot.ratioDesktop,
    "--ratio-mobile": shot.ratioMobile,
  } as CSSProperties;

  return (
    <figure className={`photo ${shot.aspect} ${className}`} style={style}>
      <img src={shot.src} alt={shot.alt} />
      {showCaption ? <figcaption>{shot.caption}</figcaption> : null}
    </figure>
  );
}

export function RoomGallery({
  shots,
  title = "Inside the Room",
}: {
  shots: GalleryShot[];
  title?: string;
}) {
  return (
    <section className="room-gallery">
      <p className="eyebrow">{title}</p>
      <div className="bento">
        {shots.map((shot) => (
          <Photo key={shot.id} shot={shot} />
        ))}
      </div>
    </section>
  );
}
