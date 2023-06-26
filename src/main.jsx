import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import RouterPage from './Components/RouterPage.jsx';

// const router = createBrowserRouter([
//   {

//     element: <NavBar />,
//      children: [
//       {
//         path: "/",
//         element: <Login />,
//       },
//     ],
//   },
  
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterPage/>
  </React.StrictMode>,
)
