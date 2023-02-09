import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import { Layout } from "../../components/Layout";
import Button from "../../components/Button";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { FiEdit } from "react-icons/fi";
import { transactionType } from "../../utils/types/sirloin";
import { useTitle } from "../../utils/Title";

const HistoryBelanja = () => {
  useTitle("Sirloin - History Pembelanjaan");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [from, setFrom] = useState(startDate?.toISOString().split("T")[0]);
  const [to, setTo] = useState(endDate?.toISOString().split("T")[0]);
  const [datas, setDatas] = useState<transactionType[]>([]);
  const [pdf, setPdf] = useState("");
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalTransactionSuccess, setTotalTransactionSuccess] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    productData();
  }, []);

  useEffect(() => {
    const start = startDate?.toISOString().split("T")[0];
    const end = endDate?.toISOString().split("T")[0];

    if (start && end) {
      setFrom(start);
      setTo(end);
    }
    setTotalTransaction(datas.reduce((acc, cur) => acc + cur.total_price, 0));
    setTotalTransactionSuccess(
      datas
        .filter((data) => data.transaction_Status === "success")
        .reduce((acc, cur) => acc + cur.total_bill, 0)
    );
  }, [startDate, endDate, pdf, from, to]);

  function productData() {
    axios
      .get(
        `https://bluepath.my.id/transactions?status=buy&from=${from}&to=${to}`
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
    productData();
  };

  const handlePDF = () => {
    window.open(pdf);
  };

  return (
    <Layout>
      <div className="flex flex-col m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA] mb-10">
          History Belanja Product
        </h3>
        <div className="flex-row py-5 flex gap-20 relative">
          <label className="font-bold">Dari</label>
          <DatePicker
            id="start-date"
            dateFormat="yyyy-MM-dd"
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
        <div className="overflow-x-auto m-10">
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
                <th className="bg-[#306D75] text-base font-normal">Tanggal</th>
                <th className="bg-[#306D75] text-base font-normal">
                  No.Transaksi
                </th>
                <th className="bg-[#306D75] text-base font-normal">
                  Total Belanja
                </th>
                <th className="bg-[#306D75] text-base font-normal">
                  Status Transaksi
                </th>
                <th className="bg-[#306D75] text-base font-normal text-center">
                  Detail Pembelian
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>
                    {moment(data.created_at).format("YYYY-MM-DD hh:mm A")}
                  </td>
                  <td>INV/MPL/{data.id}</td>
                  <td className="text-right">
                    Rp.{" "}
                    {data.total_bill
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                  <td
                    className={
                      data.transaction_Status === "success"
                        ? "text-green-600"
                        : data.transaction_Status === "pending"
                        ? "text-orange-300"
                        : data.transaction_Status === "waiting payment"
                        ? "text-orange-300"
                        : "text-red-500"
                    }
                  >
                    {data.transaction_Status}
                  </td>
                  <td className="flex justify-center">
                    <button
                      id={`history-shopping-${data.id}`}
                      className="btn btn-ghost btn-square"
                      onClick={() =>
                        navigate(`/detail-history-shopping/${data.id}`)
                      }
                    >
                      <FiEdit size="20" color="teal" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="bg-[#306D75] text-lg font-bold text-white">
                  Total Belanja Product Sukses
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
                <th className="bg-[#306D75] text-lg font-bold text-white">
                  Total Belanja Product
                </th>
                <th className="bg-[#306D75]"></th>
                <th className="bg-[#306D75]"></th>
                <th></th>
                <th className="text-lg font-bold">
                  Rp.{" "}
                  {totalTransaction
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

export default HistoryBelanja;
