import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard/Dashboard";
import Login from "./site/Auth/Login";
import PageNotFound from "./site/404Page/404Page";
import Sidebar from "./admin/sidebar/Sidebar";
import IsAdmin from "./authentication/IsAdmin";
import Public from "./authentication/Public";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />

          <Route path="login" element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route path="nav" element={<Sidebar />} />
        </Route>

        <Route
          path="/admin"
          element={
            <IsAdmin>
              <AdminLayout />
            </IsAdmin>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="nav" element={<Sidebar />} />
          
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
