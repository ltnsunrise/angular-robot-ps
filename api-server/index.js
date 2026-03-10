const express = require("express");

const app = express();

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) { setTimeout(next, 1000); });

app.get("/api/products", (req, res) => {
  let products = [
    {
      id: 1,
      description:
        "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      name: "Large Cyclops",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    },
    {
      id: 17,
      description: "A spring base - great for reaching high places.",
      name: "Spring Base",
      imageName: "base-spring.png",
      category: "Bases",
      price: 1190.5,
      discount: 0,
    },
    {
      id: 6,
      description:
        "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
      name: "Articulated Arm",
      imageName: "arm-articulated-claw.png",
      category: "Arms",
      price: 275,
      discount: 0,
    },
    {
      id: 2,
      description:
        "A friendly robot head with two eyes and a smile -- great for domestic use.",
      name: "Friendly Bot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2,
    },
    {
      id: 3,
      description:
        "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
      name: "Shredder",
      imageName: "head-shredder.png",
      category: "Heads",
      price: 1275.5,
      discount: 0,
    },
    {
      id: 16,
      description:
        "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
      name: "Single Wheeled Base",
      imageName: "base-single-wheel.png",
      category: "Bases",
      price: 1190.5,
      discount: 0.1,
    },
    {
      id: 13,
      description: "A simple torso with a pouch for carrying items.",
      name: "Pouch Torso",
      imageName: "torso-pouch.png",
      category: "Torsos",
      price: 785,
      discount: 0,
    },
    {
      id: 7,
      description:
        "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
      name: "Two Clawed Arm",
      imageName: "arm-dual-claw.png",
      category: "Arms",
      price: 285,
      discount: 0,
    },

    {
      id: 4,
      description: "A simple single-eyed head -- simple and inexpensive.",
      name: "Small Cyclops",
      imageName: "head-single-eye.png",
      category: "Heads",
      price: 750.0,
      discount: 0,
    },
    {
      id: 9,
      description:
        "An arm with a propeller -- good for propulsion or as a cooling fan.",
      name: "Propeller Arm",
      imageName: "arm-propeller.png",
      category: "Arms",
      price: 230,
      discount: 0.1,
    },
    {
      id: 15,
      description: "A rocket base capable of high speed, controlled flight.",
      name: "Rocket Base",
      imageName: "base-rocket.png",
      category: "Bases",
      price: 1520.5,
      discount: 0,
    },
    {
      id: 10,
      description: "A short and stubby arm with a claw -- simple, but cheap.",
      name: "Stubby Claw Arm",
      imageName: "arm-stubby-claw.png",
      category: "Arms",
      price: 125,
      discount: 0,
    },
    {
      id: 11,
      description:
        "A torso that can bend slightly at the waist and equiped with a heat guage.",
      name: "Flexible Gauged Torso",
      imageName: "torso-flexible-gauged.png",
      category: "Torsos",
      price: 1575,
      discount: 0,
    },
    {
      id: 14,
      description: "A two wheeled base with an accelerometer for stability.",
      name: "Double Wheeled Base",
      imageName: "base-double-wheel.png",
      category: "Bases",
      price: 895,
      discount: 0,
    },
    {
      id: 5,
      description:
        "A robot head with three oscillating eyes -- excellent for surveillance.",
      name: "Surveillance",
      imageName: "head-surveillance.png",
      category: "Heads",
      price: 1255.5,
      discount: 0,
    },
    {
      id: 8,
      description: "A telescoping arm with a grabber.",
      name: "Grabber Arm",
      imageName: "arm-grabber.png",
      category: "Arms",
      price: 205.5,
      discount: 0,
    },
    {
      id: 12,
      description: "A less flexible torso with a battery gauge.",
      name: "Gauged Torso",
      imageName: "torso-gauged.png",
      category: "Torsos",
      price: 1385,
      discount: 0,
    },
    {
      id: 18,
      description:
        "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
      name: "Triple Wheeled Base",
      imageName: "base-triple-wheel.png",
      category: "Bases",
      price: 700.5,
      discount: 0,
    },
  ];
  res.send(products);
});
app.get("/api/products-2", (req, res) => {
  let products = [
    {
      id: 1,
      productName: "Leaf Rake",
      description: "Leaf rake with 48-inch wooden handle",
      price: 19.95,
      supplierIds: [1, 2],
    },
    {
      id: 2,
      productName: "Garden Cart",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      supplierIds: [],
    },
    {
      id: 5,
      productName: "Hammer",
      description: "Curved claw steel hammer",
      price: 8.9,
      supplierIds: [5, 6],
    },
    {
      id: 8,
      productName: "Saw",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      supplierIds: [7, 8],
    },
    {
      id: 10,
      productName: "Video Game Controller",
      description: "Standard two-button video game controller",
      price: 35.95,
      supplierIds: [9, 10],
    },
  ];
  res.send(products);
});
app.get("/api/suppliers/:id", (req, res) => {
  let suppliers = [
    {
      id: 1,
      name: "Acme Gardening Supply",
      cost: 16.95,
      minQuantity: 12,
    },
    {
      id: 2,
      name: "Standard Gardening",
      cost: 15.95,
      minQuantity: 24,
    },

    {
      id: 3,
      name: "Acme Gardening Supply",
      cost: 12,
      minQuantity: 6,
    },
    {
      id: 4,
      name: "Acme General Supply",
      cost: 25,
      minQuantity: 2,
    },
    {
      id: 5,
      name: "Acme General Supply",
      cost: 2,
      minQuantity: 24,
    },
    {
      id: 6,
      name: "Acme Tool Supply",
      cost: 4,
      minQuantity: 12,
    },
    {
      id: 7,
      name: "Tools Are Us",
      cost: 8,
      minQuantity: 8,
    },
    {
      id: 8,
      name: "Acme Tool Supply",
      cost: 4,
      minQuantity: 12,
    },
    {
      id: 9,
      name: "Acme Game Supply",
      cost: 20,
      minQuantity: 6,
    },
    {
      id: 10,
      name: "Acme General Supply",
      cost: 12,
      minQuantity: 12,
    },
  ];
  res.send(suppliers.find((s) => s.id === parseInt(req.params.id)));
});
app.get("/api/reviews/:productId", (req, res) => {
  let reviews = [
    {
      id: 1,
      productId: 10,
      userName: "jackharkness",
      title: "Works great",
      text: "I've beat every level faster with this controller",
    },
    {
      id: 2,
      productId: 5,
      userName: "thor364",
      title: "Didn't work as I expected",
      text: "I summon this hammer, and it does not heed my call",
    },
    {
      id: 3,
      productId: 5,
      userName: "allthumbs",
      title: "Dangerous!",
      text: "I almost injured myself with this product",
    },
    {
      id: 4,
      productId: 2,
      userName: "mom42",
      title: "Great for the kiddos",
      text: "My kids love to play with this cart",
    },
    {
      id: 5,
      productId: 5,
      userName: "theoden",
      title: "Now for wrath. Now for ruin",
      text: "This hammer (and a dinner bell) worked even better than a horn for drawing attention",
    },
    {
      id: 6,
      productId: 5,
      userName: "glamdring",
      title: "This was no foe-hammer",
      text: "Product was much smaller than expected",
    },
    {
      id: 7,
      productId: 10,
      userName: "grima",
      title: "Nothing but a herald of woe",
      text: "I played no better with this controller than my old one",
    },
    {
      id: 8,
      productId: 1,
      userName: "hama",
      title: "Has no evil purpose",
      text: "This rake is worthy of honor",
    },
    {
      id: 9,
      productId: 1,
      userName: "hama",
      title: "More than a tool",
      text: "The rake in the hand of a wizard may be more than a tool for the garden",
    },
    {
      id: 10,
      productId: 1,
      userName: "eowyn",
      title: "A necessity!",
      text: "Those without rakes can still die upon them",
    },
  ];
  res.send(
    reviews.filter((r) => r.productId === parseInt(req.params.productId)),
  );
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));
