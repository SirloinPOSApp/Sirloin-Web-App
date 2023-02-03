import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Layout } from "../components/Layout";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
const LaporanPenjualan = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  return (
    <Layout>
      <div className="flex flex-col m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA] mb-10">
          Laporan Penjualan
        </h3>
        <div className="flex-row py-5 flex gap-20 relative">
          <label className="font-bold text-xl">Dari</label>
          <DatePicker
            id="start-date"
            dateFormat="dd/MM/yyyy"
            className="z-10 border p-2 pl-11 "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <AiOutlineCalendar className="w-8 h-8 absolute left-32 top-6" />
        </div>
        <div className="flex-row py-5 flex gap-11 relative">
          <label className="font-bold text-xl">Sampai</label>
          <DatePicker
            id="end-date"
            dateFormat="dd/MM/yyyy"
            className="z-10 border p-2 pl-11"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <AiOutlineCalendar className="w-8 h-8 absolute left-32 top-6" />
        </div>
      </div>

      <div className="overflow-x-auto m-10 ">
        <table className="table w-full px-10 border z-0">
          <thead>
            <tr className=" text-white">
              <th className="bg-[#306D75] text-lg font-normal">Tanggal</th>
              <th className="bg-[#306D75] text-lg font-normal">
                No. Transaksi
              </th>
              <th className="bg-[#306D75] text-lg font-normal">Nama Tenant</th>
              <th className="bg-[#306D75] text-lg font-normal">
                Total Belanja
              </th>
              <th className="bg-[#306D75] text-lg font-normal">
                Status Transaksi
              </th>
              <th className="bg-[#306D75] text-lg font-normal">Metode Bayar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>01/01/2023</th>
              <td>INV/20230123/MPL/0002</td>
              <td>Nana</td>
              <td>Rp.300.000</td>
              <td className="text-teal-700 font-semibold">Selesai</td>
              <td>Tunai</td>
            </tr>

            <tr>
              <th>05/01/2023</th>
              <td>INV/20230123/MPL/0003</td>
              <td>Nina</td>
              <td>Rp.300.000</td>
              <td className="text-[#DA5C53] font-semibold">Dibatalkan</td>
              <td>Tunai</td>
            </tr>

            <tr>
              <th>10/01/2023</th>
              <td>INV/20230123/MPL/0004</td>
              <td>Nunung</td>
              <td>Rp.300.000</td>
              <td className="text-teal-700 font-semibold">Selesai</td>
              <td>Tunai</td>
            </tr>

            <tr>
              <th>15/01/2023</th>
              <td>INV/20230123/MPL/0005</td>
              <td>Nanang</td>
              <td>Rp.300.000</td>
              <td className="text-[#DA5C53] font-semibold">Dibatalkan</td>
              <td>Tunai</td>
            </tr>

            <tr>
              <th>20/01/2023</th>
              <td>INV/20230123/MPL/0006</td>
              <td>Nani</td>
              <td>Rp.300.000</td>
              <td className="text-teal-700 font-semibold">Selesai</td>
              <td>Tunai</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="bg-[#306D75] text-lg font-normal text-white">
                Total Transaksi
              </th>
              <th className="bg-[#306D75] text-lg font-normal"></th>
              <th className="bg-[#306D75] text-lg font-normal"></th>
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

export default LaporanPenjualan;
