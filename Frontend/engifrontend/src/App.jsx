import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainResources from './components/MainResources'
import PreviousYearPapers from './components/PreviousYearPapers'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import ReferenceBooks from './components/ReferenceBooks'
import SolveDoubts from './components/SolveDoubts'
import Compeditions from './components/Compeditions'
import AppLayout from './components/layout/AppLayout'
import About from './components/About'
import Aibot from './components/Aibot'
import Computer from './components/branches/Computer'
import Mechanical from './components/branches/Mechanical'
import Electrical from './components/branches/Electrical'
import Entc from './components/branches/Entc'
import It from './components/branches/It'
import FirstYear from './components/branches/FirstYear'
import Aids from './components/branches/Aids'
import Civil from './components/branches/Civil'
import SignIn from './components/SignIn'
import Youtube from './components/Youtube'
import Roadmap from './components/Roadmap'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:  <AppLayout/>,
      children:[
        {
          path: '/',
          element: <MainResources />,
          },
          {
            path: "/previous-papers",
            element: <PreviousYearPapers />,
          },
          {
            path: '/reference-books',
            element: <ReferenceBooks/>,
          },
          {
            path:'/solve-doubts',
            element: <SolveDoubts/>,
          },
          {
            path: '/compeditions',
            element: <Compeditions/>,
          },
          {
            path: '/about',
            element:<About/>,
          },
          {
            path: '/aibot',
            element:<Aibot/>,
          },
          {
            path: '/computer-engineering',
            element:<Computer/>,
          },
          {
            path: '/mechanical-engineering',
            element:<Mechanical/>,
          },
          {
            path: '/electrical-engineering',
            element:<Electrical/>,
          },
          {
            path: '/entc-engineering',
            element:<Entc/>,
          },
          {
            path: '/it-engineering',
            element:<It/>,
          },
          {
            path: '/-engineering',
            element:<Aibot/>,
          },
          {
            path: '/firstyear-engineering',
            element:<FirstYear/>,
          },
          {
            path: '/aids-engineering',
            element:<Aids/>,
          },
          {
            path: '/civil-engineering',
            element:<Civil/>,
          },
          {
            path: '/signin',
            element:<SignIn/>,
          },
          {
            path: '/youtube-resources',
            element:<Youtube/>,
          },
          {
            path: '/roadmaps',
            element:<Roadmap/>,
          },
      ],
    },
    
  ]);
  return <RouterProvider router={router}/>;

  
}

export default App
