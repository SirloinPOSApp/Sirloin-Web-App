import Button from "../components/Button";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import { ProductsType, SummaryType } from "../utils/types/sirloin";
import axios from "axios";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../utils/Title";

const Pembayaran = () => {
  useTitle("Sirloin - Detail Pembayaran");
  const [carts, setCarts] = useState<ProductsType[]>(() => {
    const saved = localStorage.getItem("carts");
    let initialValue = [];
    if (saved) {
      initialValue = JSON.parse(saved);
    }
    return initialValue;
  });

  const [summary, setSummary] = useState(() => {
    const saved = localStorage.getItem("summary");
    let initialValue: SummaryType = {
      customer_id: -1,
      sub_total: 0,
      discount: 0,
      total: 0,
    };
    if (saved) {
      initialValue = JSON.parse(saved) as SummaryType;
    }
    return initialValue;
  });
  const [payment, setPayment] = useState("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (payment !== "") {
      setIsDisable(false);
    }
  }, [payment]);

  const handleSubmit = () => {
    setIsDisable(true);
    const data: any = {
      items: carts.map((cart) => ({
        product_id: cart.id,
        quantity: cart.quantity,
        price: cart.price,
      })),
      customer_id: summary.customer_id,
      payment_method: payment,
    };
    axios
      .post(`https://bluepath.my.id/transactions`, data)
      .then((res) => {
        if (payment == "cashless") {
          MySwal.fire({
            title: "Scan Barcode",
            imageUrl: res.data.data.payment_url,
            icon: "info",
            confirmButtonAriaLabel: "ok",
          }).then(() => navigate("/transaction"));
        } else {
          MySwal.fire({
            title: "Berhasil",
            text: res.data.message,
            icon: "success",
            confirmButtonAriaLabel: "ok",
          });
          navigate("/transaction");
        }
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      })
      .finally(() => setIsDisable(false));
  };

  return (
    <Layout>
      <h3 className="font-bold text-2xl text-[#4AA3BA] m-5">
        Pembayaran Detail
      </h3>
      <div className="divider mx-5"></div>
      <h5 className="font-bold text-[#4AA3BA] px-10 py-5">Daftar Belanja</h5>
      <div className="overflow-x-auto">
        <table className="table border-none w-2/3 mx-10">
          <thead>
            <tr>
              <th>Nama Product</th>
              <th>Qty</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.id}>
                <td>{cart.product_name}</td>
                <td>{cart.quantity}</td>
                <td>
                  Rp.{" "}
                  {cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="divider mx-5"></div>
      <h5 className="font-bold text-[#4AA3BA] px-10 py-5">Ringkasan Belanja</h5>
      <div className="flex flex-row mx-10 space-x-96">
        <div className="flex flex-col  space-y-3">
          <p>Total Belanja Product</p>
          <p>Diskon Member</p>
          <h5 className="font-bold text-lg text-[#4AA3BA]">Total Belanja</h5>
        </div>
        <div className="flex flex-col space-y-3 text-end">
          <p>
            Rp.{" "}
            {summary.sub_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
          <p>
            -Rp.{" "}
            {summary.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
          <h5 className="font-bold text-lg text-[#4AA3BA]">
            Rp. {summary.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </h5>
        </div>
      </div>
      <div className="divider mx-5"></div>
      <div className="flex flex-row mx-10 space-x-96">
        <h3 className="font-bold text-2xl text-[#4AA3BA] ">Cara Bayar</h3>
        <select
          id="chose-payment"
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => setPayment(e.target.value)}
        >
          <option disabled value="">
            Pilih Cara Bayar
          </option>
          <option id="tunai" value="cash">
            Tunai
          </option>
          <option id="cashless" value="cashless">
            QRIS
          </option>
          <option id="gopay" value="cashless">
            Gopay
          </option>
          <option id="shopee" value="cashless">
            ShopeePay
          </option>
        </select>
      </div>
      <div className="flex flex-row justify-start space-x-10 px-10 py-20">
        <Link to={"/landing"}>
          <Button
            id="back"
            label="Kembali"
            buttonSet="w-40 text-[#DA5C53]  btn-outline"
          />
        </Link>
        <Button
          type="submit"
          disabled={isDisable}
          id="order"
          label="Bayar"
          buttonSet="w-40 text-white bg-teal-700  border-none"
          onClick={() => {
            handleSubmit();
          }}
        />
      </div>
    </Layout>
  );
};

export default Pembayaran;
