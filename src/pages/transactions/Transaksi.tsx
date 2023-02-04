import { AiOutlineCalendar } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Layout } from "../../components/Layout";
import DatePicker from "react-datepicker";
import Button from "../../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Transaksi = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    fetchDataProducts();
  }, []);

  function fetchDataProducts() {
    axios
      .get(
        `https://bluepath.my.id/transactions?status=sell&from=${startDate}&to=${endDate}`
      )
      .then((res) => {
        console.log(res.data.data);
        setDatas(res.data.data);
      })
      .catch((err) => {
        // alert(err.toString());
        alert(err.response.data.message);
      });
  }

  return (
    <Layout>
      <div className="flex flex-col m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA] mb-10">
          Laporan Transaksi
        </h3>
        <div className="flex-row py-5 flex gap-20 relative">
          <label className="font-bold">Dari</label>
          <DatePicker
            id="start-date"
            dateFormat="dd/MM/yyyy"
            className="z-10 border rounded-md p-2 pl-11 "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <AiOutlineCalendar className="absolute left-32 top-7" size={24} />
        </div>
        <div className="flex-row py-5 flex gap-12 relative">
          <label className="font-bold">Sampai</label>
          <DatePicker
            id="end-date"
            dateFormat="dd/MM/yyyy"
            className="z-10 border rounded-md p-2 pl-11"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <AiOutlineCalendar className="absolute left-32 top-7" size={24} />
          <Button
            id="tampil-data"
            label="Tampilkan Data"
            buttonSet="bg-[#4AA3BA] border-none capitalize btn-md w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto m-10">
        <table className="table w-full px-10">
          <thead>
            <tr className=" text-white">
              <th className="bg-[#306D75] text-base font-normal">Tanggal</th>
              <th className="bg-[#306D75] text-base font-normal">
                No.Transaksi
              </th>
              <th className="bg-[#306D75] text-base font-normal">
                Nama Product
              </th>
              <th className="bg-[#306D75] text-base font-normal">Qty</th>
              <th className="bg-[#306D75] text-base font-normal">
                Total Belanja
              </th>
              <th className="bg-[#306D75] text-base font-normal">
                Status Transaksi
              </th>
              <th className="bg-[#306D75] text-base font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/01/2023</td>
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
              <td>01/01/2023</td>
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
              <td>01/01/2023</td>
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
              <td>01/01/2023</td>
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
              <td>01/01/2023</td>
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
              <th className="bg-[#306D75] text-lg font-bold text-white">
                Total Transaksi
              </th>
              <th className="bg-[#306D75]"></th>
              <th className="bg-[#306D75]"></th>
              <th className="bg-[#306D75]"></th>
              <th></th>
              <th className="text-lg font-bold">Rp 1.500.000</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
};

export default Transaksi;
