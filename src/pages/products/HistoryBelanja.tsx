import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import { Layout } from "../../components/Layout";
import Button from "../../components/Button";

const HistoryBelanja = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <Layout>
      <div className="flex flex-col m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">
          History Belanja Product
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
        <table className="table w-full px-10 border z-0">
          <thead>
            <tr className=" text-white">
              <th className="bg-[#306D75] text-base font-normal">Tanggal</th>
              <th className="bg-[#306D75] text-base font-normal">
                No. Order Barang
              </th>
              <th className="bg-[#306D75] text-base font-normal">
                Nama Product
              </th>
              <th className="bg-[#306D75] text-base font-normal">Qty</th>
              <th className="bg-[#306D75] text-base font-normal">
                Harga Satuan
              </th>
              <th className="bg-[#306D75] text-base font-normal">
                Total Belanja
              </th>
              <th className="bg-[#306D75] text-base font-normal">Supplier</th>
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
              <th className="bg-[#306D75] text-lg font-bold text-white">
                Total Belanja Product
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

export default HistoryBelanja;
