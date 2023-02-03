import { FiEdit, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";

const Product = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-between m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">Product Tenant</h3>
        <Button
          id="add-product"
          label="Tambah Product"
          buttonSet="bg-[#4AA3BA] border-none capitalize w-48"
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
            <tr>
              <th>Product 1</th>
              <td>Kategori 1</td>
              <td>Rp. 35000</td>
              <td>10</td>
              <td className="flex col-span-2">
                <button id="del-product" className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button id="edit-product" className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>Product 1</th>
              <td>Kategori 1</td>
              <td>Rp. 35000</td>
              <td>10</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>Product 1</th>
              <td>Kategori 1</td>
              <td>Rp. 35000</td>
              <td>10</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Product;
