import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Todo } from "./pages/Todo";
import { Order } from "./pages/Orders";
import { Contact } from "./pages/Contact";
import { PageNotFound } from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/todo',
    element: <Todo />
  },
  {
    path: '/orders',
    element: <Order />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);

export default router;