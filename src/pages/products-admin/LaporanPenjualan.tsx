import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button";
import axios from "axios";
import moment from "moment";
import { transactionAdminType } from "../../utils/types/sirloin";
import { useTitle } from "../../utils/Title";

const LaporanPenjualan = () => {
  useTitle("Sirloin - Laporan Penjualan");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [from, setFrom] = useState(startDate?.toISOString().split("T")[0]);
  const [to, setTo] = useState(endDate?.toISOString().split("T")[0]);

  const [datas, setDatas] = useState<transactionAdminType[]>([]);
  const [pdf, setPdf] = useState("");
  const [totalPenjualan, setTotalPenjualan] = useState(0);
  const [totalTransactionSuccess, setTotalTransactionSuccess] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    DataPenjualan();
  }, []);

  useEffect(() => {
    const start = startDate?.toISOString().split("T")[0];
    const end = endDate?.toISOString().split("T")[0];

    if (start && end) {
      setFrom(start);
      setTo(end);
    }
    setTotalPenjualan(datas.reduce((acc, cur) => acc + cur.total_bill, 0));
    setTotalTransactionSuccess(
      datas
        .filter((data) => data.transaction_status === "success")
        .reduce((acc, cur) => acc + cur.total_bill, 0)
    );
  }, [startDate, endDate, pdf, from, to, datas]);

  function DataPenjualan() {
    axios
      .get(
        `https://bluepath.my.id/transactions/admin?status=sell&from=${from}&to=${to}`
      )
      .then((res) => {
        setDatas(res.data.data);
        setPdf(res.data.pdf_url);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleChangeDate = () => {
    setLoading(true);
    DataPenjualan();
  };

  const handlePDF = () => {
    window.open(pdf);
  };

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
            dateFormat="yyyy-MM-dd"
            className="z-10 border rounded-md p-2 pl-11 "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <AiOutlineCalendar className="absolute left-32 top-7" size={24} />
        </div>
        <div className="flex-row py-5 flex gap-11 relative">
          <label className="font-bold text-xl">Sampai</label>
          <DatePicker
            id="end-date"
            dateFormat="yyyy-MM-dd"
            className="z-10 border rounded-md p-2 pl-11"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <AiOutlineCalendar className="absolute left-32 top-7" size={24} />
          {loading && (
            <div className="flex items-center">
              <a href="">Loading...</a>
            </div>
          )}
          <Button
            onClick={() => {
              handleChangeDate();
            }}
            id="tampil-data"
            label="Tampilkan Data"
            buttonSet="bg-[#4AA3BA] border-none capitalize btn-md w-64"
          />
        </div>
      </div>

      {datas.length === 0 ? (
        <div className="text-center">
          <a href="">No Data</a>
        </div>
      ) : (
        <div className="overflow-x-auto m-10 ">
          <div className="flex justify-end mb-10 gap-3">
            <Button
              onClick={() => {
                handlePDF();
              }}
              id="pdf"
              label="Print"
              buttonSet="bg-[#4AA3BA] border-none capitalize btn-md w-32"
            />
          </div>
          <table className="table w-full px-10 border z-0">
            <thead>
              <tr className=" text-white">
                <th className="bg-[#306D75] text-lg font-normal">Tanggal</th>
                <th className="bg-[#306D75] text-lg font-normal">
                  No. Transaksi
                </th>
                <th className="bg-[#306D75] text-lg font-normal">
                  Nama Tenant
                </th>
                <th className="bg-[#306D75] text-lg font-normal">
                  Total Belanja
                </th>
                <th className="bg-[#306D75] text-lg font-normal">
                  Status Transaksi
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>
                    {moment(data.created_at).format("YYYY-MM-DD hh:mm A")}
                  </td>
                  <td>{data.invoice_number}</td>
                  <td>{data.tenant_name}</td>
                  <td className="text-right">
                    Rp.{" "}
                    {data.total_bill
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                  <td
                    className={
                      data.transaction_status === "success"
                        ? "text-green-600"
                        : data.transaction_status === "pending"
                        ? "text-orange-300"
                        : data.transaction_status === "waiting payment"
                        ? "text-orange-300"
                        : "text-red-500"
                    }
                  >
                    {data.transaction_status}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="bg-[#306D75] text-lg font-normal text-white">
                  Total Transaksi Penjualan Sukses
                </th>
                <th className="bg-[#306D75]"></th>
                <th className="bg-[#306D75]"></th>

                <th></th>
                <th className="text-lg font-bold">
                  Rp.{" "}
                  {totalTransactionSuccess
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </th>
              </tr>
              <tr>
                <th className="bg-[#306D75] text-lg font-normal text-white">
                  Total Transaksi Penjualan
                </th>
                <th className="bg-[#306D75] text-lg font-normal"></th>
                <th className="bg-[#306D75] text-lg font-normal"></th>
                <th></th>
                <th className="text-lg font-bold">
                  Rp.{" "}
                  {totalPenjualan
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default LaporanPenjualan;
