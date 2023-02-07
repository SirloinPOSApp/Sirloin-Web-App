import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import { useTitle } from "../../utils/Title";
import { userType } from "../../utils/types/sirloin";

export const TenantProfile = () => {
  useTitle("Sirloin-Profil Tenant");
  const [user, setUser] = useState<userType>();
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://bluepath.my.id/users")
      .then((user) => {
        const { data } = user.data;
        setUser(data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  return (
    <Layout>
      <div className="flex flex-row justify-between m-10">
        {cookie.id != 1 ? (
          <h3 className="font-bold text-2xl text-[#4AA3BA]">Profil Tenant</h3>
        ) : (
          <h3 className="font-bold text-2xl text-[#4AA3BA]">
            Product Super Admin
          </h3>
        )}
      </div>
      <div className="flex flex-col drop-shadow-xl bg-[#FAFAFA] rounded-3xl m-10  py-[9rem] px-[6.063rem] text-center gap-6  items-center">
        <h1 className=" text-[#4AA3BA] font-bold text-4xl ">
          {user?.business_name}
        </h1>
        <p>{user?.email}</p>
        <p>{user?.phone_number}</p>
        <p className="w-60">{user?.address}</p>
      </div>
      <div className=" flex justify-end">
        <Button
          id="back"
          label="Kembali"
          buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
          onClick={() => navigate("/landing")}
        />
        <Button
          id="edit-profile"
          label="Edit Profil"
          buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
          onClick={() => navigate("/edit-tenant")}
        />
      </div>
    </Layout>
  );
};
