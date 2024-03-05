import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Previews from "./Pages/Preview/Previews.jsx"
import Preview from './Pages/Preview/Preview.jsx'
import Blog from "./Pages/Blog/Blog.jsx"
import Contact from './Pages/Contact/Contact.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="/preview" element={<Previews />}>
        <Route path='' element={<Preview defaultIndex={0}/>} />
        <Route path='/preview/:id' element={<Preview />} />
      </Route>
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
