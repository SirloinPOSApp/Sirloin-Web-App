import React from "react";
import Button from "../components/Button";
import { Layout } from "../components/Layout";

const Pembayaran = () => {
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
            <tr>
              <td>Product 1</td>
              <td>2</td>
              <td>Rp. 20.000</td>
            </tr>

            <tr>
              <td>Product 1</td>
              <td>2</td>
              <td>Rp. 20.000</td>
            </tr>

            <tr>
              <td>Product 1</td>
              <td>2</td>
              <td>Rp. 20.000</td>
            </tr>
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
        <div className="flex flex-col space-y-3">
          <p>Rp. 60.000</p>
          <p>Rp. 3.000</p>
          <h5 className="font-bold text-lg text-[#4AA3BA]">Rp. 63.000</h5>
        </div>
      </div>
      <div className="divider mx-5"></div>
      <div className="flex flex-row mx-10 space-x-96">
        <h3 className="font-bold text-2xl text-[#4AA3BA] ">Cara Bayar</h3>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Pilih Cara Bayar
          </option>
          <option>Tunai</option>
          <option>Non-Tunai</option>
          <option>Gopay</option>
          <option>ShopeePay</option>
          <option>Otto Click</option>
        </select>
      </div>
      <div className="flex flex-row justify-start space-x-10 px-10 py-20">
        <Button label="Kembali" buttonSet="w-40 text-[#DA5C53]  btn-outline" />
        <Button
          label="Bayar"
          buttonSet="w-40 text-white bg-teal-700  border-none"
        />
      </div>
    </Layout>
  );
};

export default Pembayaran;
