import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  PROFILE_ROUTE,
  PAYMENT_ROUTE,
  NOT_FOUND_ROUTE,
  CONTACT_ROUTE,
  DEVICE_ROUTE,
  ABOUT_US_ROUTE,
  CATEGORY_ROUTE,
  MAIN_ROUTE,
} from "./utils/const";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket/Basket";
import UserPage from "./pages/UserPage";
import Payment from "./pages/Payment";
import DevicePage from "./pages/DevicePage/DevicePage";
import MainPage from "./pages/Main/MainPage";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/404";
import Category from "./pages/Shop/Shop";

export const authRoutes = [
  { path: BASKET_ROUTE, Component: Basket },
  { path: PROFILE_ROUTE, Component: UserPage },
  { path: PAYMENT_ROUTE, Component: Payment },
];

export const privateRoutes = [{ path: ADMIN_ROUTE, Component: Admin }];

export const publicRoutes = [
  { path: DEVICE_ROUTE + "/:id", Component: DevicePage },
  { path: MAIN_ROUTE, Component: MainPage },
  { path: CONTACT_ROUTE, Component: Contact },
  { path: ABOUT_US_ROUTE, Component: AboutUs },
  { path: NOT_FOUND_ROUTE, Component: NotFound },
  { path: CATEGORY_ROUTE, Component: Category },
];
