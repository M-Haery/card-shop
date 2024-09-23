import Home from "./components/home/Home"
import CommonQuestions from "./components/common questions/CommonQuestions"
import Panel from "./components/panel/panel/Panel"
import ContactUs from "./components/contact us/ContactUs"
import Rules from "./components/rules/Rules"
import MainPost from "./components/home/MainPost"
import PrivateRoute from "./components/pvRoute/PrivateRoute"
import Login from "./components/login/Login"
import Cards from "./components/panel/cards/Cards"
import ContactUsAdmin from "./components/panel/contactUsAdmin/ContactUsAdmin"
import Gateway from "./components/panel/gateway/Gateway"
import Gifts from "./components/panel/gifts/Gifts"
import Menus from "./components/panel/menus/Menus"
import Orders from "./components/panel/orders/Orders"
import Pages from "./components/panel/pages/Pages"
import Products from "./components/panel/products/Products"
import ProductsCategorization from "./components/panel/productsCategorization/ProductsCategorization"
import Questions from "./components/panel/questions/Questions"
import Settings from "./components/panel/settings/Settings"
import SliderManagment from "./components/panel/sliderManagment/SliderManagment"
import Tickets from "./components/panel/tickets/Tickets"
import Transactions from "./components/panel/transactions/Transactions"
import Users from "./components/panel/users/Users"
import Admins from "./components/panel/admins/Admins"
import NewPassword from "./components/panel/admins/NewPassword"
import EditInfo from "./components/panel/admins/EditInfo"
import NewAdmin from "./components/panel/admins/NewAdmin"
import ShowTicket from "./components/panel/tickets/ShowTicket"
import NewProductCategory from "./components/panel/productsCategorization/NewProductCategory"
import NewProduct from "./components/panel/products/NewProduct"

let routes = [
    {path: '/', element: <Home/>},
    {path: '/contact', element: <ContactUs/>},
    {path: '/questions', element: <CommonQuestions/>},
    {path: '/rules', element: <Rules/>},
    {path: '/products/:id', element: <MainPost/>},
    {path: '/login', element: <Login/>},
    {path: '/panel', element: <PrivateRoute><Panel/></PrivateRoute>},
    {path: '/admins', element: <PrivateRoute><Admins/></PrivateRoute>},
    {path: '/contactUs', element: <PrivateRoute><ContactUsAdmin/></PrivateRoute>},
    {path: '/cards', element: <PrivateRoute><Cards/></PrivateRoute>},
    {path: '/gateways', element: <PrivateRoute><Gateway/></PrivateRoute>},
    {path: '/gifts', element: <PrivateRoute><Gifts/></PrivateRoute>},
    {path: '/menus', element: <PrivateRoute><Menus/></PrivateRoute>},
    {path: '/orders', element: <PrivateRoute><Orders/></PrivateRoute>},
    {path: '/pages', element: <PrivateRoute><Pages/></PrivateRoute>},
    {path: '/products', element: <PrivateRoute><Products/></PrivateRoute>},
    {path: '/productsCategorization', element: <PrivateRoute><ProductsCategorization/></PrivateRoute>},
    {path: '/questionsAdmin', element: <PrivateRoute><Questions/></PrivateRoute>},
    {path: '/settings', element: <PrivateRoute><Settings/></PrivateRoute>},
    {path: '/slider', element: <PrivateRoute><SliderManagment/></PrivateRoute>},
    {path: '/tickets', element: <PrivateRoute><Tickets/></PrivateRoute>},
    {path: '/transactions', element: <PrivateRoute><Transactions/></PrivateRoute>},
    {path: '/users', element: <PrivateRoute><Users/></PrivateRoute>},
    {path: '/userPass/:id', element: <NewPassword/>},
    {path: '/userInfo/:id', element: <EditInfo/>},
    {path: '/newAdmin', element: <NewAdmin/>},
    {path: '/ticket/:id', element: <ShowTicket/>},
    {path: '/newCategory', element: <NewProductCategory/>},
    {path: '/newProduct', element: <PrivateRoute><NewProduct/></PrivateRoute>},
]

export default routes