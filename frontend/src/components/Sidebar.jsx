// import {
//   Link,
// } from "react-router-dom";

// function Sidebar() {

//   return (

//     <div className="w-64 min-h-screen bg-black text-white p-5">

//       <h2 className="text-2xl font-bold mb-8">

//         Admin

//       </h2>

//       <div className="flex flex-col gap-4">

//   <Link to="/dashboard">

//     Dashboard

//   </Link>

//   <Link to="/products">

//     Products

//   </Link>

//   <Link to="/orders">

//     Orders

//   </Link>

//   <Link to="/products/create">

//     Add Product

//   </Link>

//   {/* <Link to="/products/update">

//     Update Product

//   </Link> */}

// </div>

//     </div>

//   );

// }

// export default Sidebar;









import { Link, useLocation } from "react-router-dom";
import {
  FaBox,
  FaShoppingCart,
  FaPlus,
  FaChartBar,
} from "react-icons/fa";

function Sidebar() {

  const location =
    useLocation();

  const menu = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartBar />,
    },

    {
      name: "Products",
      path: "/products",
      icon: <FaBox />,
    },

    {
      name: "Orders",
      path: "/orders",
      icon: <FaShoppingCart />,
    },

    {
      name: "Add Product",
      path: "/products/create",
      icon: <FaPlus />,
    },

  ];

  return (

    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold">

          Spirit Admin

        </h1>

        <p className="text-slate-400 text-sm mt-1">

          Management Panel

        </p>

      </div>

      <div className="flex flex-col p-4 gap-2">

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
            ${
              location.pathname === item.path
                ? "bg-orange-500 text-white"
                : "hover:bg-slate-800"
            }`}
          >

            {item.icon}

            {item.name}

          </Link>

        ))}

      </div>

    </div>

  );

}

export default Sidebar;