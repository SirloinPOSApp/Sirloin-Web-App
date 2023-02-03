import React from "react";
import { FiEdit } from "react-icons/fi";
import { Layout } from "../../components/Layout";

const HistoryBelanja = () => {
  return (
    <Layout>
      <div className="flex flex-col m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">
          History Belanja Product
        </h3>
        <div className="flex-row py-5">
          <label className="font-bold">Dari</label>
        </div>
        <div className="flex-row py-5">
          <label className="font-bold">Sampai</label>
        </div>
      </div>

      <div className="overflow-x-auto m-10">
        <table className="table w-full px-10">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>No. Order Barang</th>
              <th>Nama Product</th>
              <th>Qty</th>
              <th>Harga Satuan</th>
              <th>Total Belanja</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/01/2023</td>
              <td>PO/20230123/Product/0001</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp. 30.000</td>
              <td>Rp.300.000</td>
              <td>Suplier A</td>
            </tr>

            <tr>
              <td>01/01/2023</td>
              <td>PO/20230123/Product/0001</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp. 30.000</td>
              <td>Rp.300.000</td>
              <td>Suplier A</td>
            </tr>

            <tr>
              <td>01/01/2023</td>
              <td>PO/20230123/Product/0001</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp. 30.000</td>
              <td>Rp.300.000</td>
              <td>Suplier A</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total Belanja Product</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Rp 1.500.000</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
};

export default HistoryBelanja;
