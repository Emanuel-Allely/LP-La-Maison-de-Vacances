import { db } from "./db";
import { articles } from "@shared/schema";

const seedArticles = [
  {
    title: "Visiter Cognac : guide complet des maisons de n\u00e9goce et d\u00e9gustations",
    slug: "visiter-cognac-maisons-negoce",
    excerpt: "D\u00e9couvrez les plus grandes maisons de Cognac, de Hennessy \u00e0 R\u00e9my Martin. Un parcours oenotouristique unique \u00e0 seulement 22 km de notre maison de charme.",
    content: `<p>La ville de Cognac, situ\u00e9e \u00e0 seulement 22 km de notre maison de charme \u00e0 Hiersac, est mondialement c\u00e9l\u00e8bre pour son eau-de-vie d'exception. Un s\u00e9jour en Charente serait incomplet sans une visite de ses prestigieuses maisons de n\u00e9goce.</p>

<h2>Les grandes maisons \u00e0 visiter</h2>
<p><strong>Hennessy</strong> \u2014 Fond\u00e9e en 1765, la maison Hennessy propose des visites guid\u00e9es de ses chais historiques situ\u00e9s sur les deux rives de la Charente. La travers\u00e9e en bateau traditionnel est un moment inoubliable.</p>

<p><strong>R\u00e9my Martin</strong> \u2014 Sp\u00e9cialiste du Fine Champagne, R\u00e9my Martin ouvre les portes de son domaine pour des visites immersives au c\u0153ur du vignoble et de ses chais centenaires.</p>

<p><strong>Martell</strong> \u2014 La plus ancienne maison de Cognac, fond\u00e9e en 1715, offre un parcours passionnant \u00e0 travers trois si\u00e8cles d'histoire et de savoir-faire.</p>

<h2>Au-del\u00e0 du cognac</h2>
<p>La ville de Cognac r\u00e9serve bien d'autres surprises : le ch\u00e2teau royal de Cognac, lieu de naissance de Fran\u00e7ois Ier, les ruelles m\u00e9di\u00e9vales du vieux quartier, et le march\u00e9 couvert o\u00f9 producteurs locaux proposent leurs sp\u00e9cialit\u00e9s charentaises.</p>

<h2>Informations pratiques</h2>
<p>Depuis notre maison \u00e0 Hiersac, comptez environ 25 minutes en voiture pour rejoindre le centre-ville de Cognac. Les visites des maisons de n\u00e9goce sont possibles toute l'ann\u00e9e, avec des horaires \u00e9largis en saison estivale. La r\u00e9servation est recommand\u00e9e pour les d\u00e9gustations priv\u00e9es.</p>`,
    image: "/images/cognac.png",
    category: "Patrimoine",
    published: true,
  },
  {
    title: "Angoul\u00eame, cit\u00e9 de la BD : que voir et que faire",
    slug: "angouleme-cite-bd-activites",
    excerpt: "Angoul\u00eame, ville d'art et d'histoire, est c\u00e9l\u00e8bre pour son festival de la BD. D\u00e9couvrez ses remparts, ses mus\u00e9es et sa gare TGV \u00e0 15 minutes de Hiersac.",
    content: `<p>Angoul\u00eame, situ\u00e9e \u00e0 seulement 15 minutes de notre maison de charme, est une ville fascinante perch\u00e9e sur un promontoire rocheux dominant la vall\u00e9e de la Charente. Accessible en TGV depuis Paris en 2h15, c'est le point d'entr\u00e9e id\u00e9al pour votre s\u00e9jour.</p>

<h2>La Cit\u00e9 Internationale de la Bande Dessin\u00e9e</h2>
<p>Angoul\u00eame est mondialement reconnue comme la capitale de la bande dessin\u00e9e. La Cit\u00e9 Internationale de la BD, install\u00e9e dans d'anciens chais de cognac en bord de Charente, abrite une collection exceptionnelle de planches originales, de la pr\u00e9histoire du 9e art jusqu'aux cr\u00e9ations contemporaines.</p>

<p>Chaque ann\u00e9e fin janvier, le Festival International de la Bande Dessin\u00e9e transforme la ville en un immense lieu de f\u00eate, attirant plus de 200 000 visiteurs du monde entier.</p>

<h2>Les remparts et la ville haute</h2>
<p>Les remparts d'Angoul\u00eame offrent une promenade panoramique exceptionnelle avec des vues imprenables sur la campagne charentaise, la vall\u00e9e de la Charente et les toits de la ville basse. Le parcours des remparts est jalonn\u00e9 de murs peints repr\u00e9sentant des h\u00e9ros de BD grandeur nature.</p>

<h2>Le march\u00e9 couvert et la gastronomie</h2>
<p>Le march\u00e9 couvert d'Angoul\u00eame est un rendez-vous incontournable le samedi matin. Vous y trouverez les meilleurs produits de la r\u00e9gion : grillons charentais, chabichou du Poitou, pineau des Charentes, et bien s\u00fbr les chocolats qui font la r\u00e9putation de la ville.</p>

<h2>Acc\u00e8s depuis Hiersac</h2>
<p>La gare TGV d'Angoul\u00eame se trouve \u00e0 seulement 15 minutes en voiture de notre maison de charme. C'est la porte d'entr\u00e9e id\u00e9ale pour rejoindre la Charente depuis Paris, Bordeaux ou Lyon.</p>`,
    image: "/images/angouleme.png",
    category: "Tourisme",
    published: true,
  },
  {
    title: "Randonn\u00e9es et balades le long de la Charente",
    slug: "randonnees-balades-charente",
    excerpt: "La Charente offre des itin\u00e9raires de randonn\u00e9e magnifiques entre \u00e9cluses, for\u00eats et vignobles. D\u00e9couvrez les plus belles balades \u00e0 proximit\u00e9 de Hiersac.",
    content: `<p>Les bords de la Charente offrent un cadre exceptionnel pour les amateurs de randonn\u00e9e et de balades. Depuis notre maison \u00e0 Hiersac, de nombreux itin\u00e9raires s'offrent \u00e0 vous, entre rivi\u00e8re, for\u00eats et vignobles.</p>

<h2>La V\u00e9lo Francette le long de la Charente</h2>
<p>La V\u00e9lo Francette, itin\u00e9raire cyclable national, longe la Charente sur plusieurs dizaines de kilom\u00e8tres. Depuis Hiersac, vous pouvez rejoindre facilement cette voie verte pour des balades \u00e0 v\u00e9lo en toute s\u00e9curit\u00e9, loin de la circulation. Le parcours entre Angoul\u00eame et Cognac est particuli\u00e8rement agr\u00e9able, avec des paysages vari\u00e9s et des haltes charmantes.</p>

<h2>Les \u00e9cluses de la Charente</h2>
<p>La Charente, fleuve le plus tranquille de France selon Henri IV, est ponctu\u00e9e de nombreuses \u00e9cluses historiques. Ces ouvrages d'art, souvent entour\u00e9s de verdure luxuriante, constituent des lieux de promenade id\u00e9aux. L'\u00e9cluse de Fl\u00e9ac, toute proche, offre un cadre bucolique parfait pour un pique-nique au bord de l'eau.</p>

<h2>La for\u00eat de la Braconne</h2>
<p>La for\u00eat de la Braconne, situ\u00e9e \u00e0 une vingtaine de kilom\u00e8tres \u00e0 l'est de Hiersac, est la plus grande for\u00eat de Charente. Ses sentiers balis\u00e9s traversent des paysages de ch\u00eanes, de charmes et de pins. Le gouffre de la Fosse Mobile, curiosit\u00e9 g\u00e9ologique, m\u00e9rite le d\u00e9tour.</p>

<h2>Les vignobles \u00e0 pied</h2>
<p>Les vignobles qui entourent Hiersac produisent les raisins destin\u00e9s \u00e0 l'\u00e9laboration du cognac. Des sentiers viticoles permettent de d\u00e9couvrir ces paysages ondulants au fil des saisons, du vert tendre du printemps aux ors flamboyants de l'automne.</p>`,
    image: "/images/charente-river.png",
    category: "Nature",
    published: true,
  },
  {
    title: "Les vignobles charentais : route des vins et d\u00e9gustations",
    slug: "vignobles-charentais-route-vins",
    excerpt: "Explorez la route des vignobles charentais autour de Hiersac. Pineau des Charentes, cognac et vins de pays : un terroir d'exception \u00e0 d\u00e9couvrir.",
    content: `<p>La Charente est avant tout une terre de vignobles. Les coteaux qui entourent Hiersac font partie de l'aire d'appellation du Cognac, un terroir unique au monde qui fa\u00e7onne les paysages et la culture locale depuis des si\u00e8cles.</p>

<h2>L'appellation Cognac</h2>
<p>Le vignoble de Cognac s'\u00e9tend sur pr\u00e8s de 75 000 hectares, essentiellement plant\u00e9 en ugni blanc. Autour de Hiersac, nous sommes dans la zone des Fins Bois, qui produit des eaux-de-vie \u00e9l\u00e9gantes et fruit\u00e9es. De nombreux viticulteurs proposent des visites de leurs exploitations et des d\u00e9gustations de leurs productions.</p>

<h2>Le Pineau des Charentes</h2>
<p>Le Pineau des Charentes, assemblage de mo\u00fbt de raisin et de cognac jeune, est l'ap\u00e9ritif embl\u00e9matique de la r\u00e9gion. Blanc, ros\u00e9 ou rouge, il se d\u00e9guste frais et accompagne merveilleusement le melon charentais, le foie gras ou les desserts.</p>

<h2>Les domaines \u00e0 visiter</h2>
<p>Plusieurs domaines viticoles dans un rayon de 15 km autour de Hiersac accueillent les visiteurs pour des d\u00e9gustations et des visites de chais. C'est l'occasion de d\u00e9couvrir les secrets de l'\u00e9laboration du cognac, de la vendange \u00e0 la distillation dans les alambics charentais en cuivre.</p>

<h2>Le march\u00e9 de Hiersac</h2>
<p>Les mercredis et dimanches, le petit march\u00e9 de Hiersac, \u00e0 5 minutes \u00e0 pied de notre maison, permet de rencontrer les producteurs locaux et de d\u00e9couvrir les sp\u00e9cialit\u00e9s du terroir charentais : grillons, chabichou, miel, fruits de saison et bien s\u00fbr pineau et cognac.</p>`,
    image: "/images/vignobles.png",
    category: "Gastronomie",
    published: true,
  },
  {
    title: "T\u00e9l\u00e9travail en Charente : pourquoi choisir Hiersac",
    slug: "teletravail-charente-hiersac",
    excerpt: "Combinez t\u00e9l\u00e9travail et qualit\u00e9 de vie en Charente. Fibre optique, espace d\u00e9di\u00e9, piscine et calme absolu dans notre maison \u00e0 Hiersac.",
    content: `<p>Le t\u00e9l\u00e9travail a transform\u00e9 notre rapport au lieu de travail. Pourquoi rester confin\u00e9 dans un appartement en ville quand on peut travailler depuis une maison de charme en pleine campagne charentaise, avec piscine et salle de sport ?</p>

<h2>Un espace de travail professionnel</h2>
<p>Notre maison \u00e0 Hiersac dispose d'un espace de t\u00e9l\u00e9travail d\u00e9di\u00e9 \u00e9quip\u00e9 d'une connexion fibre optique haut d\u00e9bit et d'\u00e9crans. Vous retrouverez les conditions de travail d'un bureau professionnel dans un cadre infiniment plus agr\u00e9able.</p>

<h2>La fibre optique \u00e0 Hiersac</h2>
<p>Hiersac b\u00e9n\u00e9ficie de la fibre optique, garantissant une connexion internet stable et rapide. Visioconf\u00e9rences, partage de fichiers volumineux, applications cloud : tout fonctionne parfaitement. Le Wi-Fi couvre l'ensemble du logement, y compris les espaces ext\u00e9rieurs.</p>

<h2>L'\u00e9quilibre parfait travail-loisirs</h2>
<p>Apr\u00e8s votre journ\u00e9e de travail, profitez de la piscine et du jacuzzi (de juin \u00e0 septembre) ou de la salle de sport pour d\u00e9compresser. Le jardin offre un espace de d\u00e9tente id\u00e9al pour les pauses. Le soir, explorez la gastronomie locale ou promenez-vous le long de la Charente.</p>

<h2>Accessible en TGV</h2>
<p>La gare TGV d'Angoul\u00eame, \u00e0 15 minutes de Hiersac, vous connecte \u00e0 Paris en 2h15 et \u00e0 Bordeaux en 50 minutes. Id\u00e9al pour combiner quelques jours de t\u00e9l\u00e9travail avec un s\u00e9jour de d\u00e9couverte de la r\u00e9gion, ou pour vos d\u00e9placements professionnels ponctuels.</p>

<h2>Les commodit\u00e9s au quotidien</h2>
<p>Hiersac dispose de tous les commerces essentiels \u00e0 5 minutes \u00e0 pied : boulangerie, \u00e9picerie, pharmacie, pizzeria. Pour les courses plus importantes, Angoul\u00eame et ses grandes surfaces se trouvent \u00e0 15 minutes en voiture.</p>`,
    image: "/images/salon.png",
    category: "S\u00e9jour",
    published: true,
  },
  {
    title: "S\u00e9jour en famille en Charente : activit\u00e9s pour petits et grands",
    slug: "sejour-famille-charente-activites",
    excerpt: "La Charente regorge d'activit\u00e9s familiales : cano\u00eb sur la Charente, parcs animaliers, ch\u00e2teaux et bien plus. Guide des sorties en famille autour de Hiersac.",
    content: `<p>La Charente est une destination id\u00e9ale pour les vacances en famille. Depuis notre maison \u00e0 Hiersac, adapt\u00e9e aux enfants avec lits b\u00e9b\u00e9 et \u00e9quipements d\u00e9di\u00e9s, de nombreuses activit\u00e9s raviront petits et grands.</p>

<h2>Activit\u00e9s nautiques</h2>
<p>La Charente se pr\u00eate parfaitement aux descentes en cano\u00eb-kayak en famille. Plusieurs loueurs proposent des parcours adapt\u00e9s aux enfants, de 2 heures \u00e0 une journ\u00e9e compl\u00e8te. Les eaux calmes du fleuve permettent de naviguer en toute s\u00e9curit\u00e9, m\u00eame avec de jeunes enfants.</p>

<h2>Parcs et loisirs</h2>
<p><strong>Le Pal\u00e9osite</strong>, situ\u00e9 \u00e0 une quarantaine de kilom\u00e8tres, est un parc unique en France d\u00e9di\u00e9 \u00e0 la pr\u00e9histoire et \u00e0 l'homme de N\u00e9andertal. Ateliers de taille de silex, tir au propulseur, fouilles arch\u00e9ologiques : des activit\u00e9s passionnantes pour toute la famille.</p>

<p><strong>Planet Exotica</strong> \u00e0 Royan propose un voyage au c\u0153ur de la faune et la flore tropicales, avec une serre \u00e0 papillons et un vivarium impressionnant.</p>

<h2>Ch\u00e2teaux et patrimoine</h2>
<p>Le ch\u00e2teau de La Rochefoucauld, l'un des plus beaux de France, est surnomm\u00e9 le \u00ab petit Chambord \u00bb. Des visites th\u00e9\u00e2tralis\u00e9es sp\u00e9cialement con\u00e7ues pour les enfants sont propos\u00e9es en \u00e9t\u00e9.</p>

<h2>\u00c0 la maison</h2>
<p>Notre logement est parfaitement adapt\u00e9 aux familles : lits b\u00e9b\u00e9 disponibles, cuisine \u00e9quip\u00e9e pour pr\u00e9parer les repas des enfants, jardin s\u00e9curis\u00e9, et bien s\u00fbr piscine (de juin \u00e0 septembre) avec cr\u00e9neaux de privatisation pour en profiter en toute tranquillit\u00e9.</p>`,
    image: "/images/charente-river.png",
    category: "Famille",
    published: true,
  },
  {
    title: "Les meilleurs restaurants autour de Hiersac : o\u00f9 bien manger en Charente",
    slug: "meilleurs-restaurants-hiersac-charente",
    excerpt: "De L'Aromate \u00e0 Hiersac aux tables gastronomiques de Cognac, d\u00e9couvrez notre s\u00e9lection des meilleurs restaurants \u00e0 proximit\u00e9 de notre maison de charme.",
    content: `<p>L'un des plaisirs d'un s\u00e9jour en Charente, c'est la gastronomie ! Autour de notre maison de charme \u00e0 Hiersac, de nombreuses tables raviront les gourmands, des bistrots de terroir aux restaurants \u00e9toil\u00e9s. Voici notre s\u00e9lection des meilleures adresses.</p>

<h2>\u00c0 Hiersac m\u00eame : L'Aromate</h2>
<p><strong>L'Aromate</strong> se trouve \u00e0 quelques pas de notre maison, au 2 Chemin du Champ Farchaud \u00e0 Hiersac. Ce restaurant de cuisine fran\u00e7aise propose une carte qui \u00e9volue au fil des saisons, avec des produits frais du march\u00e9. La terrasse ombrag\u00e9e est id\u00e9ale pour les d\u00e9jeuners d'\u00e9t\u00e9. L'accueil est chaleureux et les prix tr\u00e8s raisonnables. Un incontournable \u00e0 5 minutes \u00e0 pied !</p>
<p><em>Ouvert \u00e0 partir de 11h30 \u2014 R\u00e9servation conseill\u00e9e au 06 58 43 32 69</em></p>

<h2>En bord de Charente : L'Enfant Terrible</h2>
<p><strong>L'Enfant Terrible</strong>, situ\u00e9 \u00e0 Sireuil au 1 Chemin des Gabarriers, est une adresse coup de c\u0153ur pour son cadre exceptionnel. Install\u00e9 en bordure de la Charente, ce restaurant propose une cuisine maison savoureuse avec des produits de qualit\u00e9. La terrasse de 50 couverts offre une vue magnifique sur la rivi\u00e8re \u2014 un endroit parfait pour un d\u00e9jeuner au soleil.</p>
<p>Les portions sont g\u00e9n\u00e9reuses, le service est souriant et le rapport qualit\u00e9-prix excellent. C'est aussi un arr\u00eat pris\u00e9 des cyclistes qui parcourent la V\u00e9lo Francette.</p>
<p><em>Ouvert tous les jours de juin \u00e0 octobre (10h-22h), weekends uniquement hors saison \u2014 \u00c0 20 minutes de Hiersac</em></p>

<h2>Tables gastronomiques \u00e0 Cognac</h2>

<h3>Les Foudres \u2014 Restaurant \u00e9toil\u00e9 Michelin</h3>
<p>Au c\u0153ur des <strong>Chais Monnet</strong>, l'un des plus beaux h\u00f4tels de la r\u00e9gion, le restaurant <strong>Les Foudres</strong> est la table \u00e9toil\u00e9e incontournable de Cognac. Le chef Mathis Debize propose une cuisine raffin\u00e9e qui met en valeur les produits du terroir charentais. Le cadre, dans d'anciens chais class\u00e9s, est absolument magnifique.</p>
<p><em>Menu 3 temps \u00e0 partir de 80\u20ac \u2014 Accord mets et cognacs en suppl\u00e9ment \u2014 50 av. Paul-Firino-Martell, Cognac</em></p>

<h3>Poulpette \u2014 Bistrot cr\u00e9atif</h3>
<p><strong>Poulpette</strong>, au 46 avenue du Mar\u00e9chal de Lattre-de-Tassigny \u00e0 Cognac, est le bistrot moderne qui fait parler de lui. Le chef Antoine Verrouillent compose un menu qui change chaque semaine, \u00e0 base de produits de permaculture et de producteurs locaux. L'ambiance industrielle chic et les plats inventifs en font une adresse tendance.</p>
<p><em>Menu d\u00e9jeuner \u00e0 partir de 36\u20ac \u2014 R\u00e9servation recommand\u00e9e</em></p>

<h3>Le Bistro de Claude</h3>
<p>Pour une cuisine fran\u00e7aise classique dans un cadre feutr\u00e9, <strong>Le Bistro de Claude</strong> au 35 rue Grande \u00e0 Cognac est une valeur s\u00fbre. Menu 3 services \u00e0 32\u20ac, service impeccable et plats g\u00e9n\u00e9reux : \u0153uf poch\u00e9, velout\u00e9 de potimarron, b\u0153uf charolais\u2026 Une adresse qui ne d\u00e9\u00e7oit jamais.</p>

<h3>La Courtine \u2014 Terroir en bord de Charente</h3>
<p><strong>La Courtine</strong> s\u00e9duit par son emplacement en bord de Charente et sa cuisine de terroir. La terrasse avec vue sur le fleuve est un vrai bonheur aux beaux jours. Produits locaux et ambiance conviviale garantis.</p>

<h2>Nos conseils pratiques</h2>
<p>En haute saison (juillet-ao\u00fbt), la r\u00e9servation est indispensable pour toutes ces adresses, en particulier Les Foudres et Poulpette. Pour un d\u00eener romantique, privil\u00e9giez L'Enfant Terrible ou Les Foudres. Pour un d\u00e9jeuner simple et savoureux, L'Aromate \u00e0 deux pas de la maison est l'option id\u00e9ale.</p>
<p>Et n'oubliez pas le march\u00e9 de Hiersac les mercredis et dimanches pour acheter de quoi pr\u00e9parer vos propres repas dans la cuisine enti\u00e8rement \u00e9quip\u00e9e de notre maison de charme !</p>`,
    image: "/images/cognac.png",
    category: "Gastronomie",
    published: true,
  },
];

export async function seedDatabase() {
  const existing = await db.select().from(articles);
  if (existing.length > 0) return;

  console.log("Seeding database with articles...");
  for (const article of seedArticles) {
    await db.insert(articles).values(article);
  }
  console.log(`Seeded ${seedArticles.length} articles.`);
}
