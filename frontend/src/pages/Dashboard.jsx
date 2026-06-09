// // function Dashboard() {

// //   return (

// //     <div>

// //       Dashboard

// //     </div>

// //   );

// // }

// // export default Dashboard;









// function Dashboard() {

//   const admin =
//     JSON.parse(
//       localStorage.getItem(
//         "admin"
//       )
//     );

//   return (

//     <div className="p-10">

//       <h1 className="text-3xl font-bold">

//         Dashboard

//       </h1>

//       <p className="mt-5">

//         Welcome

//         {" "}

//         {admin?.name}

//       </p>

//     </div>

//   );

// }

// export default Dashboard;










// function Dashboard() {

//   const admin =
//     JSON.parse(
//       localStorage.getItem(
//         "admin"
//       )
//     );

//   const handleLogout =
//     () => {

//       localStorage.removeItem(
//         "adminToken"
//       );

//       localStorage.removeItem(
//         "admin"
//       );

//       window.location.href = "/";
//     };

//   return (

//     <div className="p-10">

//       <div className="flex justify-between items-center">

//         <div>

//           <h1 className="text-3xl font-bold">

//             Dashboard

//           </h1>

//           <p className="mt-2">

//             Welcome {admin?.name}

//           </p>

//         </div>

//         <button
//           onClick={
//             handleLogout
//           }
//           className="bg-red-500 text-white px-5 py-2 rounded-lg"
//         >

//           Logout

//         </button>

//       </div>

//     </div>

//   );

// }

// export default Dashboard;








import {
  useEffect,
  useState,
} from "react";

import {
  FaBox,
  FaShoppingCart,
  FaRupeeSign,
  FaStar,
} from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/axios";

function Dashboard() {

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      try {

        const res =
          await API.get(
            "/dashboard/stats",
            {
              headers: {
                Authorization:
                  `Bearer ${localStorage.getItem(
                    "adminToken"
                  )}`,
              },
            }
          );

        setData(
          res.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  const StatCard = ({
    title,
    value,
    icon,
  }) => (

    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-sm
      border
      border-gray-100
      hover:shadow-lg
      transition
      "
    >

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            {title}

          </p>

          <h2 className="text-4xl font-bold mt-2">

            {value}

          </h2>

        </div>

        <div className="text-orange-500 text-3xl">

          {icon}

        </div>

      </div>

    </div>

  );

  return (

    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

          Dashboard

        </h1>

        <p className="text-gray-500 mt-2">

          Welcome back Admin 👋

        </p>

      </div>

      {loading ? (

        <div className="text-center py-20">

          Loading...

        </div>

      ) : (

        <>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            <StatCard
              title="Revenue"
              value={`₹${data.stats.totalRevenue}`}
              icon={<FaRupeeSign />}
            />

            <StatCard
              title="Orders"
              value={data.stats.totalOrders}
              icon={<FaShoppingCart />}
            />

            <StatCard
              title="Products"
              value={data.stats.totalProducts}
              icon={<FaBox />}
            />

            <StatCard
              title="Featured"
              value={data.stats.featuredProducts}
              icon={<FaStar />}
            />

          </div>

          {/* SECTIONS */}

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Recent Orders */}

            <div className="bg-white rounded-3xl p-6 shadow-sm">

              <h2 className="text-xl font-bold mb-5">

                Recent Orders

              </h2>

              <div className="space-y-4">

                {data.recentOrders.map(
                  (order) => (

                    <div
                      key={order._id}
                      className="flex justify-between border-b pb-3"
                    >

                      <div>

                        <p className="font-medium">

                          {
                            order.shippingAddress?.fullName
                          }

                        </p>

                        <p className="text-sm text-gray-500">

                          {
                            order.shippingAddress?.phone
                          }

                        </p>

                      </div>

                      <div className="font-bold">

                        ₹
                        {
                          order.totalPrice
                        }

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* Latest Products */}

            <div className="bg-white rounded-3xl p-6 shadow-sm">

              <h2 className="text-xl font-bold mb-5">

                Latest Products

              </h2>

              <div className="space-y-4">

                {data.latestProducts.map(
                  (product) => (

                    <div
                      key={product._id}
                      className="flex items-center gap-4 border-b pb-3"
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />

                      <div className="flex-1">

                        <p className="font-medium">

                          {product.name}

                        </p>

                        <p className="text-sm text-gray-500">

                          ₹
                          {product.price}

                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </>

      )}

    </DashboardLayout>

  );

}

export default Dashboard;