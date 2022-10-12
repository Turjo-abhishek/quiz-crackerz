
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Home></Home>
        },
        {
          path:'/home',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizid',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
          },
          element: <Quiz></Quiz>
        },

        {
          path:'/statistics',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>

        }




      ]
        
    }  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
