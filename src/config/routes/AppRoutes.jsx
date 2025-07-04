import { Routes, Route } from "react-router-dom";
import PrefixScreen from "@/ui/startup/PrefixScreen";
import Login from "@/ui/auth/Login";
import Dashboard from "@/ui/dashboard/Dashboard";
import AppLayout from "@/ui/layout/AppLayout";
import Customers from "@/ui/customers/Customers";
import POS from "@/ui/pos/POS";
import Products from "@/ui/products/Products";
import Billing from "@/ui/billing/Billing";
import Payments from "@/ui/payments/Payments";
import Reports from "@/ui/reports/Reports";
import Settings from "@/ui/settings/Settins";
import Permissions from "@/ui/permissions/Permissions";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/prefixscreen" element={<PrefixScreen />} />

      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="pos" element={<POS />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="billings" element={<Billing />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="permissions" element={<Permissions />} />

      </Route>
    </Routes>
  );
}
