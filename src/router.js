import { createWebHistory, createRouter } from "vue-router";

// customer pages
import CustomerLogin from './components/auth/CustomerLogin.vue';
import CustomerRegister from './components/auth/CustomerRegister.vue';
import RegisterSent from './components/auth/RegisterSent.vue';
import EmailVerified from './components/auth/EmailVerified.vue';
import SetPassword from './components/auth/SetPassword.vue';
import ForgotPassword from './components/auth/ForgotPassword.vue';
import UpdatePassword from './components/auth/UpdatePassword.vue';
import CustomerProfile from './components/Customer/CustomerProfile/CustomerProfile.vue';
import Overview from './components/Customer/Overview/Overview.vue';
import MyOrders from './components/Customer/MyOrders/MyOrders.vue';
import OrderDetail from './components/Customer/MyOrders/OrderDetail/OrderDetail.vue';
import AmbassdorDetail from './components/Customer/AmbassdorProfilePreview/AmbassdorDetail.vue';
import Chat from './components/Customer/Chat/Chat.vue';
import Subscriptions from './components/Customer/Subscriptions/Subscriptions.vue';
import SubscriptionsDetail from './components/Customer/Subscriptions/SubscriptionsDetail.vue';
import WishList from './components/Customer/WishList/WishList.vue';

import Ambassadors from './components/Customer/Ambassadors/Ambassadors.vue';
import Product from './components/Customer/Product/Product.vue';
import ProductDetail from './components/Customer/ProductDetail/ProductDetail.vue';
import ThankYou from './components/Customer/ThankYou/ThankYou.vue';
import ThankYouPost from './components/Customer/ThankYou/ThankYouPost.vue';
import ThankYouCardAdded from './components/Customer/ThankYou/ThankYouCardAdded.vue';
import Cart from './components/Customer/Cart/Cart.vue';
import Checkout from './components/Customer/Checkout/Checkout.vue';
import CheckoutPost from './components/Customer/Checkout/CheckoutPost.vue';
import Subscription from './components/Customer/Subscription/Subscription.vue';
import ErrorPage from './components/ErrorPage/ErrorPage.vue';

// front pages
import HomePage from "./components/FrontPage/HomePage/HomePage.vue";
import AboutUs from "./components/FrontPage/AboutUs/AboutUs.vue";
import GetInTouch from "./components/FrontPage/GetInTouch/GetInTouch.vue";
import TermCondition from "./components/FrontPage/TermCondition/TermCondition.vue";
import PrivacyPolicy from './components/FrontPage/PrivacyPolicy/PrivacyPolicy.vue';
import HelpCenter from './components/FrontPage/HelpCenter/HelpCenter.vue';
import AffiliateProgram from './components/FrontPage/AffiliateProgram/AffiliateProgram.vue';
import DeliveryInformation from './components/FrontPage/DeliveryInformation/DeliveryInformation.vue';
import ReturnAndRefunds from './components/FrontPage/ReturnAndRefunds/ReturnAndRefunds.vue';
import OrderTracking from './components/FrontPage/OrderTracking/OrderTracking.vue'

