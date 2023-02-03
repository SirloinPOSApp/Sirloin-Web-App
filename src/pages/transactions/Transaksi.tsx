import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Layout } from "../../components/Layout";

const Transaksi = () => {
  return (
    <Layout>
      <div className="flex flex-col m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">Laporan Transaksi</h3>
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
              <th>No.Transaksi</th>
              <th>Nama Product</th>
              <th>Qty</th>
              <th>Total Belanja</th>
              <th>Status Transaksi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>01/01/2023</th>
              <td>INV/20230123/MPL/0002</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp.300.000</td>
              <td className="text-teal-700 font-semibold">Selesai</td>
              <td>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>01/01/2023</th>
              <td>INV/20230123/MPL/0002</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp.300.000</td>
              <td className="text-red-500 font-semibold">Dibatalkan</td>
              <td>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>01/01/2023</th>
              <td>INV/20230123/MPL/0002</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp.300.000</td>
              <td className="text-teal-700 font-semibold">Selesai</td>
              <td>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>01/01/2023</th>
              <td>INV/20230123/MPL/0002</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp.300.000</td>
              <td className="text-red-500 font-semibold">Dibatalkan</td>
              <td>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>01/01/2023</th>
              <td>INV/20230123/MPL/0002</td>
              <td>Product 1</td>
              <td>10</td>
              <td>Rp.300.000</td>
              <td className="text-teal-700 font-semibold">Selesai</td>
              <td>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total Transaksi</th>
              <th></th>
              <th></th>
              <th></th>
              <th>Rp 1.500.000</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
};

export default Transaksi;
