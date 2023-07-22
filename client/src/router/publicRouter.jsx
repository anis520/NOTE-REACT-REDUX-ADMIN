import { Forgot } from "../pages/auth/Forgot";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import PublicGard from "./PublicGard";

// creat public router
const publicRouter = [
  {
    element: <PublicGard />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgotpass", element: <Forgot /> },
    ],
  },
];

// export router
export default publicRouter;
