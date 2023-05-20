import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

function App() {
  const Router = router;

  // aos animation

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-navyDark">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
