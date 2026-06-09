// import DashboardLayout from "../layouts/DashboardLayout";

// function Products() {

//   return (

//     <DashboardLayout>

//       <h1 className="text-3xl font-bold">

//         Products

//       </h1>

//     </DashboardLayout>

//   );

// }

// export default Products;









// import { useEffect, useState } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// function Products() {

//   const [products, setProducts] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {

//     fetchProducts();

//   }, []);

//   const fetchProducts =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/products"
//           );

//         setProducts(
//           res.data.products
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }

//     };

//   return (

//     <DashboardLayout>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">

//           Products

//         </h1>

//       </div>

//       {loading ? (

//         <p>

//           Loading...

//         </p>

//       ) : (

//         <div className="overflow-x-auto">

//           <table className="w-full border">

//             <thead>

//               <tr className="bg-gray-100">

//                 <th className="p-3 border">

//                   Image

//                 </th>

//                 <th className="p-3 border">

//                   Name

//                 </th>

//                 <th className="p-3 border">

//                   Price

//                 </th>

//                 <th className="p-3 border">

//                   Category

//                 </th>

//                 <th className="p-3 border">

//                   Stock

//                 </th>

//                 <th className="p-3 border">

//                   Actions

//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {products.map(
//                 (product) => (

//                   <tr
//                     key={
//                       product._id
//                     }
//                   >

//                     <td className="p-3 border">

//                       <img
//                         src={
//                           product.image
//                         }
//                         alt={
//                           product.name
//                         }
//                         className="w-16 h-16 object-cover rounded"
//                       />

//                     </td>

//                     <td className="p-3 border">

//                       {product.name}

//                     </td>

//                     <td className="p-3 border">

//                       ₹
//                       {
//                         product.price
//                       }

//                     </td>

//                     <td className="p-3 border">

//                       {
//                         product.category
//                       }

//                     </td>

//                     <td className="p-3 border">

//                       {
//                         product.stock
//                       }

//                     </td>

//                     <td className="p-3 border">

//                       <button
//                         className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
//                       >

//                         Edit

//                       </button>

//                       <button
//                         className="bg-red-500 text-white px-3 py-1 rounded"
//                       >

//                         Delete

//                       </button>

//                     </td>

//                   </tr>

//                 )
//               )}

//             </tbody>

//           </table>

//         </div>

//       )}

//     </DashboardLayout>

//   );

// }

// export default Products;












// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";

// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// function Products() {

//   const [products, setProducts] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {

//     fetchProducts();

//   }, []);

//   const fetchProducts =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/products"
//           );

//         setProducts(
//           res.data.products
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }

//     };

//   return (

//     <DashboardLayout>

//       {/* HEADER CARD */}

//       <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

//         <h1 className="text-3xl font-bold text-slate-800">

//           Products

//         </h1>

//         <p className="text-gray-500 mt-2">

//           Manage all products from your store

//         </p>

//         <div className="mt-4">

//           <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium">

//             Total Products: {products.length}

//           </span>

//         </div>

//       </div>

//       {/* TABLE CARD */}

//       <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

//         {loading ? (

//           <div className="p-8 text-center">

//             Loading Products...

//           </div>

//         ) : (

//           <div className="overflow-x-auto">

//             <table className="w-full">

//               <thead className="bg-slate-100">

//                 <tr>

//                   <th className="px-5 py-4 text-left">

//                     Image

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Name

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Price

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Category

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Stock

//                   </th>

//                   <th className="px-5 py-4 text-center">

//                     Actions

//                   </th>

//                 </tr>

//               </thead>

//               <tbody>

//                 {products.map(
//                   (product) => (

//                     <tr
//                       key={product._id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >

//                       <td className="px-5 py-4">

//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-20 h-20 rounded-xl object-cover shadow"
//                         />

//                       </td>

//                       <td className="px-5 py-4 font-medium">

//                         {product.name}

//                       </td>

//                       <td className="px-5 py-4">

//                         ₹{product.price}

//                       </td>

//                       <td className="px-5 py-4">

//                         <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

//                           {product.category}

//                         </span>

//                       </td>

//                       <td className="px-5 py-4">

//                         <span
//                           className={`px-3 py-1 rounded-full text-sm ${
//                             product.stock > 0
//                               ? "bg-green-100 text-green-700"
//                               : "bg-red-100 text-red-700"
//                           }`}
//                         >

//                           {product.stock}

//                         </span>

//                       </td>

