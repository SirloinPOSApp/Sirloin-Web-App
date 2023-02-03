import React from "react";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";

const ProductInput = () => {
  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Tambah Product
      </h3>
      <form className="flex flex-row m-5 justify-center">
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Upload Foto Product
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-[#4AA3BA]  w-full max-w-md"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Kategori Product
            </label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Kategori Product"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Nama Product</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Nama Product"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Stok Product</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="10"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">
              Minimum Stok Product
            </label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="5"
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">No. Barcode</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="No.barcode"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Supplier</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="text"
              placeholder="Supplier"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Harga Jual</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="30000"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#4AA3BA]">Harga Beli</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96"
              type="number"
              placeholder="25000"
            />
          </div>
          <div className="flex flex-row">
            <Button
              id="back"
              label="Kembali"
              buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
            />
            <Button
              id="save"
              label="Simpan"
              buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductInput;
