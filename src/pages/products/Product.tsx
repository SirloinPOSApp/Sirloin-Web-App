import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FiEdit, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import { useTitle } from "../../utils/Title";

interface ProductType {
  id: number;
  upc?: string;
  category: string;
  product_name: string;
  stock: number;
  min_stock: number;
  buy_price: number;
  price: number;
  product_image: string;
  supplier: string;
}

const Product = () => {
  useTitle("Sirloin-Product Tenant");
  const [product, setProduct] = useState<ProductType[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    listProduct();
  }, [refresh]);

  function listProduct() {
    axios
      .get("https://bluepath.my.id/products")
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

  function deleteProduct(id: number) {
    Swal.fire({
      title: "Apakah Anda yakin akan menghapus produk ini?",
      text: "Produk yang dihapus tidak bisa dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus produk",
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`https://bluepath.my.id/products/${id}`)
          .then((response) => {
            Swal.fire({
              title: "Berhasil",
              text: response.data.message,
              icon: "success",
              confirmButtonAriaLabel: "ok",
            });
            setRefresh(!refresh);
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
    });
  }

  return (
    <Layout>
      <div className="flex flex-row justify-between m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">Product Tenant</h3>
        <Button
          id="add-product"
          label="Tambah Product"
          buttonSet="bg-[#4AA3BA] border-none capitalize w-48"
          onClick={() => navigate("/add-product")}
        />
      </div>

      <div className="overflow-x-auto m-10">
        <table className="table w-full px-10">
          <thead>
            <tr>
              <th>Nama Product</th>
              <th>Kategori</th>
              <th>Harga Jual</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, index) => (
              <tr key={index}>
                <th>{product.product_name}</th>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td className="flex col-span-2">
                  <button id="del-product" className="btn btn-ghost btn-square">
                    <FiTrash2
                      size="20"
                      color="red"
                      onClick={() => deleteProduct(product.id)}
                    />
                  </button>
                  <button
                    id="edit-product"
                    className="btn btn-ghost btn-square"
                  >
                    <FiEdit
                      size="20"
                      color="teal"
                      onClick={() => navigate(`/edit-product/${product.id}`)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Product;
