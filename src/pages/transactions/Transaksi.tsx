import { AiOutlineCalendar } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Layout } from "../../components/Layout";
import DatePicker from "react-datepicker";
import Button from "../../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { transactionType } from "../../utils/types/sirloin";
import { useTitle } from "../../utils/Title";

const Transaksi = () => {
  useTitle("Sirloin - Laporan Transaksi");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [from, setFrom] = useState(startDate?.toISOString().split("T")[0]);
  const [to, setTo] = useState(endDate?.toISOString().split("T")[0]);
  const [datas, setDatas] = useState<transactionType[]>([]);
  const [pdf, setPdf] = useState("");
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalTransactionSuccess, setTotalTransactionSuccess] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [sendToEmail, setSendToEmail] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [sendToEmail]);

  useEffect(() => {
    const start = startDate?.toISOString().split("T")[0];
    const end = endDate?.toISOString().split("T")[0];

    if (start && end) {
      setFrom(start);
      setTo(end);
    }
    setTotalTransaction(datas.reduce((acc, cur) => acc + cur.total_bill, 0));
    setTotalTransactionSuccess(
      datas
        .filter((data) => data.transaction_Status === "success")
        .reduce((acc, cur) => acc + cur.total_bill, 0)
    );
  }, [startDate, endDate, pdf, from, to, datas]);

  function fetchData() {
    axios
      .get(
        `https://bluepath.my.id/transactions?status=sell&from=${from}&to=${to}&send_email=${sendToEmail}`
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
    fetchData();
  };

  const handlePDF = () => {
    window.open(pdf);
  };

  const handleSendToEmail = async () => {
    setSendToEmail(true);
    await MySwal.fire({
      title: "Berhasil",
      text: "Sending to email",
      icon: "success",
      confirmButtonAriaLabel: "ok",
    });
    await fetchData();
    setSendToEmail(false);
  };

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
              onClick={handleSendToEmail}
              id="send-email"
              label="Send To Email"
              buttonSet="bg-[#4AA3BA] border-none capitalize btn-md w-32"
            />
            <Button
              onClick={() => {
                handlePDF();
              }}
              id="pdf"
              label="Print"
              buttonSet="bg-[#4AA3BA] border-none capitalize btn-md w-32"
            />
          </div>
          <table className="table w-full px-10 z-0">
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
                  Detail Transaksi
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
                      id={`transaction-${data.id}`}
                      className="btn btn-ghost btn-square"
                      onClick={() => navigate(`/detail-transaction/${data.id}`)}
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
                  Total Transaksi Sukses
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
                  Total Transaksi
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

export default Transaksi;
