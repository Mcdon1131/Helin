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
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="auth" element={<UserSetUpLayouts />}>
          <Route path="role" element={<RolePage />} />
        </Route>
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
