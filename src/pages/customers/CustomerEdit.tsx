import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { Input, TextArea } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { useTitle } from "../../utils/Title";
import { CustType } from "../../utils/types/sirloin";

const CustomerEdit = () => {
  useTitle("Sirloin - Edit Customer Tenant");
  const [customer, setCustomer] = useState<CustType>();
  const { customer_id } = useParams();
  const navigate = useNavigate();

  const [formCust, setFormCust] = useState({
    id: -0,
    name: "",
    email: "",
    phone_number: 0,
    address: "",
  });

  useEffect(() => {
    if (customer) {
      setFormCust({
        id: customer.id,
        name: customer.business_name,
        email: customer.email,
        phone_number: customer.phone_number,
        address: customer.address,
      });
    }
  }, [customer]);

  useEffect(() => {
    Customer();
  }, []);

  function Customer() {
    axios
      .get(`https://bluepath.my.id/customers/${customer_id}`)
      .then((customer) => {
        const { data } = customer.data;
        setCustomer(data);
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

  const handleChange = (event: any) => {
    setFormCust({
      ...formCust,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData();

    formData.append("name", formCust.name);
    formData.append("email", formCust.email);
    formData.append("phone_number", formCust.phone_number);
    formData.append("address", formCust.address);

    axios
      .put(`https://bluepath.my.id/customers/${customer_id}`, formData)
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
        Edit Customer
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row m-5 justify-center"
      >
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              type={"text"}
              placeholder="Nama Lengkap"
              onChange={handleChange}
              value={formCust.name}
              id="name"
              label="Nama Customer"
              name="name"
            />
          </div>
          <div className="flex flex-col py-2">
            <Input
              id="email"
              label="Email"
              name="email"
              type={"email"}
              placeholder="email"
              onChange={handleChange}
              value={formCust.email}
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <Input
              id="phone_number"
              label="No.Telephone"
              name="phone_number"
              type={"number"}
              placeholder="0912XXXXX"
              onChange={handleChange}
              value={formCust.phone_number}
            />
          </div>

          <div className="flex flex-col py-2">
            <TextArea
              id="address"
              label="Alamat"
              name="address"
              placeholder="25000"
              onChange={handleChange}
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
              id="save-customer"
              type="submit"
              label="Simpan"
              buttonSet="w-40 text-white bg-teal-700 my-3 mr-10 border-none"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default CustomerEdit;
