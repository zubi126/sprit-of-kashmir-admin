// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// function Orders() {

//   // const [orders, setOrders] =
//   //   useState([]);

//   // const [loading, setLoading] =
//   //   useState(true);


// const [orders, setOrders] =
//   useState([]);

// const [loading, setLoading] =
//   useState(true);

// const [search, setSearch] =
//   useState("");

// const [selectedOrder, setSelectedOrder] =
//   useState(null);

// const [currentPage, setCurrentPage] =
//   useState(1);

// const ordersPerPage = 10;





//   useEffect(() => {

//     fetchOrders();

//   }, []);

//   const fetchOrders =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/orders/all",
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${localStorage.getItem(
//                     "adminToken"
//                   )}`,
//               },
//             }
//           );

//         setOrders(
//           res.data.orders
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }

//     };

//   const updateStatus =
//     async (
//       orderId,
//       status
//     ) => {

//       try {

//         await API.put(

//           `/orders/status/${orderId}`,

//           {
//             status,
//           },

//           {
//             headers: {
//               Authorization:
//                 `Bearer ${localStorage.getItem(
//                   "adminToken"
//                 )}`,
//             },
//           }
//         );

//         fetchOrders();

//       } catch (error) {

//         console.log(error);

//         alert(
//           "Failed to update order"
//         );

//       }

//     };

//   const totalRevenue =
//     orders.reduce(
//       (
//         total,
//         order
//       ) =>
//         total +
//         Number(
//           order.totalPrice
//         ),
//       0
//     );

//   const pendingOrders =
//     orders.filter(
//       (order) =>
//         order.orderStatus ===
//         "Pending"
//     ).length;







// const filteredOrders =
//   orders.filter((order) => {

//     const searchTerm =
//       search.toLowerCase();

//     return (

//       order.shippingAddress?.fullName
//         ?.toLowerCase()
//         .includes(searchTerm)

//       ||

//       order.shippingAddress?.email
//         ?.toLowerCase()
//         .includes(searchTerm)

//       ||

//       order.shippingAddress?.phone
//         ?.includes(search)

//       ||

//       order._id
//         .toLowerCase()
//         .includes(searchTerm)

//     );

//   });

// const totalPages =
//   Math.ceil(
//     filteredOrders.length /
//     ordersPerPage
//   );

// const indexOfLast =
//   currentPage *
//   ordersPerPage;

// const indexOfFirst =
//   indexOfLast -
//   ordersPerPage;

// const currentOrders =
//   filteredOrders.slice(
//     indexOfFirst,
//     indexOfLast
//   );




//   return (



// <>














    
//     <DashboardLayout>

//       <div className="space-y-6">

//         {/* PAGE HEADER */}

//         <div>

//           <h1 className="text-3xl font-bold text-slate-800">

//             Orders Management

//           </h1>

//           <p className="text-gray-500 mt-2">

//             Manage customer orders and delivery status

//           </p>

//         </div>

//         {/* STATS */}

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

//             <p className="text-gray-500 text-sm">

//               Total Orders

//             </p>

//             <h2 className="text-4xl font-bold text-slate-800 mt-2">

//               {orders.length}

//             </h2>

//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

//             <p className="text-gray-500 text-sm">

//               Total Revenue

//             </p>

//             <h2 className="text-4xl font-bold text-green-600 mt-2">

//               ₹{totalRevenue}

//             </h2>

//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

//             <p className="text-gray-500 text-sm">

//               Pending Orders

//             </p>

//             <h2 className="text-4xl font-bold text-orange-500 mt-2">

//               {pendingOrders}

//             </h2>

//           </div>

//         </div>


// <div className="bg-white rounded-2xl p-5 shadow-sm border">

//   <input
//     type="text"
//     placeholder="Search by name, email, phone or order ID..."
//     value={search}
//     onChange={(e) =>
//       setSearch(
//         e.target.value
//       )
//     }
//     className="w-full border border-gray-300 rounded-xl p-3"
//   />

// </div>






//         {/* TABLE */}

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

//           {loading ? (

//             <div className="p-10 text-center">

//               <div className="text-lg font-medium">

//                 Loading Orders...

//               </div>

//             </div>

//           ) : (

//             <div className="overflow-x-auto">

//               <table className="w-full">

//                 <thead className="bg-slate-50 border-b">

//                   <tr>

//   <th className="px-6 py-4">

//     Customer

//   </th>

//   <th className="px-6 py-4">

//     Phone

//   </th>

//   <th className="px-6 py-4">

//     Amount

//   </th>

//   <th className="px-6 py-4">

//     Payment

//   </th>

//   <th className="px-6 py-4">

//     Status

//   </th>

//   <th className="px-6 py-4">

//     Date

//   </th>

//   <th className="px-6 py-4">

//     Details

//   </th>

// </tr>
//                 </thead>

//                 <tbody>

//                   {currentOrders.map(
//                     (order) => (

//                       <tr
//                         key={order._id}
//                         className="border-b hover:bg-orange-50 transition"
//                       >

//                         <td className="px-6 py-4">

//   <div>

//     <p className="font-semibold">

//       {
//         order.shippingAddress
//           ?.fullName
//       }

//     </p>

//     <p className="text-xs text-gray-500">

//       {
//         order.shippingAddress
//           ?.email
//       }

//     </p>

//   </div>

// </td>





// <td className="px-6 py-4">

//   <a
//     href={`tel:${order.shippingAddress?.phone}`}
//     className="text-blue-600 hover:underline"
//   >

//     {
//       order.shippingAddress
//         ?.phone
//     }

//   </a>

// </td>













//                         <td className="px-6 py-4 font-semibold text-slate-800">

//                           ₹{order.totalPrice}

//                         </td>

//                         <td className="px-6 py-4">

//                           <span
//                             className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                               order.paymentStatus ===
//                               "paid"
//                                 ? "bg-green-100 text-green-700"
//                                 : "bg-yellow-100 text-yellow-700"
//                             }`}
//                           >

//                             {order.paymentStatus}

//                           </span>

//                         </td>

//                         <td className="px-6 py-4">

//                           <select
//                             value={
//                               order.orderStatus ||
//                               "Pending"
//                             }
//                             onChange={(e) =>
//                               updateStatus(
//                                 order._id,
//                                 e.target.value
//                               )
//                             }
//                             className="border border-gray-300 rounded-xl px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//                           >

//                             <option value="Pending">

//                               Pending

//                             </option>

//                             <option value="Processing">

//                               Processing

//                             </option>

//                             <option value="Shipped">

//                               Shipped

//                             </option>

//                             <option value="Delivered">

//                               Delivered

//                             </option>

//                             <option value="Cancelled">

//                               Cancelled

//                             </option>

//                           </select>

//                         </td>

//                         <td className="px-6 py-4 text-gray-600 text-sm">

//                           {new Date(
//                             order.createdAt
//                           ).toLocaleString()}

//                         </td>






// <td className="px-6 py-4">

//   <button
//     onClick={() =>
//       setSelectedOrder(
//         order
//       )
//     }
//     className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
//   >

//     View

//   </button>

// </td>



//                       </tr>

//                     )
//                   )}

//                 </tbody>

//               </table>





// <div className="flex items-center justify-center gap-4 py-6">

//   <button
//     disabled={
//       currentPage === 1
//     }
//     onClick={() =>
//       setCurrentPage(
//         currentPage - 1
//       )
//     }
//     className="px-4 py-2 border rounded-lg"
//   >

//     Previous

//   </button>

//   <span>

//     Page {currentPage}
//     {" "}
//     of
//     {" "}
//     {totalPages || 1}

//   </span>

//   <button
//     disabled={
//       currentPage ===
//       totalPages
//     }
//     onClick={() =>
//       setCurrentPage(
//         currentPage + 1
//       )
//     }
//     className="px-4 py-2 border rounded-lg"
//   >

//     Next

//   </button>

// </div>










//             </div>

//           )}

//         </div>

//       </div>

//     </DashboardLayout>






// {selectedOrder && (

//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

//     <div className="bg-white rounded-2xl w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">

//       <div className="flex justify-between items-center mb-6">

//         <h2 className="text-2xl font-bold">

//           Order Details

//         </h2>

//         <button
//           onClick={() =>
//             setSelectedOrder(
//               null
//             )
//           }
//           className="text-xl"
//         >

//           ✕

//         </button>

//       </div>

//       <div className="space-y-3">

//         <p>
//           <strong>Name:</strong>
//           {" "}
//           {
//             selectedOrder.shippingAddress?.fullName
//           }
//         </p>

//         <p>
//           <strong>Email:</strong>
//           {" "}
//           {
//             selectedOrder.shippingAddress?.email
//           }
//         </p>

//         <p>
//           <strong>Phone:</strong>
//           {" "}
//           {
//             selectedOrder.shippingAddress?.phone
//           }
//         </p>

//         <p>
//           <strong>Address:</strong>
//           {" "}
//           {
//             selectedOrder.shippingAddress?.address
//           },
//           {" "}
//           {
//             selectedOrder.shippingAddress?.city
//           },
//           {" "}
//           {
//             selectedOrder.shippingAddress?.state
//           }
//           {" "}
//           -
//           {" "}
//           {
//             selectedOrder.shippingAddress?.pincode
//           }
//         </p>

//         <hr />

//         <h3 className="font-bold text-lg">

//           Products Ordered

//         </h3>

//         {selectedOrder.orderItems?.map(
//           (item, index) => (

//             <div
//               key={index}
//               className="flex justify-between border-b py-2"
//             >

//               <span>

//                 {item.name}

//               </span>

//               <span>

//                 Qty:
//                 {" "}
//                 {item.quantity}

//               </span>

//             </div>

//           )
//         )}

//         <div className="pt-4">

//           <strong>

//             Total:
//             {" "}
//             ₹
//             {
//               selectedOrder.totalPrice
//             }

//           </strong>

//         </div>

//       </div>

//     </div>

//   </div>

// )}







// </>


//   );


  

// }

// export default Orders;



























// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// const STATUS_CONFIG = {
//   Pending:    { color: "bg-amber-100 text-amber-700 border-amber-200" },
//   Processing: { color: "bg-blue-100 text-blue-700 border-blue-200" },
//   Shipped:    { color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
//   Delivered:  { color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
//   Cancelled:  { color: "bg-red-100 text-red-700 border-red-200" },
// };

// function StatusBadge({ status }) {
//   const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.Pending;
//   return (
//     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cfg.color}`}>
//       {status}
//     </span>
//   );
// }

// export default function Orders() {
//   const [orders, setOrders]           = useState([]);
//   const [loading, setLoading]         = useState(true);
//   const [search, setSearch]           = useState("");
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   const ordersPerPage = 10;

//   useEffect(() => { fetchOrders(); }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await API.get("/orders/all", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
//       });
//       setOrders(res.data.orders);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (orderId, status) => {
//     try {
//       await API.put(
//         `/orders/status/${orderId}`,
//         { status },
//         { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } }
//       );
//       fetchOrders();
//     } catch (error) {
//       console.log(error);
//       alert("Failed to update order");
//     }
//   };

//   const totalRevenue  = orders.reduce((t, o) => t + Number(o.totalPrice), 0);
//   const pendingOrders = orders.filter((o) => o.orderStatus === "Pending").length;
//   const deliveredOrders = orders.filter((o) => o.orderStatus === "Delivered").length;

//   const filteredOrders = orders.filter((order) => {
//     const s = search.toLowerCase();
//     return (
//       order.shippingAddress?.fullName?.toLowerCase().includes(s) ||
//       order.shippingAddress?.email?.toLowerCase().includes(s) ||
//       order.shippingAddress?.phone?.includes(search) ||
//       order._id.toLowerCase().includes(s)
//     );
//   });

//   const totalPages    = Math.ceil(filteredOrders.length / ordersPerPage);
//   const indexOfLast   = currentPage * ordersPerPage;
//   const indexOfFirst  = indexOfLast - ordersPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

//   return (
//     <>
//       <DashboardLayout>
//         <div className="min-h-screen bg-gray-50 p-6 space-y-6">

//           {/* PAGE HEADER */}
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Orders</h1>
//               <p className="text-sm text-gray-500 mt-0.5">Manage customer orders and delivery status</p>
//             </div>
//             <div className="text-xs text-gray-400 bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-mono">
//               {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
//             </div>
//           </div>

//           {/* STATS */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <StatCard label="Total Orders"  value={orders.length}           color="text-gray-900" />
//             <StatCard label="Total Revenue" value={`₹${totalRevenue.toLocaleString("en-IN")}`} color="text-emerald-600" />
//             <StatCard label="Pending"       value={pendingOrders}           color="text-amber-600" />
//             <StatCard label="Delivered"     value={deliveredOrders}         color="text-indigo-600" />
//           </div>

//           {/* SEARCH */}
//           <div className="relative">
//             <svg
//               className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
//               fill="none" stroke="currentColor" viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                 d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search by name, email, phone or order ID…"
//               value={search}
//               onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
//               className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm"
//             />
//           </div>

//           {/* TABLE CARD */}
//           <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-20 gap-3">
//                 <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
//                 <p className="text-sm text-gray-500">Loading orders…</p>
//               </div>
//             ) : filteredOrders.length === 0 ? (
//               <div className="text-center py-20 text-gray-400">
//                 <p className="text-4xl mb-3">📭</p>
//                 <p className="text-sm">No orders found</p>
//               </div>
//             ) : (
//               <>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                         <th className="px-5 py-3.5">Customer</th>
//                         <th className="px-5 py-3.5">Phone</th>
//                         <th className="px-5 py-3.5">Amount</th>
//                         <th className="px-5 py-3.5">Payment</th>
//                         <th className="px-5 py-3.5">Status</th>
//                         <th className="px-5 py-3.5">Date</th>
//                         <th className="px-5 py-3.5 text-center">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-50">
//                       {currentOrders.map((order) => (
//                         <tr key={order._id} className="hover:bg-orange-50/50 transition-colors group">

//                           {/* Customer */}
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900 leading-tight">
//                               {order.shippingAddress?.fullName}
//                             </p>
//                             <p className="text-xs text-gray-400 mt-0.5 truncate max-w-[180px]">
//                               {order.shippingAddress?.email}
//                             </p>
//                           </td>

//                           {/* Phone */}
//                           <td className="px-5 py-4">
//                             <a
//                               href={`tel:${order.shippingAddress?.phone}`}
//                               className="text-orange-500 hover:text-orange-600 font-medium hover:underline"
//                             >
//                               {order.shippingAddress?.phone}
//                             </a>
//                           </td>

//                           {/* Amount */}
//                           <td className="px-5 py-4 font-bold text-gray-900">
//                             ₹{Number(order.totalPrice).toLocaleString("en-IN")}
//                           </td>

//                           {/* Payment */}
//                           <td className="px-5 py-4">
//                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
//                               order.paymentStatus === "paid"
//                                 ? "bg-emerald-50 text-emerald-700 border-emerald-200"
//                                 : "bg-yellow-50 text-yellow-700 border-yellow-200"
//                             }`}>
//                               {order.paymentStatus === "paid" ? "✓ Paid" : "⏳ Unpaid"}
//                             </span>
//                           </td>

//                           {/* Status select */}
//                           <td className="px-5 py-4">
//                             <select
//                               value={order.orderStatus || "Pending"}
//                               onChange={(e) => updateStatus(order._id, e.target.value)}
//                               className="border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer hover:border-orange-300 transition-colors"
//                             >
//                               {["Pending","Processing","Shipped","Delivered","Cancelled"].map((s) => (
//                                 <option key={s} value={s}>{s}</option>
//                               ))}
//                             </select>
//                           </td>

//                           {/* Date */}
//                           <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">
//                             {new Date(order.createdAt).toLocaleString("en-IN", {
//                               day: "2-digit", month: "short", year: "numeric",
//                               hour: "2-digit", minute: "2-digit",
//                             })}
//                           </td>

//                           {/* View button */}
//                           <td className="px-5 py-4 text-center">
//                             <button
//                               onClick={() => setSelectedOrder(order)}
//                               className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* PAGINATION */}
//                 <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-gray-50">
//                   <p className="text-xs text-gray-500">
//                     Showing <span className="font-semibold text-gray-700">{indexOfFirst + 1}–{Math.min(indexOfLast, filteredOrders.length)}</span> of{" "}
//                     <span className="font-semibold text-gray-700">{filteredOrders.length}</span> orders
//                   </p>
//                   <div className="flex items-center gap-2">
//                     <button
//                       disabled={currentPage === 1}
//                       onClick={() => setCurrentPage((p) => p - 1)}
//                       className="px-3.5 py-1.5 text-xs font-medium border border-gray-200 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
//                     >
//                       ← Previous
//                     </button>
//                     <span className="text-xs text-gray-600 font-medium px-2">
//                       {currentPage} / {totalPages || 1}
//                     </span>
//                     <button
//                       disabled={currentPage === totalPages || totalPages === 0}
//                       onClick={() => setCurrentPage((p) => p + 1)}
//                       className="px-3.5 py-1.5 text-xs font-medium border border-gray-200 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
//                     >
//                       Next →
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </DashboardLayout>

//       {/* ORDER DETAIL MODAL */}
//       {selectedOrder && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//           onClick={(e) => { if (e.target === e.currentTarget) setSelectedOrder(null); }}
//         >
//           <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

//             {/* Modal header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-100">
//               <div>
//                 <h2 className="text-lg font-bold text-gray-900">Order Details</h2>
//                 <p className="text-xs text-gray-400 font-mono mt-0.5">#{selectedOrder._id}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedOrder(null)}
//                 className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors text-sm font-bold"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="p-6 space-y-6">

//               {/* Customer info */}
//               <section>
//                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Customer Info</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <InfoRow label="Name"  value={selectedOrder.shippingAddress?.fullName} />
//                   <InfoRow label="Email" value={selectedOrder.shippingAddress?.email} />
//                   <InfoRow label="Phone" value={selectedOrder.shippingAddress?.phone} />
//                   <InfoRow label="Pincode" value={selectedOrder.shippingAddress?.pincode} />
//                 </div>
//                 <div className="mt-3">
//                   <InfoRow
//                     label="Address"
//                     value={[
//                       selectedOrder.shippingAddress?.address,
//                       selectedOrder.shippingAddress?.city,
//                       selectedOrder.shippingAddress?.state,
//                     ].filter(Boolean).join(", ")}
//                   />
//                 </div>
//               </section>

//               <hr className="border-gray-100" />

//               {/* Products */}
//               <section>
//                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Products Ordered</p>
//                 <div className="space-y-2">
//                   {selectedOrder.orderItems?.map((item, index) => (
//                     <div key={index} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
//                       <span className="text-sm font-medium text-gray-800">{item.name}</span>
//                       <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2.5 py-0.5 rounded-full">
//                         Qty: {item.quantity}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Total */}
//               <div className="flex items-center justify-between bg-gray-900 text-white rounded-xl px-5 py-4">
//                 <span className="text-sm font-medium opacity-70">Order Total</span>
//                 <span className="text-xl font-bold">₹{Number(selectedOrder.totalPrice).toLocaleString("en-IN")}</span>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // ── Small helpers ────────────────────────────────────────────────────────────

// function StatCard({ label, value, color }) {
//   return (
//     <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 shadow-sm">
//       <p className="text-xs text-gray-500 font-medium">{label}</p>
//       <p className={`text-2xl font-extrabold mt-1 ${color}`}>{value}</p>
//     </div>
//   );
// }

// function InfoRow({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400 mb-0.5">{label}</p>
//       <p className="text-sm font-medium text-gray-800">{value || "—"}</p>
//     </div>
//   );
// }












import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/axios";

/* ─── Status config ──────────────────────────────────────────────────────── */
const STATUS_CONFIG = {
  Pending:    { pill: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",   dot: "bg-amber-400"   },
  Processing: { pill: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",     dot: "bg-blue-400"    },
  Shipped:    { pill: "bg-violet-50 text-violet-700 ring-1 ring-violet-200", dot: "bg-violet-400" },
  Delivered:  { pill: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200", dot: "bg-emerald-400" },
  Cancelled:  { pill: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",      dot: "bg-rose-400"   },
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function StatCard({ label, value, color, icon }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 shadow-sm flex items-start gap-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${color.bg}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
        <p className={`text-2xl font-extrabold mt-0.5 ${color.text}`}>{value}</p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800">{value || "—"}</p>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function Orders() {
  const [orders, setOrders]               = useState([]);
  const [loading, setLoading]             = useState(true);
  const [search, setSearch]               = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage]     = useState(1);

  const ordersPerPage = 10;

  useEffect(() => { fetchOrders(); }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, status) => {
    try {
      await API.put(
        `/orders/status/${orderId}`,
        { status },
        { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } }
      );
      fetchOrders();
    } catch (err) {
      console.log(err);
      alert("Failed to update order");
    }
  };

  const totalRevenue    = orders.reduce((t, o) => t + Number(o.totalPrice), 0);
  const pendingOrders   = orders.filter((o) => o.orderStatus === "Pending").length;
  const deliveredOrders = orders.filter((o) => o.orderStatus === "Delivered").length;

  const filteredOrders = orders.filter((order) => {
    const s = search.toLowerCase();
    return (
      order.shippingAddress?.fullName?.toLowerCase().includes(s) ||
      order.shippingAddress?.email?.toLowerCase().includes(s) ||
      order.shippingAddress?.phone?.includes(search) ||
      order._id.toLowerCase().includes(s)
    );
  });

  const totalPages    = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLast   = currentPage * ordersPerPage;
  const indexOfFirst  = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <DashboardLayout>
        <div className="space-y-8 pb-10">

          {/* ── PAGE HEADER ───────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-none">
                Orders
              </h1>
              <p className="text-sm text-gray-400 mt-1.5">
                Manage customer orders and delivery status
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm self-start sm:self-auto">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </div>
          </div>

          {/* ── STATS ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              label="Total Orders"
              value={orders.length}
              icon="📦"
              color={{ bg: "bg-gray-100", text: "text-gray-900" }}
            />
            <StatCard
              label="Total Revenue"
              value={`₹${totalRevenue.toLocaleString("en-IN")}`}
              icon="💰"
              color={{ bg: "bg-emerald-50", text: "text-emerald-600" }}
            />
            <StatCard
              label="Pending"
              value={pendingOrders}
              icon="⏳"
              color={{ bg: "bg-amber-50", text: "text-amber-600" }}
            />
            <StatCard
              label="Delivered"
              value={deliveredOrders}
              icon="✅"
              color={{ bg: "bg-violet-50", text: "text-violet-600" }}
            />
          </div>

          {/* ── SEARCH ────────────────────────────────────────── */}
          <div className="relative max-w-lg">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, phone or order ID…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-5 py-3 text-sm text-gray-700 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm transition"
            />
            {search && (
              <button
                onClick={() => { setSearch(""); setCurrentPage(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* ── TABLE CARD ────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <div className="w-9 h-9 border-[3px] border-orange-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-gray-400">Loading orders…</p>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <p className="text-5xl mb-4">📭</p>
                <p className="text-sm font-medium">No orders found</p>
                {search && (
                  <p className="text-xs mt-1 text-gray-400">
                    Try a different search term
                  </p>
                )}
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">

                    {/* Table head */}
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        {["Customer", "Phone", "Amount", "Payment", "Status", "Date", ""].map((h) => (
                          <th
                            key={h}
                            className="px-6 py-4 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                      {currentOrders.map((order, i) => {
                        const sc = STATUS_CONFIG[order.orderStatus] || STATUS_CONFIG.Pending;
                        return (
                          <tr
                            key={order._id}
                            className={`border-b border-gray-50 hover:bg-orange-50/40 transition-colors ${
                              i % 2 === 0 ? "" : "bg-gray-50/30"
                            }`}
                          >
                            {/* Customer */}
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center shrink-0">
                                  {order.shippingAddress?.fullName?.charAt(0)?.toUpperCase() || "?"}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-gray-900 leading-tight truncate max-w-[140px]">
                                    {order.shippingAddress?.fullName}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-0.5 truncate max-w-[140px]">
                                    {order.shippingAddress?.email}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Phone */}
                            <td className="px-6 py-4">
                              <a
                                href={`tel:${order.shippingAddress?.phone}`}
                                className="text-orange-500 hover:text-orange-600 font-medium text-sm hover:underline underline-offset-2"
                              >
                                {order.shippingAddress?.phone}
                              </a>
                            </td>

                            {/* Amount */}
                            <td className="px-6 py-4">
                              <span className="font-bold text-gray-900">
                                ₹{Number(order.totalPrice).toLocaleString("en-IN")}
                              </span>
                            </td>

                            {/* Payment */}
                            <td className="px-6 py-4">
                              {order.paymentStatus === "paid" ? (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  Paid
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                  Unpaid
                                </span>
                              )}
                            </td>

                            {/* Status select */}
                            <td className="px-6 py-4">
                              <div className="relative inline-block">
                                <span className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${sc.dot}`} />
                                <select
                                  value={order.orderStatus || "Pending"}
                                  onChange={(e) => updateStatus(order._id, e.target.value)}
                                  className="pl-7 pr-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg bg-white
                                             text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer
                                             hover:border-orange-300 transition-colors appearance-none"
                                >
                                  {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                  ))}
                                </select>
                              </div>
                            </td>

                            {/* Date */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p className="text-sm text-gray-700">
                                {new Date(order.createdAt).toLocaleDateString("en-IN", {
                                  day: "2-digit", month: "short", year: "numeric",
                                })}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {new Date(order.createdAt).toLocaleTimeString("en-IN", {
                                  hour: "2-digit", minute: "2-digit",
                                })}
                              </p>
                            </td>

                            {/* View */}
                            <td className="px-6 py-4">
                              <button
                                onClick={() => setSelectedOrder(order)}
                                className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:scale-95
                                           text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm shadow-orange-200"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* ── PAGINATION ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/60">
                  <p className="text-xs text-gray-500">
                    Showing{" "}
                    <span className="font-semibold text-gray-700">{indexOfFirst + 1}–{Math.min(indexOfLast, filteredOrders.length)}</span>
                    {" "}of{" "}
                    <span className="font-semibold text-gray-700">{filteredOrders.length}</span> orders
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border border-gray-200 rounded-xl bg-white
                                 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>

                    {/* Page pills */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((p) => (
                        <button
                          key={p}
                          onClick={() => setCurrentPage(p)}
                          className={`w-8 h-8 text-xs font-semibold rounded-lg transition-all ${
                            p === currentPage
                              ? "bg-orange-500 text-white shadow-sm shadow-orange-200"
                              : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    <button
                      disabled={currentPage === totalPages || totalPages === 0}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border border-gray-200 rounded-xl bg-white
                                 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Next
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>
      </DashboardLayout>

      {/* ── ORDER DETAIL MODAL ─────────────────────────────────── */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedOrder(null); }}
        >
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

            {/* Modal header */}
            <div className="flex items-start justify-between p-7 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 font-extrabold text-base flex items-center justify-center">
                  {selectedOrder.shippingAddress?.fullName?.charAt(0)?.toUpperCase() || "?"}
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-none">
                    {selectedOrder.shippingAddress?.fullName}
                  </h2>
                  <p className="text-[11px] text-gray-400 font-mono mt-1 truncate max-w-[240px]">
                    #{selectedOrder._id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200
                           text-gray-500 transition-colors text-sm font-bold shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="p-7 space-y-7">

              {/* Customer info */}
              <section>
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-4">
                  Customer Info
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <InfoRow label="Full Name"  value={selectedOrder.shippingAddress?.fullName} />
                  <InfoRow label="Email"      value={selectedOrder.shippingAddress?.email} />
                  <InfoRow label="Phone"      value={selectedOrder.shippingAddress?.phone} />
                  <InfoRow label="Pincode"    value={selectedOrder.shippingAddress?.pincode} />
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Delivery Address</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {[
                      selectedOrder.shippingAddress?.address,
                      selectedOrder.shippingAddress?.city,
                      selectedOrder.shippingAddress?.state,
                    ].filter(Boolean).join(", ")}
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-100" />

              {/* Products */}
              <section>
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-4">
                  Products Ordered
                </p>
                <div className="space-y-2">
                  {selectedOrder.orderItems?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 hover:bg-orange-50/50 transition rounded-xl px-4 py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-500 text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{item.name}</span>
                      </div>
                      <span className="text-xs bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full">
                        × {item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Total bar */}
              <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl px-6 py-5">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Order Total</p>
                  <p className="text-2xl font-extrabold mt-0.5">
                    ₹{Number(selectedOrder.totalPrice).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  selectedOrder.paymentStatus === "paid"
                    ? "bg-emerald-400/20 text-emerald-300"
                    : "bg-amber-400/20 text-amber-300"
                }`}>
                  {selectedOrder.paymentStatus === "paid" ? "✓ Paid" : "Unpaid"}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}