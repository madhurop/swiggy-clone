import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Offer from './Components/Offer.jsx'
import Help from './Components/Help.jsx'
import Error from './Components/Error.jsx'
import SearchPage from './Components/Search.jsx'
import './index.css'
import './App.css'
import NavBar from './Components/Header.jsx'
import MainBody from './Components/MainBody.jsx'
import RestaurantMenu from './Components/RestaurantMenu.jsx'
import FoodCollection from './Components/FoodCollection.jsx'

function App() {
  return (
    <div className=' w-screen h-screen bg-white'>
      <NavBar />
      <Outlet />

    </div>
  )
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <MainBody />
      },
      {
        path: "/offer",
        element: <Offer />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/search",
        element: <SearchPage />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/collection/:collId",
        element:<FoodCollection/>
      }
    ],
    errorElement: <Error />

  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
)
