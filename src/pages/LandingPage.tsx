import React from "react";
import { Layout } from "../components/Layout";
import { FiSearch } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { Input } from "../components/Input";
import Button from "../components/Button";

export const LandingPage = () => {
  return (
    <Layout>
      <div className="w-full flex font-medium">
        <div className=" p-10  w-3/4 bg-[#FAFAFA] h-screen ">
          <div className="flex justify-between ">
            <h3 className="font-bold text-3xl text-[#4AA3BA]">Product Toko</h3>
            <form className=" relative w-64 ">
              <input
                id="input-product"
                name="search"
                placeholder="cari barang"
                className="p-3 placeholder-[#9CA3AF] drop-shadow-lg rounded-lg w-64 border"
              />
              <FiSearch
                id="search-product"
                className="absolute top-3 right-3 w-6 h-6 "
              />
            </form>
          </div>
          <div className="grid grid-cols-4  gap-4 mt-20">
            <div
              id="select-product"
              className="flex flex-col text-center content-center justify-center items-center border rounded-2xl shadow-lg h-96 gap-2 bg-white"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="w-64 "
              />
              <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
              <p>Rp. 3500.-</p>
            </div>
            <div
              id="select-product"
              className="flex flex-col text-center content-center justify-center items-center border rounded-2xl shadow-lg h-96 gap-2 bg-white"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="w-64 "
              />
              <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
              <p>Rp. 3500.-</p>
            </div>
            <div
              id="select-product"
              className="flex flex-col text-center content-center justify-center items-center border rounded-2xl shadow-lg h-96 gap-2 bg-white"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="w-64 "
              />
              <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
              <p>Rp. 3500.-</p>
            </div>
            <div
              id="select-product"
              className="flex flex-col text-center content-center justify-center items-center border rounded-2xl shadow-lg h-96 gap-2 bg-white"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="w-64 "
              />
              <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
              <p>Rp. 3500.-</p>
            </div>
          </div>
        </div>
        <div className="p-10 w-1/4">
          <h3 className="font-bold text-3xl text-[#4AA3BA] mb-20">Keranjang</h3>
          <div className="grid grid-flow-row  gap-4 mb-7">
            <div className="flex  border rounded-2xl shadow-lg p-1 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="h-32 "
              />
              <div className=" flex flex-col p-3 justify-between">
                <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
                <p>Rp. 3500.-</p>
                <div className="flex gap-5">
                  <div className="flex items-center rounded-xl border-2 w-28 divide-x border-gray-300">
                    <button className="text-xl w-9 bg-white  rounded-l-xl">
                      +
                    </button>
                    <p className=" w-12 text-center">20</p>
                    {/* <input type="number" className="w-14 px-3" /> */}
                    <button className="text-xl w-9 bg-white text-center rounded-r-xl">
                      -
                    </button>
                  </div>
                  <HiOutlineTrash className="w-7 h-7 text-[#DA5C53] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row  gap-4 mb-7">
            <div className="flex  border rounded-2xl shadow-lg p-1 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="h-32 "
              />
              <div className=" flex flex-col p-3 justify-between">
                <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
                <p>Rp. 3500.-</p>
                <div className="flex gap-5">
                  <div className="flex items-center rounded-xl border-2 w-28 divide-x border-gray-300">
                    <button
                      id="inc-product"
                      className="text-xl w-9 bg-white  rounded-l-xl"
                    >
                      +
                    </button>
                    <p className=" w-12 text-center">20</p>
                    <button
                      id="dec-product"
                      className="text-xl w-9 bg-white text-center rounded-r-xl"
                    >
                      -
                    </button>
                  </div>
                  <HiOutlineTrash
                    id="del-product"
                    className="w-7 h-7 text-[#DA5C53] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row  gap-4 mb-7">
            <div className="flex  border rounded-2xl shadow-lg p-1 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="product"
                className="h-32 "
              />
              <div className=" flex flex-col p-3 justify-between">
                <p className="font-bold text-xl text-[#4AA3BA]">Nama Product</p>
                <p>Rp. 3500.-</p>
                <div className="flex gap-5">
                  <div className="flex items-center rounded-xl border-2 w-28 divide-x border-gray-300">
                    <button
                      id="inc-product"
                      className="text-xl w-9 bg-white  rounded-l-xl"
                    >
                      +
                    </button>
                    <p className=" w-12 text-center">20</p>
                    <button
                      id="dec-product"
                      className="text-xl w-9 bg-white text-center rounded-r-xl"
                    >
                      -
                    </button>
                  </div>
                  <HiOutlineTrash
                    id="del-product"
                    className="w-7 h-7 text-[#DA5C53] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-control w-full">
            <form className="input-group">
              <input
                type="text"
                id="input-member"
                name="no-member"
                className="rounded-lg bg-white p-3 border-2 focus:outline-none text-black w-full"
                placeholder="No. member"
              ></input>
              <Button
                id="select-member"
                type="submit"
                label="member"
                buttonSet="h-full py-5 bg-[#306D75] capitalize border-none"
              />
            </form>
          </div>
          <div className="bg-[#F7F6F6] mt-7 rounded-xl py-10 px-9 flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="font-medium">Sub Total</p>
              <p>Rp. 31.000</p>
            </div>
            <div className="flex justify-between">
              <p>Diskon Member</p>
              <p>Rp. 3.000</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-xl text-[#4AA3BA]">Total Belanja</p>
              <p className="font-bold text-xl ">Rp. 28.000</p>
            </div>
          </div>
          <Button
            id="order"
            type="submit"
            label="Bayar"
            buttonSet="w-full bg-[#306D75] capitalize border-none mt-7 text-lg h-14"
          />
        </div>
      </div>
    </Layout>
  );
};
