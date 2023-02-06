import React from "react";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";

interface datasType {
  created_at: string;
  customer_id: number;
  customer_name: string;
  discount: number;
  id: number;
  invoice_number: string;
  invoice_url: string;
  payment_url: string;
  total_bill: number;
  total_price: number;
  transaction_status: string;
  TransactionProductRes: [
    {
      price: number;
      product_id: number;
      product_image: string;
      product_name: string;
      quantity: number;
      total_price: number;
    }
  ];
}

export const TransaksiDetail = () => {
  const [datas, setDatas] = useState<datasType>();
  const { transaction_id } = useParams();
  const [total_quantity, setTotal_quantity] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    // console.log(refresh);
  }, [refresh]);

  // useEffect(() => {
  //   console.log("tot", total_quantity);
  // }, [total_quantity]);

  function fetchData() {
    axios
      .get(`https://bluepath.my.id/transactions/${transaction_id}`)
      .then((customer) => {
        const { data } = customer.data;
        // console.log(data);
        setDatas(data);
        let sum = 0;
        data.TransactionProductRes.forEach((item: any) => {
          sum += item.quantity;
        });
        setTotal_quantity(sum);
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

  const handleClickInvoice = () => {
    window.open(datas?.invoice_url);
  };

  const handleClickKodeBayar = () => {
    Swal.fire({
      title: "Scan Barcode",
      // text: res.data.message,
      imageUrl: datas?.payment_url,
      icon: "info",
      confirmButtonAriaLabel: "ok",
    }).then(() => setRefresh(!refresh));
  };

  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Detail Transaksi
      </h3>
      <div className="rounded-xl border m-10 p-5 mx-40 shadow-lg font-medium text-lg">
        <div className="relative text-[#306D75]">
          <h1 className="border-b-2 font-bold text-xl pb-5 mb-4 capitalize">
            {datas?.transaction_status}
          </h1>
          <p className="absolute top-[-0.5rem] left-0 ml-[-1.5rem] text-5xl">
            l
          </p>
        </div>
        <div className="flex justify-between font-semibold mb-4">
          <p>INV/MPL/{datas?.id}</p>
          <p
            onClick={() => {
              handleClickInvoice();
            }}
            className="cursor-pointer text-[#4AA3BA]"
          >
            Invoice
          </p>
        </div>
        {datas?.customer_name && (
          <div className="flex justify-between mb-4">
            <p>Nama Pembeli</p>
            <p>{datas?.customer_name}</p>
          </div>
        )}
        <div className="flex justify-between mb-4">
          <p>Tanggal Pembelian</p>
          <p>{moment(datas?.created_at).format("YYYY-MM-DD hh:mm A")}</p>
        </div>
        <h1 className="flex my-10  text-xl font-bold">Detail Transaksi</h1>
        {datas?.TransactionProductRes.map((data) => (
          <div
            key={data.product_id}
            className="flex flex-col border rounded-xl py-5 px-10 shadow-lg mb-7"
          >
            <div className="flex justify-between content-between items-end">
              <div className="flex items-center">
                {data.product_image ? (
                  <img
                    src={data.product_image}
                    alt="product"
                    className="w-36"
                  />
                ) : (
                  <img
                    src={
                      "https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    }
                    alt="product"
                    className="w-36"
                  />
                )}
                <p className="font-semibold text-xl">{data.product_name}</p>
              </div>
              <div>
                <p>
                  {data.quantity} x Rp. {data.price}
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-5 pt-5 border-t">
              <p className="font-bold text-xl">
                Total Harga : Rp: {data.total_price}
              </p>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-end">
          <div className=" flex  w-1/2">
            <h1 className="flex my-10  text-xl font-bold">
              Rincian Pembayaran
            </h1>
          </div>
          {/* <div className="flex justify-between mb-4 border-b pb-4 w-1/2">
            <p>Metode Pembayaran</p>
            <p>Tunai</p>
          </div> */}
          <div className="flex justify-between mb-4 w-1/2">
            <p>Total Harga ({total_quantity} barang)</p>
            <p>Rp. {datas?.total_price}</p>
          </div>
          <div className="flex justify-between mb-4 border-b pb-4 w-1/2">
            <p>Diskon</p>
            <p>-Rp. {datas?.discount}</p>
          </div>
          <div className="flex justify-between mb-4 text-xl font-bold mt-7 w-1/2">
            <p>Total Belanja</p>
            <p>Rp. {datas?.total_bill}</p>
          </div>
        </div>
        {/* <div className="flex justify-end">
          <Button
            id="cancel-order"
            label="Batalkan Order"
            buttonSet="w-48 h-16 text-white bg-teal-700 mt-7 border-none bg-[#DA5C53] capitalize "
          />
        </div> */}
      </div>
      <div className="flex justify-end mx-40 gap-10">
        <Button
          id="back"
          label="Kembali"
          buttonSet="w-40 text-[#DA5C53] my-3 btn-outline"
          onClick={() => navigate("/transaction")}
        />
        <Button
          id="payment"
          label="Kode Bayar"
          buttonSet="w-40 text-white bg-teal-700 my-3 border-none"
          onClick={() => handleClickKodeBayar()}
        />
      </div>
    </Layout>
  );
};