const routes = [
  // customer Ambassador onbording pages
  {
    name: "CustomerLogin",
    path: "/login",
    component: CustomerLogin,
  },
  {
    name: "CustomerRegister",
    path: "/register",
    component: CustomerRegister,
  },
  {
    name: "RegisterSent",
    path: "/register-sent",
    component: RegisterSent,
  },
  {
    name: "EmailVerified",
    path: "/verify-email",
    component: EmailVerified,
  },
  {
    name: "SetPassword",
    path: "/reset-password",
    component: SetPassword,
  },
  {
    name: "ForgotPassword",
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    name: "UpdatePassword",
    path: "/update-password",
    component: UpdatePassword,
  },
  {
    name: "CustomerProfilePage",
    path: "/profile",
    component: CustomerProfile,
  },
  {
    name: "AmbassdorDetail",
    path: "/play/:id",
    component: AmbassdorDetail,
  },
  {
    name: "OverviewPage",
    path: "/feed",
    component: Overview,
  },
  {
    name: "MyOrdersPage",
    path: "/orders",
    component: MyOrders,
  },
  {
    name: "OrderDetail",
    path: "/order-detail/:orderId/:productId",
    component: OrderDetail,
  },
  {
    name: "ChatPage",
    path: "/chat",
    component: Chat,
  },
  {
    name: "MysubscriptionsName",
    path: "/my-subscriptions",
    component: Subscriptions,
  },
  {
    name: "SubscriptionsDetail",
    path: "/subscriptions-detail",
    component: SubscriptionsDetail,
  },
  {
    name: "WishListPage",
    path: "/wishlist",
    component: WishList,
  },

  {
    name: "Play",
    path: "/play",
    component: Ambassadors,
  },
  {
    name: "Products",
    path: "/products",
    component: Product,
  },
  {
    name: "Product Detail Page",
    path: "/product-detail/:id",
    component: ProductDetail,
  },
  {
    name: "ThankYouPage",
    path: "/thankyou",
    component: ThankYou,
  },
  {
    name: "ThankYouCardAdded",
    path: "/thankyou/cardadded",
    component: ThankYouCardAdded,
  },
  {
    name: "ThankYouPost",
    path: "/thankyou/post",
    component: ThankYouPost,
  },
  {
    name: "CartPage",
    path: "/cart",
    component: Cart,
  },
  {
    name: "CheckoutPage",
    path: "/checkout",
    component: Checkout,
  },
  {
    name: "CheckoutPost",
    path: "/checkout/post",
    component: CheckoutPost,
  },
  {
    name: "SubscriptionPage",
    path: "/subscribe",
    component: Subscription,
  },
  {
    name: "ErrorPage",
    path: "/error-page",
    component: ErrorPage,
  },

  // front pages
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "ContactUsPage",
    path: "/contact-us",
    component: GetInTouch,
  },
  {
    name: "AboutUsPage",
    path: "/about-us",
    component: AboutUs,
  },
  {
    name: "TermConditionPage",
    path: "/term-condition",
    component: TermCondition,
  },
  {
    name: "PrivacyPolicyPage",
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    name: "HelpCenter",
    path: "/help-center",
    component: HelpCenter,
  },
  {
    name: "AffiliateProgram",
    path: "/affiliate-program",
    component: AffiliateProgram,
  },
  {
    name: "DeliveryInformation",
    path: "/delivery-information",
    component: DeliveryInformation,
  },
  {
    name: "ReturnAndRefunds",
    path: "/return-&-refunds",
    component: ReturnAndRefunds,
  },
  {
    name: "orderTracking",
    path: "/order-tracking",
    component: OrderTracking,
  },
];
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  routes,
});

export default router;
router.beforeEach((to, from, next) => {
  if (to.path !== "/" && to.path !== "/forgot-password" && to.path !== "/login" && !to.path.includes("/product-detail") && !to.path.includes("/products") && to.path !== "/register" && to.path !== "/verify-email" && to.path !== "/cart" && to.path !== "/reset-password" && to.path !== "/play" && !to.path.includes("/play/") && !to.path.includes("/term-condition") && !to.path.includes("/privacy-policy") && !to.path.includes("/about-us") && !to.path.includes("/contact-us") && !to.path.includes("/order-tracking") && !to.path.includes("/affiliate-program") && !to.path.includes("/help-center") && !to.path.includes("/delivery-information") && !to.path.includes("/return-&-refunds")) {
    const loggedIn = localStorage.getItem("access_token");
    if (!loggedIn) {
      localStorage.removeItem('email');
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_Details');
      next("/");
    } else if (!to.matched.length) {
      // next("/pages/error-404");
      next();
    } else {
      next();
    }
  }
  next();
});
router.afterEach((to, from, next) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    console.log(to)
    if(to.name == 'Product Detail Page'){
      document.title = to.params.id.split('_')[1];
    } else if(to.name == 'AmbassdorDetail') {
      document.title = to.params.id.split('_')[1];
    } else {
      document.title = `Obey Tina - ${to.name}`;
    }
    next()
});