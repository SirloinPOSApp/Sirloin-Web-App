import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Button from "../components/Button";
import { Layout } from "../components/Layout";

const Customer = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-between m-5">
        <h3 className="font-bold text-2xl text-[#4AA3BA]">Daftar Customer</h3>
        <Button
          label="Tambah Customer"
          buttonSet="bg-[#4AA3BA] border-none capitalize w-48"
        />
      </div>

      <div className="overflow-x-auto">
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
            <tr>
              <th>Joko</th>
              <td>Jl.kenari no.25</td>
              <td>0812345678910</td>
              <td>joko@mail.com</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>Reyhand</th>
              <td>Jl.kenanga no.25</td>
              <td>0812345678910</td>
              <td>reyhan@mail.com</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>Mega</th>
              <td>Jl.mawar no.25</td>
              <td>0812345678910</td>
              <td>mega@mail.com</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>Ayu</th>
              <td>Jl.Kintamani no.25</td>
              <td>0812345678910</td>
              <td>Ayu@mail.com</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>

            <tr>
              <th>Cahya</th>
              <td>Jl.Melati no.25</td>
              <td>0812345678910</td>
              <td>Cahya@mail.com</td>
              <td className="flex col-span-2">
                <button className="btn btn-ghost btn-square">
                  <FiTrash2 size="20" color="red" />
                </button>
                <button className="btn btn-ghost btn-square">
                  <FiEdit size="20" color="teal" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Customer;
