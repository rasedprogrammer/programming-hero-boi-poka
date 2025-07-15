import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import BookDetail from "../BookDetail/BookDetail";
import ListedBooks from "../ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail />,
        loader: () => fetch(`./booksData.json`),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch(`./booksData.json`),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
