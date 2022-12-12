import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import PortfolioDetails from './components/Portfolio/PortfolioDetails';
import Blog from './components/Blog/Blog';
import AboutMe from './components/Home/Aboutme/AboutMe';



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
          path: '/portfoliodetails/:id',
          element: <PortfolioDetails></PortfolioDetails>,
          loader: ({ params }) => fetch(`https://portfolio-website-server-azizulhakims.vercel.app/portfolio/${params.id}`)
        },
        {
          path: '/service',
          element: <Service></Service>
        },

        {
          path: '/contact',
          element: <Contact></Contact>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/about-me',
          element: <AboutMe></AboutMe>
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
