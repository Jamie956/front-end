import Home from "./Home";
import About from "./About";

const routes = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  }
];

export default routes;
