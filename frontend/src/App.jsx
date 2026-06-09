// import {
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/Login";

// function App() {

//   return (

//     <Routes>

//       <Route
//         path="/"
//         element={<Login />}
//       />

//       <Route
//         path="*"
//         element={
//           <Navigate to="/" />
//         }
//       />

//     </Routes>

//   );

// }

// export default App;












// import {
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {

//   const token =
//     localStorage.getItem(
//       "adminToken"
//     );

//   return (

//     <Routes>

//       <Route
//         path="/"
//         element={
//           token
//             ? <Navigate to="/dashboard" />
//             : <Login />
//         }
//       />

//       <Route
//         path="/dashboard"
//         element={
//           token
//             ? <Dashboard />
//             : <Navigate to="/" />
//         }
//       />

//       <Route
//         path="*"
//         element={
//           <Navigate to="/" />
//         }
//       />

//     </Routes>

//   );

// }

// export default App;
















// import {
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Products from "./pages/Products";
// import Orders from "./pages/Orders";
// import CreateProduct from "./pages/CreateProduct";
// import UpdateProduct from "./pages/UpdateProduct";

// function App() {

//   const token =
//     localStorage.getItem(
//       "adminToken"
//     );

//   return (

//     <Routes>

//       <Route
//         path="/"
//         element={
//           token
//             ? <Navigate to="/dashboard" />
//             : <Login />
//         }
//       />

//       <Route
//         path="/dashboard"
//         element={
//           token
//             ? <Dashboard />
//             : <Navigate to="/" />
//         }
//       />

//       <Route
//         path="/products"
//         element={
//           token
//             ? <Products />
//             : <Navigate to="/" />
//         }
//       />

//       <Route
//         path="/orders"
//         element={
//           token
//             ? <Orders />
//             : <Navigate to="/" />
//         }
//       />

//       <Route
//         path="/products/create"
//         element={
//           token
//             ? <CreateProduct />
//             : <Navigate to="/" />
//         }
//       />


// <Route
//   path="/products/update"
//   element={
//     token
//       ? <UpdateProduct />
//       : <Navigate to="/" />
//   }
// />


//       <Route
//         path="*"
//         element={
//           <Navigate to="/" />
//         }
//       />

//     </Routes>

//   );

// }

// export default App;









import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {

  const token =
    localStorage.getItem(
      "adminToken"
    );

  return (

    <Routes>

      <Route
        path="/"
        element={
          token
            ? <Navigate to="/dashboard" />
            : <Login />
        }
      />

      <Route
        path="/dashboard"
        element={
          token
            ? <Dashboard />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/products"
        element={
          token
            ? <Products />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/products/create"
        element={
          token
            ? <CreateProduct />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/products/update/:id"
        element={
          token
            ? <UpdateProduct />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/orders"
        element={
          token
            ? <Orders />
            : <Navigate to="/" />
        }
      />

      <Route
        path="*"
        element={
          <Navigate to="/" />
        }
      />

    </Routes>

  );

}

export default App;