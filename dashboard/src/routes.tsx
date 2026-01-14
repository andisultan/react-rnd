import { BrowserRouter, Routes, Route } from 'react-router'
import DashboardLayout from './layouts/dashboard'
import DashboardPage from './modules/dashboard/pages'
import AuthLayout from './layouts/auth'
import NotFoundPage from './layouts/404'
import LoginPage from './modules/auth/pages/Login'
import RegisterPage from './modules/auth/pages/Register'
import OrderPage from './modules/orders/pages'
import TrackingPage from './modules/tracking/pages'
import WelcomePage from './modules/welcome'
import CustomerPage from './modules/customers/pages'
import MarketplacePage from './modules/marketplace/pages'
import DiscountPage from './modules/discounts/pages'
import SettingPage from './modules/settings/pages'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='marketplace' element={<MarketplacePage />} />
          <Route path='orders' element={<OrderPage />} />
          <Route path='tracking' element={<TrackingPage />} />
          <Route path='customers' element={<CustomerPage />} />
          <Route path='discounts' element={<DiscountPage />} />
          <Route path='settings' element={<SettingPage />} />
        </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}