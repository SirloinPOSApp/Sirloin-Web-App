import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useTitle } from "../../utils/Title";
import { Input } from "../../components/Input";
import { ProductsType } from "../../utils/types/sirloin";

const ProductEdit = () => {
  useTitle("Sirloin - Edit Product");
  const [product, setProduct] = useState<ProductsType>();
  const { product_id } = useParams();
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
  const MySwal = withReactContent(Swal);

  const handleFileChange = (event: any) => {
    const file = fileInputRef.current.files[0];
    setFormProduct({
      ...formProduct,
      product_image: file,
    });
  };

  const handleChange = (event: any) => {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (product) {
      setFormProduct({
        upc: product.upc,
        category: product.category,
        product_name: product.product_name,
        stock: product.stock,
        minimum_stock: product.minimum_stock,
        buying_price: product.buying_price,
        price: product.price,
        product_image: product.product_image,
        supplier: product.supplier,
      });
    }
  }, [product]);

  useEffect(() => {
    Product();
  }, []);

  function Product() {
    axios
      .get(`https://bluepath.my.id/products/${product_id}`)
      .then((product) => {
        const { data } = product.data;
        setProduct(data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Gagal",
          text: error.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  }

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
      .put(`https://bluepath.my.id/products/${product_id}`, formData)
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
        Edit Product
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
              name="product_image"
              className="file-input file-input-bordered file-input-[#4AA3BA]  w-full max-w-md"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="category"
              type={"text"}
              placeholder="Kategori Product"
              onChange={handleChange}
              value={formProduct.category}
              label="Kategori Product"
              name="category"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="product_name"
              type={"text"}
              placeholder="Nama Product"
              onChange={handleChange}
              value={formProduct.product_name}
              label="Nama Product"
              name="product_name"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="stock"
              type={"number"}
              placeholder="10"
              onChange={handleChange}
              value={formProduct.stock}
              label="Stok Product"
              name="stock"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="minimum_stock"
              type={"number"}
              placeholder="5"
              onChange={handleChange}
              value={formProduct.minimum_stock}
              label="Minimum Stok Barang"
              name="minimum_stock"
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="upc"
              type={"text"}
              placeholder="No.barcode"
              onChange={handleChange}
              value={formProduct.upc}
              label="No.Barcode"
              name="upc"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="supplier"
              type={"text"}
              placeholder="Supplier"
              onChange={handleChange}
              value={formProduct.supplier}
              label="Nama Supllier"
              name="supplier"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="price"
              type={"number"}
              placeholder="30000"
              onChange={handleChange}
              value={formProduct.price}
              label="Harga Jual"
              name="price"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="buying_price"
              type="number"
              placeholder="25000"
              onChange={handleChange}
              value={formProduct.buying_price}
              label="Harga Beli"
              name="buying_price"
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
              label="Simpan"
              buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductEdit;
