import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import appStore from './utils/appStore'
import Body from './components/Body'
import Mainbar from './components/Mainbar'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,  // Body contains Header, Sidebar, and <Outlet />
    children: [
      {
        index: true,  // this is the route for "/"
        element: <Mainbar />
      },
      {
        path: 'watch',  // this is the route for "/watch"
        element: <WatchPage />
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App


