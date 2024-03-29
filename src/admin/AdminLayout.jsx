import { Outlet } from "react-router-dom";
import Sidebar from "../admin/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
