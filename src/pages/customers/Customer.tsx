import { IDLE_NAVIGATION } from "@remix-run/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import { useTitle } from "../../utils/Title";
import CustomerEdit from "./CustomerEdit";

interface CustType {
  id: number;
  email: string;
  business_name: string;
  phone_number: number;
  address: string;
}

const Customer = () => {
  useTitle("Sirloin-Customer Tenant");
  const [customer, setCustomer] = useState<CustType[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    listCustomer();
  }, [refresh]);

  function listCustomer() {
    axios
      .get("https://bluepath.my.id/customers")
      .then((customer) => {
        const { data } = customer.data;
        console.log(data);
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

  // function deleteProduct(id: number) {
  //   axios
  //     .delete(`https://bluepath.my.id/customer/${id}`)
  //     .then((response) => {
  //       Swal.fire({
  //         title: "Berhasil",
  //         text: response.data.message,
  //         icon: "success",
  //         confirmButtonAriaLabel: "ok",
  //       });
  //       setRefresh(!refresh);
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         title: "Gagal",
  //         text: error.response.data.message,
  //         icon: "error",
  //         confirmButtonAriaLabel: "ok",
  //       });
  //     });
  // }

  return (
    <Layout>
      <div className="flex flex-row justify-between m-10">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">Daftar Customer</h3>
        <Button
          id="add-custumer"
          label="Tambah Customer"
          buttonSet="bg-[#4AA3BA] border-none capitalize w-48"
          onClick={() => navigate("/add-customer")}
        />
      </div>

      <div className="overflow-x-auto m-10">
        <table className="table w-full px-10">
          <thead>
            <tr>
              <th>Nama Customer</th>
              <th>Alamat</th>
              <th>Nomor Telephone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer, index) => (
              <tr key={index}>
                <td>{customer.business_name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone_number}</td>
                <td>{customer.email}</td>
                <td className="flex col-span-2">
                  {/* <button id="del-product" className="btn btn-ghost btn-square">
                    <FiTrash2
                      size="20"
                      color="red"
                      onClick={() => deleteProduct(customer.id)}
                    />
                  </button> */}
                  <button
                    id="edit-custumer"
                    className="btn btn-ghost btn-square"
                  >
                    <FiEdit
                      size="20"
                      color="teal"
                      onClick={() => navigate(`/edit-customer/${customer.id}`)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Customer;
