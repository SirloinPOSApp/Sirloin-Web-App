import React, { FC } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Button from "./Button";

interface CardProps {
  id?: number;
  product_name?: string;
  product_image?: string;
  stok?: number;
  price?: number;
}

export const CardEtalase: FC<CardProps> = ({
  product_name,
  product_image,
  stok,
  price,
  id,
}) => {
  return (
    <div className="card shadow-lg h-96 bg-white">
      <figure>
        <img
          src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="product"
          className="w-64 p-5"
        />
      </figure>
      <div className="card-normal mx-5 my-3">
        <h2 className="card-title text-[#4AA3BA] font-bold">Tepung Terigu</h2>
        <p className="text-sm">Stok:10</p>
        <p className="font-bold text-lg py-2">Rp. 10.000</p>
      </div>
      <div className="card-actions m-5 justify-end">
        <Button
          id={`select-product-${id}`}
          label="Beli"
          buttonSet="btn-sm w-32 bg-[#4AA3BA] border-none"
        />
      </div>
    </div>
  );
};
