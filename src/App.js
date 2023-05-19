import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";

import { AlertProvider } from "./context/alert/AlertContext";
import User from "./pages/User";

function App() {
  const markup = (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <Outlet />
      </main>
      <Footer />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: markup,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "about", element: <About /> },
        { path: "/*", element: <NotFound /> },
        { path: "/user/:login", element: <User /> },
      ],
    },
  ]);

  return (
    <AlertProvider>
      <GithubProvider>
        <RouterProvider router={router}></RouterProvider>
      </GithubProvider>
    </AlertProvider>
  );
}

export default App;
