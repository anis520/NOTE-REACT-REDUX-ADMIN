import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/publicRoutes";
import "./assets/vendor/fontawesome-free/css/all.min.css";

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
