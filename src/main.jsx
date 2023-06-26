import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import RouterPage from './Components/RouterPage.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from './Components/users/Navbar.jsx';



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
    <Navbar/>
    <RouterPage/>
  </React.StrictMode>,
)
