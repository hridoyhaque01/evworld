import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

function App() {
  const Router = router;

  // aos animation

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
