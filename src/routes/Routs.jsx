import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ListedBooks from "../pages/ListedBooks.jsx";
import ToRead from "../pages/ToRead.jsx";
import Books from "../componants/Books.jsx";
import Book from "../componants/Book.jsx";
import Contact from "../componants/Contact.jsx";
import Pricing from "../componants/Pricing.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/ToRead",
        element: <ToRead></ToRead>,
      },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/books",
        element: <Books />,
        loader: () => fetch("/book.json").then((response) => response.json()),
      },
      {
        path: "/book/:id",
        element: <Book />,
        loader: ({ params }) =>
          fetch("/book.json")
            .then((response) => response.json())
            .then((data) =>
              data.find((book) => book.bookId === parseInt(params.id))
            ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