//                       <td className="px-5 py-4">

//                         <div className="flex justify-center gap-3">

//                           <button
//                             className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"
//                           >

//                             <FaEdit />

//                           </button>

//                           <button
//                             className="bg-red-500 hover:bg-red-600 text-white p-8 rounded-lg"
//                           >

//                             <FaTrash />

//                           </button>

//                         </div>

//                       </td>

//                     </tr>

//                   )
//                 )}

//               </tbody>

//             </table>

//           </div>

//         )}

//       </div>

//     </DashboardLayout>

//   );

// }

// export default Products;










// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEdit, FaTrash } from "react-icons/fa";

// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// function Products() {

//   const [products, setProducts] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const navigate =
//     useNavigate();

//   useEffect(() => {

//     fetchProducts();

//   }, []);

//   const fetchProducts =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/products"
//           );

//         setProducts(
//           res.data.products
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }

//     };

//   const handleDelete =
//     async (id) => {

//       const confirmDelete =
//         window.confirm(
//           "Delete this product?"
//         );

//       if (!confirmDelete)
//         return;

//       try {

//         await API.delete(
//           `/products/${id}`,
//           {
//             headers: {
//               Authorization:
//                 `Bearer ${localStorage.getItem(
//                   "adminToken"
//                 )}`,
//             },
//           }
//         );

//         alert(
//           "Product deleted successfully"
//         );

//         fetchProducts();

//       } catch (error) {

//         console.log(error);

//         alert(
//           error?.response?.data
//             ?.message ||
//             "Delete failed"
//         );

//       }

//     };

//   return (

//     <DashboardLayout>

//       <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

//         <h1 className="text-3xl font-bold text-slate-800">

//           Products

//         </h1>

//         <p className="text-gray-500 mt-2">

//           Manage all products from your store

//         </p>

//         <div className="mt-4">

//           <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium">

//             Total Products: {products.length}

//           </span>

//         </div>

//       </div>

//       <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

//         {loading ? (

//           <div className="p-8 text-center">

//             Loading Products...

//           </div>

//         ) : (

//           <div className="overflow-x-auto">

//             <table className="w-full">

//               <thead className="bg-slate-100">

//                 <tr>

//                   <th className="px-5 py-4 text-left">

//                     Image

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Name

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Price

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Category

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Featured

//                   </th>

//                   <th className="px-5 py-4 text-left">

//                     Stock

//                   </th>

//                   <th className="px-5 py-4 text-center">

//                     Actions

//                   </th>

//                 </tr>

//               </thead>

//               <tbody>

//                 {products.map(
//                   (product) => (

//                     <tr
//                       key={product._id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >

//                       <td className="px-5 py-4">

//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-20 h-20 rounded-xl object-cover shadow"
//                         />

//                       </td>

//                       <td className="px-5 py-4 font-medium">

//                         {product.name}

//                       </td>

//                       <td className="px-5 py-4">

//                         ₹{product.price}

//                       </td>

//                       <td className="px-5 py-4">

//                         <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

//                           {product.category}

//                         </span>

//                       </td>

//                       <td className="px-5 py-4">

//                         {product.featured ? (

//                           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

//                             Yes

//                           </span>

//                         ) : (

//                           <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">

//                             No

//                           </span>

//                         )}

//                       </td>

//                       <td className="px-5 py-4">

//                         <span
//                           className={`px-3 py-1 rounded-full text-sm ${
//                             product.stock > 0
//                               ? "bg-green-100 text-green-700"
//                               : "bg-red-100 text-red-700"
//                           }`}
//                         >

//                           {product.stock}

//                         </span>

//                       </td>

//                       <td className="px-5 py-4">

//                         <div className="flex justify-center items-center gap-3">

//                           <button
//                             onClick={() =>
//                               navigate(
//                                 `/products/update/${product._id}`
//                               )
//                             }
//                             className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
//                             title="Edit Product"
//                           >

//                             <FaEdit size={14} />

//                           </button>

//                           <button
//                             onClick={() =>
//                               handleDelete(
//                                 product._id
//                               )
//                             }
//                             className="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full transition"
//                             title="Delete Product"
//                           >

//                             <FaTrash size={14} />

//                           </button>

//                         </div>

//                       </td>

//                     </tr>

//                   )
//                 )}

//               </tbody>

//             </table>

//           </div>

//         )}

//       </div>

//     </DashboardLayout>

//   );

// }

// export default Products;



























// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaEdit,
//   FaTrash,
//   FaSearch,
//   FaBoxOpen,
//   FaStar,
// } from "react-icons/fa";

// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// function Products() {

//   const [products, setProducts] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [search, setSearch] =
//     useState("");

//   const navigate =
//     useNavigate();

//   useEffect(() => {

//     fetchProducts();

//   }, []);

//   const fetchProducts =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/products"
//           );

//         setProducts(
//           res.data.products
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }

//     };

//   const handleDelete =
//     async (id) => {

//       const confirmDelete =
//         window.confirm(
//           "Delete this product?"
//         );

//       if (!confirmDelete)
//         return;

//       try {

//         await API.delete(
//           `/products/${id}`,
//           {
//             headers: {
//               Authorization:
//                 `Bearer ${localStorage.getItem(
//                   "adminToken"
//                 )}`,
//             },
//           }
//         );

//         alert(
//           "Product deleted successfully"
//         );

//         fetchProducts();

//       } catch (error) {

//         console.log(error);

//         alert(
//           error?.response?.data
//             ?.message ||
//             "Delete failed"
//         );

//       }

//     };

//   const filteredProducts =
//     products.filter(
//       (product) =>
//         product.name
//           ?.toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )
//     );

//   const featuredProducts =
//     products.filter(
//       (p) => p.featured
//     ).length;

//   const outOfStock =
//     products.filter(
//       (p) => p.stock <= 0
//     ).length;

//   return (

//     <DashboardLayout>

//       {/* PAGE HEADER */}

//       <div className="mb-8">

//         <h1 className="text-4xl font-bold text-slate-900">

//           Products

//         </h1>

//         <p className="text-gray-500 mt-2 text-lg">

//           Manage your Kashmir store inventory

//         </p>

//       </div>

//       {/* STATS */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

//         <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white shadow-lg">

//           <div className="flex justify-between items-center">

//             <div>

//               <p className="text-orange-100">

//                 Total Products

//               </p>

//               <h2 className="text-4xl font-bold mt-2">

//                 {products.length}

//               </h2>

//             </div>

//             <FaBoxOpen
//               size={40}
//               className="opacity-70"
//             />

//           </div>

//         </div>

//         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

//           <div className="flex justify-between items-center">

//             <div>

//               <p className="text-gray-500">

//                 Featured

//               </p>

//               <h2 className="text-4xl font-bold text-yellow-500 mt-2">

//                 {featuredProducts}

//               </h2>

//             </div>

//             <FaStar
//               size={35}
//               className="text-yellow-400"
//             />

//           </div>

//         </div>

//         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

//           <div className="flex justify-between items-center">

//             <div>

//               <p className="text-gray-500">

//                 Out Of Stock

//               </p>

//               <h2 className="text-4xl font-bold text-red-500 mt-2">

//                 {outOfStock}

//               </h2>

//             </div>

//             <FaTrash
//               size={30}
//               className="text-red-400"
//             />

//           </div>

//         </div>

//       </div>

//       {/* SEARCH */}

//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mb-8">

//         <div className="relative">

//           <FaSearch className="absolute left-4 top-4 text-gray-400" />

//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) =>
//               setSearch(
//                 e.target.value
//               )
//             }
//             className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />

//         </div>

//       </div>

//       {/* PRODUCTS */}

//       {loading ? (

//         <div className="bg-white rounded-3xl p-16 text-center shadow-sm">

//           <p className="text-xl">

//             Loading Products...

//           </p>

//         </div>

//       ) : (

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

//           {filteredProducts.map(
//             (product) => (

//               <div
//                 key={product._id}
//                 className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
//               >

//                 <div className="relative">

//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover"
//                   />

//                   {product.featured && (

//                     <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">

//                       Featured

//                     </div>

//                   )}

//                 </div>

//                 <div className="p-6">

//                   <div className="flex justify-between items-start">

//                     <div>

//                       <h3 className="text-2xl font-bold text-slate-900">

//                         {product.name}

//                       </h3>

//                       <p className="text-gray-500 mt-1">

//                         {product.category}

//                       </p>

//                     </div>

//                   </div>

//                   <div className="mt-6 flex justify-between">

//                     <div>

//                       <p className="text-gray-400 text-sm">

//                         Price

//                       </p>

//                       <h4 className="text-3xl font-bold text-slate-900">

//                         ₹{product.price}

//                       </h4>

//                     </div>

//                     <div>

//                       <p className="text-gray-400 text-sm">

//                         Stock

