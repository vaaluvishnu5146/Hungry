import Login from "../Pages/login";
import Home from "../Pages/Home";
import RestaurantDetails from "../Pages/RestaurantDetails";
import Cart from "../Pages/Cart";
import CreateProduct from "../Pages/CreateProduct";

export const openRoutes = [
  {
    name: "Login | Signup",
    id: "login",
    Component: <Login />,
    path: "/",
  },
];

export const closedRoutes = [
  {
    name: "Home | For Hungry people",
    id: "home",
    Component: <Home />,
    path: "/",
  },
  {
    name: "Restaurant Details | For Hungry people",
    id: "restaurantDetails",
    Component: <RestaurantDetails />,
    path: "/restaurant/:id",
  },
  {
    name: "Cart | For Hungry people",
    id: "cartDetails",
    Component: <Cart />,
    path: "/cart/:id",
  },
  {
    name: "Create Product | For a Restaurant",
    id: "createProduct",
    Component: <CreateProduct />,
    path: "/createProduct/:id",
  },
];
