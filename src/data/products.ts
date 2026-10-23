export type Category = "Pastries" | "Cakes" | "Breads" | "Drinks" | "Specials";

export type ProductComment = { name: string; message: string };

export type Product = {
  id: string;
  name: string;
  category: Category;
  description: string;
  pricePHP: number;
  rating: number;
  tone: string;
  image?: string;
  comments: ProductComment[];
};

const comments = (message: string): ProductComment[] => [{ name: "Mika R.", message }, { name: "Paolo C.", message: "A favorite for any time of day." }];

export const products: Product[] = [
  { id: "classic-croissant", name: "Classic Butter Croissant", category: "Pastries", description: "Golden, flaky, and baked for slow mornings.", pricePHP: 95, rating: 4.9, tone: "croissant", image: "/images/products/classic-butter-croissant.webp", comments: comments("Ang sarap! Malutong sa labas at malambot sa loob.") },
  { id: "chocolate-croissant", name: "Double Chocolate Croissant", category: "Pastries", description: "Layers of butter pastry with a cocoa-rich center.", pricePHP: 125, rating: 4.8, tone: "chocolate", image: "/images/products/double-chocolate-croissant.webp", comments: comments("Chocolatey without being too sweet.") },
  { id: "sprinkle-donut", name: "Strawberry Sprinkle Donut", category: "Pastries", description: "Berry glaze, cheerful sprinkles, instant joy.", pricePHP: 75, rating: 4.7, tone: "donut", image: "/images/products/strawberry-sprinkle-donut.webp", comments: comments("Cute and delicious!") },
  { id: "almond-danish", name: "Almond Danish", category: "Pastries", description: "Buttery folds with toasted almond cream.", pricePHP: 115, rating: 4.8, tone: "croissant", image: "/images/products/classic-butter-croissant.webp", comments: comments("The almond filling is lovely.") },
  { id: "cinnamon-roll", name: "Cinnamon Swirl Roll", category: "Pastries", description: "Soft spirals finished with warm spice sugar.", pricePHP: 105, rating: 4.7, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Warm, soft, and comforting.") },
  { id: "lemon-tart", name: "Lemon Curd Tart", category: "Pastries", description: "Bright lemon curd in a crisp butter shell.", pricePHP: 120, rating: 4.8, tone: "donut", image: "/images/products/strawberry-sprinkle-donut.webp", comments: comments("Just the right amount of citrus.") },

  { id: "cloud-cake", name: "Strawberry Cloud Cake", category: "Cakes", description: "Soft vanilla sponge with strawberry cream.", pricePHP: 185, rating: 5, tone: "cake", image: "/images/products/strawberry-cloud-cake.webp", comments: comments("So light and fluffy.") },
  { id: "chocolate-fudge-cake", name: "Chocolate Fudge Cake", category: "Cakes", description: "Deep cocoa layers with a silky ganache finish.", pricePHP: 195, rating: 4.9, tone: "chocolate", image: "/images/products/double-chocolate-croissant.webp", comments: comments("Rich without being heavy.") },
  { id: "vanilla-bean-cake", name: "Vanilla Bean Cake", category: "Cakes", description: "Tender vanilla layers with whipped cream frosting.", pricePHP: 180, rating: 4.8, tone: "cake", image: "/images/products/strawberry-cloud-cake.webp", comments: comments("A classic done beautifully.") },
  { id: "ube-coconut-cake", name: "Ube Coconut Cake", category: "Cakes", description: "Purple yam sponge with coconut cream and flakes.", pricePHP: 205, rating: 4.9, tone: "cake", image: "/images/products/strawberry-cloud-cake.webp", comments: comments("The ube flavor shines through.") },
  { id: "carrot-walnut-cake", name: "Carrot Walnut Cake", category: "Cakes", description: "Spiced carrot crumb with a creamy topping.", pricePHP: 190, rating: 4.7, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Moist with a lovely spice balance.") },
  { id: "matcha-cream-cake", name: "Matcha Cream Cake", category: "Cakes", description: "Earthy matcha sponge layered with light cream.", pricePHP: 210, rating: 4.8, tone: "cake", image: "/images/products/strawberry-cloud-cake.webp", comments: comments("A gentle matcha finish.") },

  { id: "milk-bread", name: "Japanese Milk Bread", category: "Breads", description: "Pillowy, lightly sweet, and made for sharing.", pricePHP: 160, rating: 4.8, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Softest bread I have had in ages.") },
  { id: "sourdough-loaf", name: "Country Sourdough Loaf", category: "Breads", description: "Crackly crust, open crumb, and gentle tang.", pricePHP: 145, rating: 4.9, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Great with butter and soup.") },
  { id: "garlic-cheese-bread", name: "Garlic Cheese Bread", category: "Breads", description: "Toasted garlic butter with a molten cheese center.", pricePHP: 110, rating: 4.8, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Perfectly savory and cheesy.") },
  { id: "brioche-rolls", name: "Honey Brioche Rolls", category: "Breads", description: "Golden pull-apart rolls with a touch of honey.", pricePHP: 135, rating: 4.7, tone: "croissant", image: "/images/products/classic-butter-croissant.webp", comments: comments("So tender and buttery.") },
  { id: "focaccia", name: "Rosemary Focaccia", category: "Breads", description: "Olive oil-rich bread with rosemary and sea salt.", pricePHP: 150, rating: 4.8, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Wonderful toasted for lunch.") },
  { id: "banana-walnut-loaf", name: "Banana Walnut Loaf", category: "Breads", description: "A tender loaf dotted with walnuts and ripe banana.", pricePHP: 130, rating: 4.7, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Comforting and not too sweet.") },

  { id: "iced-latte", name: "Iced Cafe Latte", category: "Drinks", description: "A smooth espresso pause over ice.", pricePHP: 135, rating: 4.6, tone: "latte", image: "/images/products/iced-cafe-latte.webp", comments: comments("Smooth and just right over ice.") },
  { id: "sea-salt-latte", name: "Sea Salt Latte", category: "Drinks", description: "Espresso and milk topped with a delicate salted foam.", pricePHP: 155, rating: 4.8, tone: "latte", image: "/images/products/iced-cafe-latte.webp", comments: comments("The salted foam is a great touch.") },
  { id: "matcha-latte", name: "Iced Matcha Latte", category: "Drinks", description: "Creamy milk and bright matcha over ice.", pricePHP: 150, rating: 4.7, tone: "latte", image: "/images/products/iced-cafe-latte.webp", comments: comments("Fresh and creamy.") },
  { id: "strawberry-milk", name: "Strawberry Milk", category: "Drinks", description: "Cold milk swirled with sweet strawberry puree.", pricePHP: 125, rating: 4.7, tone: "donut", image: "/images/products/strawberry-sprinkle-donut.webp", comments: comments("A cheerful afternoon drink.") },
  { id: "cold-brew", name: "Vanilla Cold Brew", category: "Drinks", description: "Slow-steeped coffee softened with vanilla cream.", pricePHP: 145, rating: 4.8, tone: "latte", image: "/images/products/iced-cafe-latte.webp", comments: comments("Balanced and refreshing.") },
  { id: "hot-chocolate", name: "House Hot Chocolate", category: "Drinks", description: "Velvety cocoa with a cloud of milk foam.", pricePHP: 130, rating: 4.8, tone: "chocolate", image: "/images/products/double-chocolate-croissant.webp", comments: comments("Cozy in a cup.") },

  { id: "weekend-brunch-box", name: "Weekend Brunch Box", category: "Specials", description: "A curated mix of pastries, bread, and a drink.", pricePHP: 420, rating: 4.9, tone: "croissant", image: "/images/products/classic-butter-croissant.webp", comments: comments("Such a generous spread.") },
  { id: "berry-breakfast-set", name: "Berry Breakfast Set", category: "Specials", description: "Strawberry pastry, milk bread, and a latte.", pricePHP: 360, rating: 4.8, tone: "donut", image: "/images/products/strawberry-sprinkle-donut.webp", comments: comments("A lovely breakfast treat.") },
  { id: "afternoon-tea-box", name: "Afternoon Tea Box", category: "Specials", description: "Petite cakes and pastries for a slow afternoon.", pricePHP: 495, rating: 4.9, tone: "cake", image: "/images/products/strawberry-cloud-cake.webp", comments: comments("Perfect to share with friends.") },
  { id: "croissant-duo", name: "Croissant Duo", category: "Specials", description: "One classic and one chocolate croissant together.", pricePHP: 205, rating: 4.8, tone: "chocolate", image: "/images/products/double-chocolate-croissant.webp", comments: comments("Both flavors are excellent.") },
  { id: "family-bread-basket", name: "Family Bread Basket", category: "Specials", description: "A shareable basket of house breads and spreads.", pricePHP: 460, rating: 4.8, tone: "bread", image: "/images/products/japanese-milk-bread.webp", comments: comments("Wonderful for the whole table.") },
  { id: "cake-celebration-set", name: "Cake Celebration Set", category: "Specials", description: "A cake slice pairing with two iced drinks.", pricePHP: 540, rating: 4.9, tone: "cake", image: "/images/products/strawberry-cloud-cake.webp", comments: comments("A sweet way to celebrate.") }
];

export const categories = ["All", "Pastries", "Cakes", "Breads", "Drinks", "Specials"] as const;
export const formatPHP = (value: number) => new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(value);
export const filterProducts = (category: (typeof categories)[number]) => category === "All" ? products : products.filter((product) => product.category === category);
export const getProductById = (id: string) => products.find((product) => product.id === id);
