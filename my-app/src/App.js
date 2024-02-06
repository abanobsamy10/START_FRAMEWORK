import { Component } from "react";
import {RouterProvider,createBrowserRouter} from"react-router-dom"
import Home from "./Components/home/home.js";
import Layout from "./Components/LAYOUT/LAYOUT.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import PORTFOLIO from "./Components/PORTFOLIO/PORTFOLIO.js";
const hamada = createBrowserRouter([
{path:"/",element: <Layout/>,children:[
{path:"home",element: <Home/> ,},
{path:"about",element: <About/>},
{path:"contact",element: <Contact/>},
{path:"PORTFOLIO",element: <PORTFOLIO/>},
{path:"*",element: <><h2>not found</h2></>},]},
])

 export default class App extends Component
 {
  state={}
  render()
  {
    return <RouterProvider router={hamada}/>
  }
 }