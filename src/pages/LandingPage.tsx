import React from "react";
import { Layout } from "../components/Layout";
import { FiSearch } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { Input } from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../utils/types/sirloin";
import { FC } from "react";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";

export const LandingPage = () => {
  const [datas, setDatas] = useState<ProductsType[]>([]);
  const [carts, setCarts] = useState<ProductsType[]>([]);
  const [summary, setSummary] = useState({
    customer_id: -1,
    sub_total: 0,
    discount: 0,
    total: 0,
  });
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [customerId, setCustomerId] = useState(0);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetchDataProducts();
  }, [searchValue]);

  useEffect(() => {
    // console.log("carts", carts);
    const sub_total = carts.reduce(
      (acc, cart) => acc + cart.price * (cart.quantity || 0),
      0
    );
    const discount = 0;
    const total = sub_total - discount;
    setSummary((prevState) => ({
      ...prevState,
      sub_total,
      discount,
      total,
    }));
    if (summary.customer_id > 0) {
      const sub_total = carts.reduce(
        (acc, cart) => acc + cart.price * (cart.quantity || 0),
        0
      );
      const discount = sub_total * 0.1;
      const total = sub_total - discount;
      setSummary((prevState) => ({
        ...prevState,
        sub_total,
        discount,
        total,
      }));
    }

    if (carts.length == 0) {
      setSummary({
        ...summary,
        customer_id: 0,
        discount: 0,
        total: summary.sub_total,
      });
    }
  }, [carts]);

  function fetchDataProducts() {
    axios
      .get(`https://bluepath.my.id/products?search=${searchValue}`)
      .then((res) => {
        // console.log(res.data.data);
        setDatas(res.data.data);
      })
      .catch((err) => {
        // alert(err.toString());
        alert(err.response.data.message);
      });
  }

  const onClickProduct = (data: ProductsType) => {
    // console.log(data);
    const existingProductIndex = carts.findIndex((cart) => cart.id === data.id);
    if (existingProductIndex !== -1) {
      const existingProduct = carts[existingProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: (existingProduct.quantity || 0) + 1,
      };
      setCarts([
        ...carts.slice(0, existingProductIndex),
        updatedProduct,
        ...carts.slice(existingProductIndex + 1),
      ]);
    } else {
      setCarts([...carts, { ...data, quantity: 1 }]);
    }
  };

  const handleIncCart = (index: number) => {
    setCarts((prevCarts) => {
      const newCarts = [...prevCarts];
      newCarts[index].quantity++;
      return newCarts;
    });
  };

  const handleDecCart = (index: number) => {
    setCarts((prevCarts) => {
      const newCarts = [...prevCarts];
      newCarts[index].quantity--;
      if (newCarts[index].quantity == 0) {
        setCarts((prevCarts) =>
          prevCarts.filter((cart, indexx) => indexx !== index)
        );
      }
      return newCarts;
    });
  };

  const handleRemoveCart = (index: number) => {
    setCarts((prevCarts) =>
      prevCarts.filter((cart, indexx) => indexx !== index)
    );
    setCustomerId(0);
  };

  const handleSubmit = () => {
    localStorage.setItem("carts", JSON.stringify(carts));
    localStorage.setItem("summary", JSON.stringify(summary));
    navigate(`/pembayaran_detail`);
  };

  const handleAddMember = (num: any) => {
    console.log("num", num);
    axios
      .get(`https://bluepath.my.id/customers/${num}`)
      .then((product) => {
        const { data } = product.data;
        console.log(data);
        if (num > 0) {
          setSummary({
            ...summary,
            customer_id: num,
            discount: summary.sub_total * 0.1,
            total: summary.sub_total - summary.sub_total * 0.1,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Gagal",
          text: error.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
        setSummary({
          ...summary,
          customer_id: 0,
          discount: 0,
          total: summary.sub_total,
        });
      });
  };

  return (
    <Layout>
      <div className="w-full flex font-medium">
        <div className=" p-10  w-3/4 bg-[#FAFAFA] h-screen ">
          <div className="flex justify-between ">
            <h3 className="font-bold text-3xl text-[#4AA3BA]">Product Toko</h3>
            <div className=" relative w-64 ">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                id="input-product"
                name="search"
                type={"text"}
                placeholder="cari barang"
                className="p-3 placeholder-[#9CA3AF] drop-shadow-lg rounded-lg w-64 border"
              />
              <FiSearch
                // type="submit"
                id="icon-product"
                className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
          <div className="grid grid-cols-4  gap-4 mt-20">
            {datas.map((data) => (
              <div
                key={data.id}
                id={`select-product-${data.id}`}
                className="flex flex-col text-center content-center justify-center items-center border rounded-2xl shadow-lg h-96 gap-2 bg-white cursor-pointer"
                onClick={() => {
                  onClickProduct(data);
                }}
              >
                {data.product_image === "" ? (
                  <img
                    src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="product"
                    className="w-64 h-64"
                  />
                ) : (
                  <img
                    src={data.product_image}
                    alt="product"
                    className="w-64 h-64"
                  />
                )}
                <p className="font-bold text-xl text-[#4AA3BA]">
                  {data.product_name}
                </p>
                <p>
                  Rp.{" "}
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  .-
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-10 w-1/4">
          <h3 className="font-bold text-3xl text-[#4AA3BA] mb-20">Keranjang</h3>
          {carts.length === 0 ? (
            <div className="text-center text-lg text-[#a0a0a0]">
              <a href="">Select Product</a>
            </div>
          ) : (
            <div>
              {carts.map((cart, index) => (
                <div key={index} className="grid grid-flow-row  gap-4 mb-7">
                  <div className="flex  border rounded-2xl shadow-lg p-1 ">
                    {cart.product_image === "" ? (
                      <img
                        src="https://s3-alpha-sig.figma.com/img/087e/7d99/bb4c9304728e8dcb2d6d815e2e44c4f5?Expires=1676246400&Signature=B2b~0n6LoIUHyBFrVZgujcgTh5jRsM4i3Vu7jAAXnsgOLdViDJtCjrut93dZ5lV~zEq18jWE17MWrCqcfIM8e-FAjJ9oVI3BGfW1RermqxD2XR3jDdq2DxpVTrDSrflXxYRI0H5ySpfDgjTLNv2PD3rBA8KXm6sSSklVGLpWJ310V97jFBLwnUeF5IY6Led-x-vfoZPFqtB4ohNBwBKFJiEXpQTRTDeDcQY7w4SbQtDb7yfPeOBKCxduxld3hmw8qy4JZINfs8UDaweLO4~HBKuWi-HRAo7EXsoZeipWupaICpWZHijVoljJdADPftLf~pFsAMAzvSo6rhc~poPHaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="product"
                        className="h-32 "
                      />
                    ) : (
                      <img
                        src={cart.product_image}
                        alt="product"
                        className="h-32 w-32 p-1"
                      />
                    )}
                    <div className=" flex flex-col p-3 justify-between">
                      <p className="font-bold text-xl text-[#4AA3BA]">
                        {cart.product_name}
                      </p>
                      <p>
                        Rp.{" "}
                        {cart.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        .-
                      </p>
                      <div className="flex gap-5">
                        <div className="flex items-center rounded-xl border-2 w-28 divide-x border-gray-300">
                          <button
                            id="inc-product"
                            className="text-xl w-9 bg-white  rounded-l-xl"
                            onClick={() => {
                              handleIncCart(index);
                            }}
                          >
                            +
                          </button>
                          <p className=" w-12 text-center">{cart.quantity}</p>
                          <button
                            id="dec-product"
                            className="text-xl w-9 bg-white text-center rounded-r-xl"
                            onClick={() => {
                              handleDecCart(index);
                            }}
                          >
                            -
                          </button>
                        </div>
                        <HiOutlineTrash
                          id="del-product"
                          className="w-7 h-7 text-[#DA5C53] cursor-pointer"
                          onClick={() => {
                            handleRemoveCart(index);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="form-control w-full">
                <div className="input-group">
                  <input
                    type="number"
                    id="customer_id"
                    name="customer_id"
                    className="rounded-lg bg-white p-3 border-2 focus:outline-none text-black w-full"
                    placeholder="No. member"
                    onChange={(e) => setCustomerId(parseInt(e.target.value))}
                  ></input>
                  <Button
                    onClick={() => handleAddMember(customerId)}
                    id="select-member"
                    type="submit"
                    label="member"
                    buttonSet="h-full py-5 bg-[#306D75] capitalize border-none"
                  />
                </div>
              </div>
              <div className="bg-[#F7F6F6] mt-7 rounded-xl py-10 px-9 flex flex-col gap-6">
                <div className="flex justify-between">
                  <p className="font-medium">Sub Total</p>
                  <p>
                    Rp.{" "}
                    {summary.sub_total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Diskon Member</p>
                  <p>
                    -Rp.{" "}
                    {summary.customer_id > 0
                      ? (summary.sub_total * 0.1)
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      : summary.discount
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-xl text-[#4AA3BA]">
                    Total Belanja
                  </p>
                  <p className="font-bold text-xl ">
                    Rp.{" "}
                    {summary.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
              </div>
              <Button
                id="order"
                type="submit"
                label="Bayar"
                buttonSet="w-full bg-[#306D75] capitalize border-none mt-7 text-lg h-14"
                onClick={() => handleSubmit()}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
