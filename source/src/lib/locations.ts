export type LocationId = "tropical" | "craft";

export type Venue = {
  id: LocationId;
  slug: string;
  name: string;
  shortName: string;
  address: string;
  district: string;
  mapsUrl: string;
  mapsQuery: string;
  embedUrl: string;
  lat: number;
  lng: number;
  rating: string;
  reviews?: string;
  plusCode?: string;
};

export const venues: Record<LocationId, Venue> = {
  tropical: {
    id: "tropical",
    slug: "tropical-origin",
    name: "Firebirds - Tropical Origin",
    shortName: "Tropical Origin",
    address: "2D Mỹ Khê 7, Phước Mỹ, An Hải (Sơn Trà), Đà Nẵng 50000, Vietnam",
    district: "An Hải / Mỹ Khê, Sơn Trà",
    mapsUrl: "https://maps.app.goo.gl/4Kf3kKEfzmjA2bNM7",
    mapsQuery:
      "https://maps.google.com/maps?q=Firebirds+-+Tropical+Origin,+2D+M%E1%BB%B9+Kh%C3%AA+7,+An+H%E1%BA%A3i,+%C4%90%C3%A0+N%E1%BA%B5ng+50000&ftid=0x3142178f29c09979:0x2ef8b7219767f425",
    embedUrl:
      "https://maps.google.com/maps?q=16.065068,108.239235&z=16&output=embed",
    lat: 16.065068,
    lng: 108.239235,
    rating: "4.9",
    reviews: "225+",
  },
  craft: {
    id: "craft",
    slug: "vietnamese-craft-cocktail",
    name: "Firebirds - Vietnamese Craft Cocktail",
    shortName: "Vietnamese Craft Cocktail",
    address: "27/1 Thái Phiên, Phước Ninh, Hải Châu, Đà Nẵng 550000, Vietnam",
    district: "Alley 27 Thái Phiên, Hải Châu",
    mapsUrl: "https://maps.app.goo.gl/aXWYEQgFBWSSHbCU6",
    mapsQuery:
      "https://maps.google.com/maps?q=27/1+Th%C3%A1i+Phi%C3%AAn,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000&ftid=0x3142196d8170bc51:0x20764dace1b8de6d",
    embedUrl:
      "https://maps.google.com/maps?q=27/1+Th%C3%A1i+Phi%C3%AAn,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000&z=16&output=embed",
    lat: 16.0673,
    lng: 108.2204,
    rating: "5.0",
    plusCode: "367F+W5 Hai Chau, Da Nang",
  },
};

export const venueList = Object.values(venues);