//                       </p>

//                       <span
//                         className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-semibold ${
//                           product.stock > 0
//                             ? "bg-green-100 text-green-700"
//                             : "bg-red-100 text-red-700"
//                         }`}
//                       >

//                         {product.stock}

//                       </span>

//                     </div>

//                   </div>

//                   <div className="flex gap-3 mt-8">

//                     <button
//                       onClick={() =>
//                         navigate(
//                           `/products/update/${product._id}`
//                         )
//                       }
//                       className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold transition"
//                     >

//                       <FaEdit />

//                       Edit

//                     </button>

//                     <button
//                       onClick={() =>
//                         handleDelete(
//                           product._id
//                         )
//                       }
//                       className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold transition"
//                     >

//                       <FaTrash />

//                       Delete

//                     </button>

//                   </div>

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//       )}

//     </DashboardLayout>

//   );

// }

// export default Products;
















import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch, FaBoxOpen, FaStar } from "react-icons/fa";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const navigate                = useNavigate();

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await API.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      alert("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Delete failed");
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  );
  const featuredProducts = products.filter((p) => p.featured).length;
  const outOfStock       = products.filter((p) => p.stock <= 0).length;

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-10">

        {/* ── PAGE HEADER ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-none">
              Products
            </h1>
            <p className="text-sm text-gray-400 mt-1.5">
              Manage your Kashmir store inventory
            </p>
          </div>
          <button
            onClick={() => navigate("/products/create")}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95
              text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-orange-200 transition-all self-start sm:self-auto"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </button>
        </div>

        {/* ── STATS ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Total — orange gradient */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-md shadow-orange-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-orange-100 text-xs font-semibold uppercase tracking-widest">
                  Total Products
                </p>
                <p className="text-4xl font-extrabold mt-2 leading-none">
                  {products.length}
                </p>
              </div>
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                <FaBoxOpen size={22} className="text-white" />
              </div>
            </div>
          </div>

          {/* Featured */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  Featured
                </p>
                <p className="text-4xl font-extrabold mt-2 text-yellow-500 leading-none">
                  {featuredProducts}
                </p>
              </div>
              <div className="w-11 h-11 bg-yellow-50 rounded-xl flex items-center justify-center">
                <FaStar size={20} className="text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Out of stock */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  Out of Stock
                </p>
                <p className="text-4xl font-extrabold mt-2 text-red-500 leading-none">
                  {outOfStock}
                </p>
              </div>
              <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center">
                <FaTrash size={18} className="text-red-400" />
              </div>
            </div>
          </div>

        </div>

        {/* ── SEARCH ──────────────────────────────────── */}
        <div className="relative max-w-lg">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-5 py-3 text-sm
              text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400
              focus:border-transparent shadow-sm transition"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
            >
              ×
            </button>
          )}
        </div>

        {/* ── PRODUCTS GRID ───────────────────────────── */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-9 h-9 border-[3px] border-orange-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-400">Loading products…</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-5xl mb-4">📦</p>
            <p className="text-sm font-medium">No products found</p>
            {search && <p className="text-xs mt-1">Try a different search term</p>}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden bg-gray-50 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.featured && (
                    <span className="absolute top-3 right-3 bg-orange-500 text-white
                      text-[10px] font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">
                      ⭐ Featured
                    </span>
                  )}
                  {product.stock <= 0 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-4">

                  {/* Name + category */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <span className="inline-block mt-1.5 text-xs font-medium text-orange-600
                      bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                      {product.category}
                    </span>
                  </div>

                  {/* Price + Stock */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                        Price
                      </p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-none">
                        ₹{Number(product.price).toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                        Stock
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        product.stock > 10
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                          : product.stock > 0
                            ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                            : "bg-red-50 text-red-700 ring-1 ring-red-200"
                      }`}>
                        {product.stock > 0 ? `${product.stock} units` : "Out of stock"}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100" />

                  {/* Actions */}
                  <div className="flex gap-2.5 mt-auto">
                    <button
                      onClick={() => navigate(`/products/update/${product._id}`)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100
                        text-blue-700 text-sm font-semibold py-2.5 rounded-xl transition-all
                        border border-blue-100 hover:border-blue-200 active:scale-95"
                    >
                      <FaEdit size={13} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100
                        text-red-600 text-sm font-semibold py-2.5 rounded-xl transition-all
                        border border-red-100 hover:border-red-200 active:scale-95"
                    >
                      <FaTrash size={13} />
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Products;