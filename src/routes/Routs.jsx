import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import ListedBooks from '../pages/ListedBooks.jsx'
import ToRead from '../pages/ToRead.jsx'
import Books from '../componants/Books.jsx'
import Book from '../componants/Book.jsx'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout> </MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/listedBooks',
          element: <ListedBooks></ListedBooks>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path:'/ToRead',
          element: <ToRead></ToRead>,
          loader: ({params}) => 
          fetch(`https://dev.to/api/articles/${params.id}`),
         
        },
        {
          path: '/books',
          element: <Books />,
          loader: () => fetch('/book.json')
              .then(response => response.json())
      },
      {
          path: '/book/:id',
          element: <Book />,
          loader: ({ params }) => fetch('/book.json')
              .then(response => response.json())
              .then(data => data.find(book => book.bookId === parseInt(params.id)))
      }
        
      ]
    },
    
  ]);