import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import UserAuthLayout from "../components/UserAuthComponent/UserAuthLayout.jsx";
import ShopLayout from "../layouts/ShopperLayout/ShopLayout.jsx";
import AdminLayout from "../layouts/AdminLayout/AdminMainLayout/AdminLayout.jsx";
import { element } from "prop-types";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "today", element: <TodayDeal /> },
        { path: "top-brands", element: <TopBrands /> },
        { path: "best-sellers", element: <BestSeller /> },
        { path: "groceries", element: <Groceries /> },
        { path: "my-pockets", element: <Cart /> },
        { path: "checkout-address", element: <AfterCheckout /> },
        { path: "my-order", element: <OurOrder /> },
        { path: "my-coin", element: <Mycoin /> },
        { path: "my-chats", element: <MessageCenter /> },
        { path: "my-wishlist", element: <Wishlist /> },
        { path: "my-coupons", element: <MyCoupons /> },
        { path: "my-payment", element: <Payment /> },
        { path: "product-detail/:id", element: <ProductDetails /> }, // Fixed typo
        { path: "search-product", element: <SearchedProducts /> },
        { path: "404", element: <GeneralApp /> },
        { path: "*", element: <Navigate to="/404" replace /> }, // Moved to layout-specific handling
      ],
    },
    {
      path: "/auth/user",
      element: <UserAuthLayout />,
      children: [
        { path: "login", element: <UserLogin /> },
        { path: "register", element: <UserRegister /> },
        { path: "forgot-password", element: <UserForgotPassword /> },
        { path: "reset-password", element: <UserResetPassword /> },
        { path: "verify-email", element: <UserVerifyEmail /> },
      ]
    },
    {
      path: "/shop/owner",
      element: <ShopLayout />,
      children: [
        {path:'dashboard',element:<Dashboard />},
        {path:'wallet',element:<ShopWallet />},
        {path:'order-history',element:<OrderHistory />},
        {path:'my-shop-product',element:<ShopProduct />},
        {path:'create-discount',element:<CreateDiscount />},
        {path:'shop-admin-chat',element:<ShopAdminChat />},
        {path:'shop-profile',element:<ShopProfile />},
      ]
    },
    {
            path:"/boss/my-boss",
      element:<AdminLayout />,
      children: [
        {path:'admin-dashboard',element:<AdminDashboard />},
        {path:'create-brand',element:<CreateBrand />},
        {path:'view-brand',element:<ViewBrand />},
        {path:'create-category',element:<CreateCategory />},
        {path:'view-category',element:<ViewCategory />},
        {path:'create-color',element:<CreateColor />},
        {path:'view-color',element:<ViewColor />},
        {path:'create-product',element:<CreateProduct />},
        {path:'view-product',element:<ViewProduct />},
        {path:'view-order',element:<ViewOrder />},
        {path:'create-discount',element:<CreateAdminDiscount />},
        {path:'admin-profile',element:<AdminProfile />},
        {path:'admin-user-chat',element:<AdminChat />},

      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const AdminDashboard = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/AdminDashboard.jsx")),
);
const CreateBrand = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/CreateBrand.jsx")),
);
const ViewBrand = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/ViewBrand.jsx")),
);
const CreateCategory = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/CreateCategory.jsx")),
);
const ViewCategory = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/ViewCategory.jsx")),
);
const CreateColor = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/CreateColor.jsx")),
);
const ViewColor = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/ViewColor.jsx")),
);
const CreateProduct = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/CreateProduct.jsx")),
);
const ViewProduct = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/ViewProduct.jsx")),
);
const ViewOrder = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/ViewOrder.jsx")),
);
const CreateAdminDiscount = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/DiscountCreate.jsx")),
);
const AdminProfile = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/AdminProfile.jsx")),
);
const AdminChat = Loadable(
  lazy(() => import("../layouts/AdminLayout/AdminPage/AdminChat.jsx")),
);


const Dashboard = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/DashBoard.jsx")),
);
const ShopProfile = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/Profile.jsx")),
);
const ShopAdminChat = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/ShopAdminChat.jsx")),
);
const ShopWallet = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/Wallet.jsx")),
);
const CreateDiscount = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/DiscountCreate.jsx")),
);
const ShopProduct = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/ShopProduct.jsx")),
);
const OrderHistory = Loadable(
  lazy(() => import("../layouts/ShopperLayout/ShopperPage/OrderHistory.jsx")),
);

const UserVerifyEmail = Loadable(
  lazy(() => import("../components/UserAuthComponent/VerifyEmail.jsx")),
);

const UserResetPassword = Loadable(
  lazy(() => import("../components/UserAuthComponent/ResetPassword.jsx")),
);
const UserForgotPassword = Loadable(
  lazy(() => import("../components/UserAuthComponent/ForgotPassword.jsx")),
);
const UserLogin = Loadable(
  lazy(() => import("../components/UserAuthComponent/UserLogin.jsx")),
);
const UserRegister = Loadable(
  lazy(() => import("../components/UserAuthComponent/UserRegister.jsx")),
);

const Cart = Loadable(
  lazy(() => import("../components/Cart.jsx")),
);
const SearchedProducts = Loadable(
  lazy(() => import("../components/AfterSearchProduct.jsx")),
);
const ProductDetails = Loadable(
  lazy(() => import("../components/ProductDetails.jsx")),
);
const Payment = Loadable(
  lazy(() => import("../components/PaymentPage.jsx")),
);
const MyCoupons = Loadable(
  lazy(() => import("../components/Mycoupons.jsx")),
);
const Wishlist = Loadable(
  lazy(() => import("../components/Wishlist.jsx")),
);
const AfterCheckout = Loadable(
  lazy(() => import("../components/AfterCheckoutAddress.jsx")),
);
const OurOrder = Loadable(
  lazy(() => import("../components/MyOrder.jsx")),
);
const Mycoin = Loadable(
  lazy(() => import("../components/MyCoin.jsx")),
);
const MessageCenter = Loadable(
  lazy(() => import("../components/MessageCenter.jsx")),
);
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const TodayDeal = Loadable(
  lazy(() => import("../components/HeaderComp/TodayDeals.jsx")),
);
const TopBrands = Loadable(
  lazy(() => import("../components/HeaderComp/TopBrand.jsx")),
);
const BestSeller = Loadable(
  lazy(() => import("../components/HeaderComp/BestSeller.jsx")),
);
const Groceries = Loadable(
  lazy(() => import("../components/HeaderComp/Grocery.jsx")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
