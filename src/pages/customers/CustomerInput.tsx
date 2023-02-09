import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { Input, TextArea } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { useTitle } from "../../utils/Title";

const CustomerInput = () => {
  useTitle("Sirloin - Tambah Customer Tenant");
  const [isDisable, setIsDisable] = useState(true);
  const navigate = useNavigate();

  const [formCust, setFormCust] = useState({
    id: -0,
    name: "",
    email: "",
    phone_number: "",
    address: "",
  });

  useEffect(() => {
    if (
      formCust.name === "" ||
      formCust.email === "" ||
      formCust.phone_number === "" ||
      formCust.address === ""
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formCust]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData();

    formData.append("name", formCust.name);
    formData.append("email", formCust.email);
    formData.append("phone_number", formCust.phone_number);
    formData.append("address", formCust.address);

    axios
      .post("https://bluepath.my.id/customers", formData)
      .then((response) => {
        Swal.fire({
          title: "Berhasil",
          text: response.data.message,
          icon: "success",
          confirmButtonAriaLabel: "ok",
        });
        navigate("/customer");
      })
      .catch((error) => {
        Swal.fire({
          title: "Gagal",
          text: error.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  };

  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Tambah Customer
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row m-5 justify-center"
      >
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="name"
              label="Nama Customer"
              name="name"
              type="text"
              placeholder="Nama Lengkap"
              onChange={(e) =>
                setFormCust({
                  ...formCust,
                  name: e.target.value,
                })
              }
              value={formCust.name}
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="email"
              label="Email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              onChange={(e) =>
                setFormCust({
                  ...formCust,
                  email: e.target.value,
                })
              }
              value={formCust.email}
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="phone_number"
              label="Nomor_Telephone"
              name="phone_number"
              type="number"
              placeholder="0912XXXXX"
              onChange={(e) =>
                setFormCust({
                  ...formCust,
                  phone_number: e.target.value,
                })
              }
              value={formCust.phone_number}
            />
          </div>

          <div className="flex flex-col py-2">
            <TextArea
              id="address"
              label="Alamat"
              name="addres"
              placeholder="Alamat"
              onChange={(e) =>
                setFormCust({
                  ...formCust,
                  address: e.target.value,
                })
              }
              value={formCust.address}
            />
          </div>
          <div className="flex flex-row">
            <Button
              id="back"
              label="Kembali"
              buttonSet="w-40 text-[#DA5C53] my-3 mr-10 btn-outline"
              onClick={() => navigate("/customer")}
            />
            <Button
              id="save"
              type="submit"
              disabled={isDisable}
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
