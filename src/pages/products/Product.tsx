import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FiEdit, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import { SkeletonLoadingTabel } from "../../components/Loading";
import { useTitle } from "../../utils/Title";
import { ProductsType } from "../../utils/types/sirloin";

const Product = () => {
  useTitle("Sirloin-Product Tenant");
  const [product, setProduct] = useState<ProductsType[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
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
      })
      .finally(() => setLoading(false));
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
        {cookie.id != 1 ? (
          <h3 className="font-bold text-2xl text-[#4AA3BA]">Product Tenant</h3>
        ) : (
          <h3 className="font-bold text-2xl text-[#4AA3BA]">
            Product Super Admin
          </h3>
        )}
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
            {loading
              ? [...Array(20).keys()].map((product) => (
                  <SkeletonLoadingTabel key={product} />
                ))
              : product.map((product, index) => (
                  <tr key={index}>
                    <td>{product.product_name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td className="flex col-span-2">
                      <button
                        id="del-product"
                        className="btn btn-ghost btn-square"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <FiTrash2 size="20" color="red" />
                      </button>
                      <button
                        id="edit-product"
                        className="btn btn-ghost btn-square"
                        onClick={() => navigate(`/edit-product/${product.id}`)}
                      >
                        <FiEdit size="20" color="teal" />
                      </button>
                    </td>
                  </tr>
                ))}
            {/* <SkeletonLoadingTabel /> */}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Product;
