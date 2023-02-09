import { IDLE_NAVIGATION } from "@remix-run/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";
import { SkeletonLoadingTabel } from "../../components/Loading";
import { useTitle } from "../../utils/Title";
import { CustType } from "../../utils/types/sirloin";

const Customer = () => {
  useTitle("Sirloin - Customer Tenant");
  const [customer, setCustomer] = useState<CustType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    listCustomer();
  }, [refresh]);

  function listCustomer() {
    axios
      .get("https://bluepath.my.id/customers")
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
      })
      .finally(() => setLoading(false));
  }

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
              <th>No. Member</th>
              <th>Alamat</th>
              <th>Nomor Telephone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? [...Array(20).keys()].map((customer) => (
                  <SkeletonLoadingTabel key={customer} />
                ))
              : customer.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.business_name}</td>
                    <td>{customer.id}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phone_number}</td>
                    <td>{customer.email}</td>
                    <td className="flex col-span-2">
                      <button
                        id={`customer-${customer.id}`}
                        className="btn btn-ghost btn-square"
                        onClick={() =>
                          navigate(`/edit-customer/${customer.id}`)
                        }
                      >
                        <FiEdit size="20" color="teal" />
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
