import { Outlet } from "react-router-dom";
import UserSetUpNavbar from "../src/components/UserSetUpNavbar";
const UserSetUpLayouts = () => {
  return (
    <div>
      <UserSetUpNavbar />
      <Outlet />
    </div>
  );
};

export default UserSetUpLayouts;
