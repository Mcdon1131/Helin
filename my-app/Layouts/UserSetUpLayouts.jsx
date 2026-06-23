import { Outlet } from "react-router-dom";
import UserSetUpNavbar from "../src/components/UserSetUpNavbar";
const UserSetUpLayouts = ({pageNum}) => {
  return (
    <div>
      <UserSetUpNavbar pgNum={pageNum}/>
      <Outlet />
    </div>
  );
};

export default UserSetUpLayouts;
