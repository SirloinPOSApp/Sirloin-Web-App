import React from "react";
import Button from "../components/Button";
import { Input, TextArea } from "../components/Input";
import { Layout } from "../components/Layout";

export const TenantEdit = () => {
  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Update Profil Tenant
      </h3>
      <form className="flex flex-row m-5 justify-center">
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="business-name"
              name="business-name"
              label="Nama Bisnis/Toko"
              placeholder="Nama Bisnis/Toko"
              type={"text"}
            ></Input>
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              type={"email"}
            ></Input>
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
              type={"password"}
            ></Input>
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="number-hp"
              name="number-hp"
              label="No. Telephone"
              placeholder="0912XXXXX"
              type={"number"}
            ></Input>
          </div>

          <div className="flex flex-col py-2">
            <TextArea id="address" name="address" label="Alamat" rows={5} />
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
