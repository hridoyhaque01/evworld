import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

function App() {
  const Router = router;
  return (
    <div className="h-screen bg-navyDark">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
