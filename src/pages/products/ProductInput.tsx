import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useTitle } from "../../utils/Title";

const ProductInput = () => {
  useTitle("Sirloin - Tambah Product");
  const [formProduct, setFormProduct] = useState({
    upc: "",
    category: "",
    product_name: "",
    stock: 0,
    minimum_stock: 0,
    buying_price: 0,
    price: 0,
    product_image: "",
    supplier: "",
  });
  const fileInputRef: any = React.createRef();
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  const MySwal = withReactContent(Swal);

  const handleFileChange = (event: any) => {
    const file = fileInputRef.current.files[0];
    setFormProduct({
      ...formProduct,
      product_image: file,
    });
  };

  useEffect(() => {
    if (
      formProduct.upc === "" ||
      formProduct.category === "" ||
      formProduct.product_name === "" ||
      formProduct.stock === 0 ||
      formProduct.minimum_stock === 0 ||
      formProduct.buying_price === 0 ||
      formProduct.price === 0 ||
      formProduct.product_image === null ||
      formProduct.supplier === ""
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formProduct]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData();
    formData.append("product_image", fileInputRef.current.files[0]);
    formData.append("upc", formProduct.upc);
    formData.append("category", formProduct.category);
    formData.append("product_name", formProduct.product_name);
    formData.append("stock", formProduct.stock);
    formData.append("minimum_stock", formProduct.minimum_stock);
    formData.append("buying_price", formProduct.buying_price);
    formData.append("price", formProduct.price);
    formData.append("supplier", formProduct.supplier);

    axios
      .post("https://bluepath.my.id/products", formData)
      .then((response) => {
        MySwal.fire({
          title: "Berhasil",
          text: response.data.message,
          icon: "success",
          confirmButtonAriaLabel: "ok",
        });
        navigate("/landing");
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  };

  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Tambah Product
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row m-5 justify-center"
      >
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Upload Foto Product
            </label>
            <input
              id="product_image"
              type="file"
              className="file-input file-input-bordered file-input-[#4AA3BA]  w-full max-w-md"
              onChange={(e) => handleFileChange(e)}
              ref={fileInputRef}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Kategori Product
            </label>
            <input
              id="category"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Kategori Product"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  category: e.target.value,
                })
              }
              value={formProduct.category}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Nama Product</label>
            <input
              id="product_name"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Nama Product"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  product_name: e.target.value,
                })
              }
              value={formProduct.product_name}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Stok Product</label>
            <input
              id="stock"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="10"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  stock: parseInt(e.target.value),
                })
              }
              value={formProduct.stock}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Minimum Stok Product
            </label>
            <input
              id="minimum_stock"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="5"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  minimum_stock: parseInt(e.target.value),
                })
              }
              value={formProduct.minimum_stock}
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">No. Barcode</label>
            <input
              id="upc"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="No.barcode"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  upc: e.target.value,
                })
              }
              value={formProduct.upc}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Supplier</label>
            <input
              id="supplier"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Supplier"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  supplier: e.target.value,
                })
              }
              value={formProduct.supplier}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Harga Jual</label>
            <input
              id="price"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="30000"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  price: parseInt(e.target.value),
                })
              }
              value={formProduct.price}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Harga Beli</label>
            <input
              id="buying_price"
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="25000"
              onChange={(e) =>
                setFormProduct({
                  ...formProduct,
                  buying_price: parseInt(e.target.value),
                })
              }
              value={formProduct.buying_price}
            />
          </div>
          <div className="flex flex-row">
            <Button
              id="back"
              label="Kembali"
              buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
              onClick={() => navigate("/products")}
            />
            <Button
              id="save"
              type="submit"
              disabled={isDisable}
              label="Simpan"
              buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductInput;
