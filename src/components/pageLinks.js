import img1 from "../images/tour-1.jpeg";
import img2 from "../images/tour-2.jpeg";
import img3 from "../images/tour-3.jpeg";
import img4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#about", name: "about" },
  { id: 2, href: "#home", name: "home" },
  { id: 3, href: "#services", name: "services" },
  { id: 4, href: "#tours", name: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export const Tours = [
  {
    id: 1,
    image: img1,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-map",
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    duration: 6,
    location: "china",
    price: 2100,
  },
  {
    id: 2,
    image: img2,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "best of java",
    date: "october 1th, 2020",
    duration: 14,
    location: "Japan",
    price: 2100,
  },
  {
    id: 3,
    image: img3,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "Come to Russia",
    date: "november 1th, 2020",
    duration: 8,
    location: "Russia",
    price: 2100,
  },
  {
    id: 4,
    image: img4,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "Welcome to India",
    date: "april 26th, 2020",
    duration: 12,
    location: "India",
    price: 4100,
  },
];
