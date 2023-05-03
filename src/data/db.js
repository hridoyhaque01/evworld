// images
import {
  acceleration,
  battery,
  car,
  charging,
  electric,
  eye,
  gas,
  infotainment,
  member1,
  member2,
  member3,
  member4,
  product1,
  product2,
  product3,
  station,
  tree,
  users,
  vision,
  wheels,
} from "../assets/images/Images";

const missons = [
  {
    id: 1,
    icon: vision,
    title: "Mission and Vision",
    texts:
      "Our mission is to create a cleaner and more sustainable future through electric mobility.",
    classIcon: "lines down-line",
  },
  {
    id: 2,
    icon: gas,
    title: "Greener Future",
    texts:
      "We believe that a greener future is possible, and we are committed to making it a reality.",
    classIcon: "lines up-line",
  },
  {
    id: 3,
    icon: eye,
    title: "Passion for Innovation",
    texts:
      "Our journey began with a passion for innovation and a drive to revolutionize transportation.",
    classIcon: "",
  },
];

const analyticsData = [
  {
    id: 1,
    icon: station,
    value: 40,
    suffix: "K",
    name: "Charging Stations",
  },
  {
    id: 2,
    icon: users,
    value: 1600,
    suffix: "M",
    name: "Business Customers",
  },
  {
    id: 3,
    icon: tree,
    value: 300,
    suffix: "K",
    name: "Trees Planted",
  },
  {
    id: 4,
    icon: car,
    value: 3,
    suffix: "M+",
    name: "Cars On Road",
  },
];

const featuresLeft = [
  {
    id: 1,
    title: "Wheels",
    text: `21" inch alloy wheels, low-rolling resistance tires.`,
    image: wheels,
  },
  {
    id: 2,
    title: "Infotainment",
    text: `Touchscreen infotainment with Apple CarPlay, Android Auto, Bluetooth, camera.`,
    image: infotainment,
  },
  {
    id: 3,
    title: "Electric Motor",
    text: `600 hp, 800 Nm electric motor.`,
    image: electric,
  },
];

const products = [
  {
    id: 1,
    image: product2,
    title: "Home Charging",
    imgClass: "product-img--1",
  },
  {
    id: 2,
    image: product3,
    title: "Cars",
    imgClass: "product-img--2",
  },
  {
    id: 3,
    image: product1,
    title: "Charging Station",
    imgClass: "product-img--3",
  },
];

const members = [
  {
    id: 1,
    image: member1,
    name: "Theresa Webb",
    position: "CEO (Chief Executive Officer)",
    instaLink: "https://instagram.com/",
    LinkedinLink: "https://instagram.com/",
  },
  {
    id: 2,
    image: member2,
    name: "Kathryn Murphy",
    position: "CEO (Chief Executive Officer)",
    instaLink: "https://instagram.com/",
    LinkedinLink: "https://instagram.com/",
  },
  {
    id: 3,
    image: member3,
    name: "Devon Lane",
    position: "CEO (Chief Executive Officer)",
    instaLink: "https://instagram.com/",
    LinkedinLink: "https://instagram.com/",
  },
  {
    id: 4,
    image: member4,
    name: "Brooklyn Simmons",
    position: "CEO (Chief Executive Officer)",
    instaLink: "https://instagram.com/",
    LinkedinLink: "https://instagram.com/",
  },
];

const featuresRight = [
  {
    id: 1,
    title: "Acceleration",
    text: `Instant torque for quick and smooth acceleration.`,
    image: acceleration,
  },
  {
    id: 2,
    title: "Charging",
    text: `Level 2 charging takes 20 Minutes, fast charging available.`,
    image: charging,
  },
  {
    id: 3,
    title: "Battery",
    text: `120 kWh battery, 460 miles range.`,
    image: battery,
  },
];

export {
  missons,
  analyticsData,
  featuresLeft,
  featuresRight,
  products,
  members,
};
