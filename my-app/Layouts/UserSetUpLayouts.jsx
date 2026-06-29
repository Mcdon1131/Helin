import { Outlet, useLocation } from "react-router-dom";
import UserSetUpNavbar from "../src/components/UserSetUpNavbar";
const pageMap = {
  "/setup/role": 1,
  "/setup/storefront": 2,
  "/setup/freetrial": 3,
};
const UserSetUpLayouts = () => {
  const location = useLocation();
  console.log(location);
  const pageNum = pageMap[location.pathname] || 1;
  return (
    <div className="min-h-screen w-full flex flex-col  p-6 bg-white max-w-130 mx-auto font-sans">
      <UserSetUpNavbar pgNum={pageNum} />
      <Outlet />
    </div>
  );
};

export default UserSetUpLayouts;
