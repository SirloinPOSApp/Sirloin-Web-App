import React from "react";
import Button from "../../components/Button";
import { Layout } from "../../components/Layout";

export const TransaksiDetail = () => {
  return (
    <Layout>
      <h3 className="flex m-10 font-bold text-2xl text-[#4AA3BA]">
        Detail Transaksi
      </h3>
      <div className="rounded-xl border m-10 p-5 mx-40 shadow-lg font-medium text-lg">
        <div className="relative text-[#306D75]">
          <h1 className="border-b-2 font-bold text-xl pb-5 mb-4">
            Pesanan Selesai
          </h1>
          <p className="absolute top-[-0.5rem] left-0 ml-[-1.5rem] text-5xl">
            l
          </p>
        </div>
        <div className="flex justify-between font-semibold mb-4">
          <p>INV/20230123/MPL/0001</p>
          <p>Invoice</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Nama Pembeli</p>
          <p>King Jungle</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Tanggal Pembelian</p>
          <p>23 Jan 2023, 15:37 WIB</p>
        </div>
        <h1 className="flex my-10  text-xl font-bold">Detail Transaksi</h1>
        <div className="flex flex-col border rounded-xl py-5 px-10 shadow-lg mb-7">
          <div className="flex justify-between content-between items-end">
            <div className="flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="w-36"
              />
              <p className="font-semibold text-xl">Nama Product</p>
            </div>
            <div>
              <p>2 x Rp. 3.500</p>
            </div>
          </div>
          <div className="flex justify-end mt-5 pt-5 border-t">
            <p className="font-bold text-xl">Total Harga : Rp: 7000</p>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl py-5 px-10 shadow-lg mb-7">
          <div className="flex justify-between content-between items-end">
            <div className="flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="w-36"
              />
              <p className="font-semibold text-xl">Nama Product</p>
            </div>
            <div>
              <p>2 x Rp. 3.500</p>
            </div>
          </div>
          <div className="flex justify-end mt-5 pt-5 border-t">
            <p className="font-bold text-xl">Total Harga : Rp: 7000</p>
          </div>
        </div>
        <h1 className="flex my-10  text-xl font-bold">Rincian Pembayaran</h1>
        <div className="flex flex-col items-end">
          <div className="flex justify-between mb-4 border-b pb-4 w-1/2">
            <p>Metode Pembayaran</p>
            <p>Tunai</p>
          </div>
          <div className="flex justify-between mb-4 w-1/2">
            <p>Total Harga (4 barang)</p>
            <p>Rp. 14.000</p>
          </div>
          <div className="flex justify-between mb-4 border-b pb-4 w-1/2">
            <p>Diskon</p>
            <p>-Rp. 1.400</p>
          </div>
          <div className="flex justify-between mb-4 text-xl font-bold mt-7 w-1/2">
            <p>Total Belanja</p>
            <p>Rp. 12.600</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            id="cancel-order"
            label="Batalkan Order"
            buttonSet="w-48 h-16 text-white bg-teal-700 mt-7 border-none bg-[#DA5C53] capitalize "
          />
        </div>
      </div>
    </Layout>
  );
};
