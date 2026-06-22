import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import { LoginPage } from "../Pages/LoginPage";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<LoginPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
