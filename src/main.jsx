import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sol from './Sol'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: '/profile',
    element: 'I am priyanka kumari'
  },
  {
    path: '/app',
    element: <App/>
  },
  {
    path: '/sol',
    element: <Sol/>
  }
]);

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <RouterProvider router={router} />
  </>
)