import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import About from "./components/Pages/About.jsx";
import News from "./components/Pages/News.jsx";
import Resources from "./components/Pages/Resources.jsx";
import Careers from "./components/Pages/Careers.jsx";
import Services from "./components/Pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/news",
        element:<News />
      },
      {
        path:"/resources",
        element:<Resources />
      },
      {
        path:'/careers',
        element:<Careers />
      },
      {
        path:"/services",
        element:<Services />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
