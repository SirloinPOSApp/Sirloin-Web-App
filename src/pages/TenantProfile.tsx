import React from "react";
import Button from "../components/Button";
import { Layout } from "../components/Layout";

export const TenantProfile = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-between m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">Profil Tenant</h3>
      </div>
      <div className="flex flex-col drop-shadow-xl bg-[#FAFAFA] rounded-3xl m-10  py-[9rem] px-[6.063rem] text-center gap-6  items-center">
        <h1 className=" text-[#4AA3BA] font-bold text-4xl ">
          Nama Bisnis/Toko
        </h1>
        <p>Example@mail.com</p>
        <p>0821557796613641</p>
        <p className="w-60">
          Jl Wijaya II Wijaya Graha Puri Bl F/46-47,Melawai
        </p>
      </div>
      <div className=" flex justify-end">
        <Button
          id="back"
          label="Kembali"
          buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
        />
        <Button
          id="edit-profile"
          label="Edit Profil"
          buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
        />
      </div>
    </Layout>
  );
};
