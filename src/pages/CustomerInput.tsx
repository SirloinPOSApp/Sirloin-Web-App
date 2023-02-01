import React from "react";
import Button from "../components/Button";
import { Layout } from "../components/Layout";

const CustomerInput = () => {
  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Tambah Customer
      </h3>
      <form className="flex flex-row m-5 justify-center">
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Nama Customer
            </label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Email</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="email"
              placeholder="email"
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              No. Telephone
            </label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="0912XXXXX"
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Alamat</label>
            <textarea
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              placeholder="25000"
            />
          </div>
          <div className="flex flex-row">
            <Button
              label="Kembali"
              buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
            />
            <Button
              label="Simpan"
              buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default CustomerInput;
