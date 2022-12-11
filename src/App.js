import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/portfolio',
          element: <Portfolio></Portfolio>,
        },
        {
          path: '/service',
          element: <Service></Service>
        },

      ]
    }

  ])
  return (
    <div data-theme="cupcake" className='max-w-screen-xl mx-auto rounded'>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
