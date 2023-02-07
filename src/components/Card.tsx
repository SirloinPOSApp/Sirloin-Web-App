import React, { FC } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Product from "../pages/products/Product";
import Button from "./Button";

interface CardProps {
  id: number;
  product_name: string;
  product_image: string;
  stock: number;
  price: number;
  onClickCart?: () => void;
}

export const CardEtalase: FC<CardProps> = ({
  product_name,
  product_image,
  stock,
  price,
  id,
  onClickCart,
}) => {
  return (
    <div className="card shadow-lg h-96 bg-white" id={`${id}`}>
      <figure>
        <img src={`${product_image}`} alt="product" className="w-64 p-5" />
      </figure>
      <div className="card-normal mx-5 my-3">
        <h2 className="card-title text-[#4AA3BA] font-bold">{product_name}</h2>
        <p className="text-sm">{stock}</p>
        <p className="font-bold text-lg py-2">{`Rp.${price}`}</p>
      </div>
      <div className="card-actions m-5 justify-end">
        <Button
          id={`select-product-${id}`}
          label="Beli"
          buttonSet="btn-sm w-32 bg-[#4AA3BA] border-none"
          onClick={onClickCart}
        />
      </div>
    </div>
  );
};
