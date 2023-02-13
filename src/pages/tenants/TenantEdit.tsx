import Button from "../../components/Button";
import { Input, TextArea } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../../utils/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { userType } from "../../utils/types/sirloin";
import { useCookies } from "react-cookie";

export const TenantEdit = () => {
  useTitle("Sirloin - Edit Profil Tenant");
  const MySwal = withReactContent(Swal);
  useTitle("Sirloin-Profil Tenant");
  const [user, setUser] = useState<userType>();
  const [formUser, setFormUser] = useState({
    id: -0,
    business_name: "",
    email: "",
    phone_number: 0,
    address: "",
    password: "",
  });
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormUser({
        id: user.id,
        business_name: user.business_name,
        email: user.email,
        phone_number: user.phone_number,
        address: user.address,
        password: "",
      });
    }
  }, [user]);

  useEffect(() => {
    fetchDataProfile();
  }, []);

  function fetchDataProfile() {
    axios
      .get("https://bluepath.my.id/users")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  }

  const handleChange = (event: any) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData();
    formData.append("business_name", formUser.business_name);
    formData.append("email", formUser.email);
    formData.append("phone_number", formUser.phone_number);
    formData.append("address", formUser.address);
    if (formUser.password != "") {
      formData.append("password", formUser.password);
    }
    axios
      .put(`https://bluepath.my.id/users`, formData)
      .then((response) => {
        MySwal.fire({
          title: "Berhasil",
          text: response.data.message,
          icon: "success",
          confirmButtonAriaLabel: "ok",
        });
        navigate(`/profile-tenant`);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  };

  return (
    <Layout>
      {cookie.id != 1 ? (
        <h3 className="font-bold text-2xl m-10 text-[#4AA3BA]">
          Update Profil Tenant
        </h3>
      ) : (
        <h3 className="font-bold text-2xl m-10 text-[#4AA3BA]">
          Update Profil Super Admin
        </h3>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-row m-5 justify-center"
      >
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="business_name"
              name="business_name"
              label="Nama Bisnis/Toko"
              placeholder="Nama Bisnis/Toko"
              type={"text"}
              onChange={handleChange}
              value={formUser.business_name}
            ></Input>
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              type={"email"}
              onChange={handleChange}
              value={formUser.email}
            ></Input>
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
              type={"password"}
              onChange={handleChange}
              value={formUser.password}
            ></Input>
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="phone_number"
              name="phone_number"
              label="No. Telephone"
              placeholder="0912XXXXX"
              type={"number"}
              onChange={handleChange}
              value={formUser.phone_number}
            ></Input>
          </div>

          <div className="flex flex-col py-2">
            <TextArea
              id="address"
              name="address"
              label="Alamat"
              rows={5}
              onChange={handleChange}
              value={formUser.address}
            />
          </div>
          <div className="flex flex-row">
            <Link to={`/profile-tenant`}>
              <Button
                id="back"
                label="Kembali"
                buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
              />
            </Link>
            <Button
              type="submit"
              id="save-profile"
              label="Simpan"
              buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};
