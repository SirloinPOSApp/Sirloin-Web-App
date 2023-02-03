import React from "react";
import Button from "../components/Button";
import { CardEtalase } from "../components/Card";
import { Layout } from "../components/Layout";

const Etalase = () => {
  return (
    <Layout>
      <div className="card-actions m-10 justify-end">
        <Button
          label="Keranjang"
          buttonSet="btn-sm w-48 h-12 bg-teal-700 border-none"
        />
      </div>
      <div className="grid grid-cols-5 auto-cols-max gap-5 m-5">
        <CardEtalase />
        <CardEtalase />
        <CardEtalase />
        <CardEtalase />
        <CardEtalase />
        <CardEtalase />
        <CardEtalase />
      </div>
    </Layout>
  );
};

export default Etalase;
