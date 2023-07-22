import PageLayout from "../components/Layout/PageLayout";
import Home from "../pages/Dashbord/Home";
import Premition from "../pages/Dashbord/Premition";
import Role from "../pages/Dashbord/Role";
import User from "../pages/Dashbord/User";
import PrivateGard from "./PrivateGard";

// creat Private router
const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <PageLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/users", element: <User /> },
          { path: "/role", element: <Role /> },
          { path: "/permition", element: <Premition /> },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
