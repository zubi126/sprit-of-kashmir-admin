// import { useState } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../api/axios";

// function CreateProduct() {

//   const [formData, setFormData] =
//     useState({

//       name: "",

//       description: "",

//       price: "",

//       category: "",

//       stock: "",

//       featured: false,

//     });

//   const [image, setImage] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(false);

//   const handleChange = (
//     e
//   ) => {

//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setFormData({

//       ...formData,

//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,

//     });

//   };

//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         setLoading(true);

//         const data =
//           new FormData();

//         Object.keys(
//           formData
//         ).forEach((key) => {

//           data.append(
//             key,
//             formData[key]
//           );

//         });

//         data.append(
//           "image",
//           image
//         );

//         const res =
//           await API.post(
//             "/products/create",
//             data,
//             {
//               headers: {
//                 "Content-Type":
//                   "multipart/form-data",
//                 Authorization: `Bearer ${localStorage.getItem(
//                   "adminToken"
//                 )}`,
//               },
//             }
//           );

//         alert(
//           res.data.message
//         );

//         setFormData({

//           name: "",

//           description: "",

//           price: "",

//           category: "",

//           stock: "",

//           featured: false,

//         });

//         setImage(null);

//       } catch (error) {

//         console.log(error);

//         alert(
//           error?.response?.data
//             ?.message ||
//             "Something went wrong"
//         );

//       } finally {

//         setLoading(false);

//       }

//     };

//   return (

//     <DashboardLayout>

//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <h1 className="text-3xl font-bold mb-6">

//           Create Product

//         </h1>

//         <form
//           onSubmit={
//             handleSubmit
//           }
//           className="grid grid-cols-2 gap-5"
//         >

//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={
//               formData.name
//             }
//             onChange={
//               handleChange
//             }
//             className="border rounded-lg p-3"
//             required
//           />

//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={
//               formData.price
//             }
//             onChange={
//               handleChange
//             }
//             className="border rounded-lg p-3"
//             required
//           />

//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={
//               formData.category
//             }
//             onChange={
//               handleChange
//             }
//             className="border rounded-lg p-3"
//             required
//           />

//           <input
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             value={
//               formData.stock
//             }
//             onChange={
//               handleChange
//             }
//             className="border rounded-lg p-3"
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Description"
//             value={
//               formData.description
//             }
//             onChange={
//               handleChange
//             }
//             className="border rounded-lg p-3 col-span-2"
//             rows="4"
//             required
//           />

//           <div className="col-span-2">

//             <label className="block mb-2 font-medium">

//               Product Image

//             </label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setImage(
//                   e.target.files[0]
//                 )
//               }
//               required
//             />

//           </div>

//           <div className="col-span-2">

//             <label className="flex items-center gap-3">

//               <input
//                 type="checkbox"
//                 name="featured"
//                 checked={
//                   formData.featured
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Featured Product

//             </label>

//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg col-span-2"
//           >

//             {loading
//               ? "Creating..."
//               : "Create Product"}

//           </button>

//         </form>

//       </div>

//     </DashboardLayout>

//   );

// }

// export default CreateProduct;








import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/axios";

function CreateProduct() {

  const [formData, setFormData] =
    useState({

      name: "",

      description: "",

      price: "",

      category: "",

      stock: "",

      featured: false,

    });

  const [image, setImage] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e
  ) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({

      ...formData,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const data =
          new FormData();

        Object.keys(
          formData
        ).forEach((key) => {

          data.append(
            key,
            formData[key]
          );

        });

        data.append(
          "image",
          image
        );

        const res =
          await API.post(
            "/products/create",
            data,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem(
                  "adminToken"
                )}`,
              },
            }
          );

        alert(
          res.data.message
        );

        setFormData({

          name: "",

          description: "",

          price: "",

          category: "",

          stock: "",

          featured: false,

        });

        setImage(null);

      } catch (error) {

        console.log(error);

        alert(
          error?.response?.data
            ?.message ||
            "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <DashboardLayout>

      <div className="bg-white rounded-2xl shadow-sm p-8">

        <h1 className="text-3xl font-bold text-slate-800 mb-2">

          Create Product

        </h1>

        <p className="text-gray-500 mb-8">

          Add a new product to your store

        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="grid md:grid-cols-2 gap-5"
        >

          <div>

            <label className="block mb-2 font-medium">

              Product Name

            </label>

            <input
              type="text"
              name="name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              className="w-full border rounded-xl p-3"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Price

            </label>

            <input
              type="number"
              name="price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
              className="w-full border rounded-xl p-3"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Category

            </label>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              className="w-full border rounded-xl p-3"
              required
            >

              <option value="">
                Select Category
              </option>

              <option value="Saffron">
                Saffron
              </option>

              <option value="Honey">
                Honey
              </option>

              <option value="Nuts">
                Nuts
              </option>

              <option value="Dry Fruits">
                Dry Fruits
              </option>

              <option value="Kahwa">
                Kahwa
              </option>

              <option value="Spices">
                Spices
              </option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Stock

            </label>

            <input
              type="number"
              name="stock"
              value={
                formData.stock
              }
              onChange={
                handleChange
              }
              className="w-full border rounded-xl p-3"
              required
            />

          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">

              Description

            </label>

            <textarea
              name="description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              rows="5"
              className="w-full border rounded-xl p-3"
              required
            />

          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">

              Product Image

            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(
                  e.target.files[0]
                )
              }
              className="w-full border rounded-xl p-3"
              required
            />

          </div>

          <div className="md:col-span-2">

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  name="featured"
                  checked={
                    formData.featured
                  }
                  onChange={
                    handleChange
                  }
                  className="w-5 h-5"
                />

                <div>

                  <p className="font-semibold">

                    Featured Product

                  </p>

                  <p className="text-sm text-gray-600">

                    Featured products appear on the homepage.

                  </p>

                </div>

              </label>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
          >

            {loading
              ? "Creating Product..."
              : "Create Product"}

          </button>

        </form>

      </div>

    </DashboardLayout>

  );

}

export default CreateProduct;