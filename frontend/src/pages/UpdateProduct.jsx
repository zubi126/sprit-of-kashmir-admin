import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/axios";

function UpdateProduct() {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [updating, setUpdating] =
    useState(false);

  const [image, setImage] =
    useState(null);

  const [formData, setFormData] =
    useState({

      name: "",

      description: "",

      price: "",

      category: "",

      stock: "",

      featured: false,

    });

  useEffect(() => {

    fetchProduct();

  }, []);

  const fetchProduct =
    async () => {

      try {

        const res =
          await API.get(
            `/products/${id}`
          );

        const product =
          res.data.product;

        setFormData({

          name:
            product.name || "",

          description:
            product.description || "",

          price:
            product.price || "",

          category:
            product.category || "",

          stock:
            product.stock || "",

          featured:
            product.featured || false,

        });

      } catch (error) {

        console.log(error);

        alert(
          "Failed to load product"
        );

      } finally {

        setLoading(false);

      }

    };

  const handleChange =
    (e) => {

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

        setUpdating(true);

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

        if (image) {

          data.append(
            "image",
            image
          );

        }

        const res =
          await API.put(
            `/products/update/${id}`,
            data,
            {
              headers: {
                Authorization:
                  `Bearer ${localStorage.getItem(
                    "adminToken"
                  )}`,
              },
            }
          );

        alert(
          res.data.message
        );

        navigate(
          "/products"
        );

      } catch (error) {

        console.log(error);

        alert(
          error?.response?.data
            ?.message ||
            "Update failed"
        );

      } finally {

        setUpdating(false);

      }

    };

  if (loading) {

    return (

      <DashboardLayout>

        <div className="bg-white p-8 rounded-2xl">

          Loading Product...

        </div>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div className="bg-white rounded-2xl shadow-sm p-8">

        <h1 className="text-3xl font-bold mb-2">

          Update Product

        </h1>

        <p className="text-gray-500 mb-8">

          Update existing product

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

              Change Image (Optional)

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
            />

          </div>

          <div className="md:col-span-2">

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">

              <label className="flex items-center gap-3">

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

                    Featured products appear on homepage.

                  </p>

                </div>

              </label>

            </div>

          </div>

          <button
            type="submit"
            disabled={updating}
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >

            {updating
              ? "Updating..."
              : "Update Product"}

          </button>

        </form>

      </div>

    </DashboardLayout>

  );

}

export default UpdateProduct;