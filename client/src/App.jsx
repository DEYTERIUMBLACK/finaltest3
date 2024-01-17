import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/routes.jsx";
import './assets/reset.css'
const routes = createBrowserRouter(ROUTES);
const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
};

export default App;
