
export type Stone = {
    slug: string;
    name: string;
    species: string;
    carat: string;
    origin: string;
    habitat: string;
    cut: string;
    price: string;
    image: string; // public paths are just strings — drop StaticImageData
    note: string;
};


export const stones: Stone[] = [
    {
        slug: "moss-vault-emerald",
        name: "Moss Vault Emerald",
        species: "Beryl",
        carat: "8.15 ct",
        origin: "Kagem, Zambia",
        habitat: "Mica schist, riverine forest",
        cut: "Soft emerald step",
        price: "$48,900",
        image: "/stones/hero-emerald-moss.jpg",
        note: "Lifted from a rain-cut seam where mica flakes still cling to the crystal faces.",
    },
    {
        slug: "riverbed-sapphire",
        name: "Riverbed Sapphire",
        species: "Corundum",
        carat: "12.04 ct",
        origin: "Ratnapura, Sri Lanka",
        habitat: "Alluvial gravel, monsoon stream",
        cut: "Oval, unheated",
        price: "$36,400",
        image: "/stones/stone-sapphire.jpg",
        note: "Tumbled smooth by decades of water before a single facet was ever cut."
    },
    {
        slug: "leaf-fall-morganite",
        name: "Leaf-Fall Morganite",
        species: "Beryl",
        carat: "22.40 ct",
        origin: "Minas Gerais, Brazil",
        habitat: "Granite pegmatite pocket",
        cut: "Left raw, natural terminations",
        price: "$12,400",
        image: "/stones/stone-morganite.jpg",
        note: "Untouched terminations, the colour of dawn through dry leaves.",
    },
    {
        slug: "clay-ember-opal",
        name: "Clay Ember Opal",
        species: "Fire opal",
        carat: "6.40 ct",
        origin: "Querétaro, Mexico",
        habitat: "Weathered volcanic clay",
        cut: "Free-form cabochon",
        price: "$9,800",
        image: "/stones/stone-opal.jpg",
        note: "Sun caught in silica, drawn from cracked red earth where wildflowers root.",
    },
];

export const heroImage = stones[0].image;