import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import { LoginPage } from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import UserSetUpLayouts from "../Layouts/UserSetUpLayouts";
import RolePage from "../Pages/UserSetups/RolePage";
import StoreFrontPage from "../Pages/UserSetups/StoreFrontPage";
import FreeTrialPage from "../Pages/UserSetups/FreeTrialPage";
import { useState } from "react";
const App = () => {
  let [pageNum, setPageNum] = useState(1);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="setup" element={<UserSetUpLayouts pageNum={pageNum} />}>
          <Route path="role" element={<RolePage setPageNum={setPageNum} />} />
          <Route
            path="storefront"
            element={<StoreFrontPage setPageNum={setPageNum} />}
          />
          <Route
            path="freetrial"
            element={<FreeTrialPage setPageNum={setPageNum} />}
          />
        </Route>
      </Route>,
    ),
  );
  console.log(pageNum);
  return <RouterProvider router={router} />;
};

export default App;
