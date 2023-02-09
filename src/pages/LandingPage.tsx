import { Layout } from "../components/Layout";
import { FiSearch } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../utils/types/sirloin";
import { useNavigate } from "react-router-dom";
import Swal from "../utils/Swal";
import { useCookies } from "react-cookie";
import { SkeletonLoading } from "../components/Loading";
import { useTitle } from "../utils/Title";

export const LandingPage = () => {
  useTitle("Sirloin - Sistem Kasir Online");
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
  const [isHidden, setIsHidden] = useState(false);
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchDataProducts();
    if (cookie.id == 1) {
      setIsHidden(true);
    }
  }, [searchValue]);

  useEffect(() => {
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
        setDatas(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setLoading(false));
  }

  const onClickProduct = (data: ProductsType) => {
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
    axios
      .get(`https://bluepath.my.id/customers/${num}`)
      .then((product) => {
        const { data } = product.data;
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
      <div className="w-full flex font-medium ">
        <div className=" p-10  w-full bg-[#FAFAFA] h-screen ">
          <div className="flex justify-between ">
            {cookie.id != 1 ? (
              <h3 className="font-bold text-3xl text-[#4AA3BA]">
                Product Toko
              </h3>
            ) : (
              <h3 className="font-bold text-3xl text-[#4AA3BA]">
                Product Super Admin
              </h3>
            )}
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
                id="icon-product"
                className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
          <div className="grid grid-cols-4  gap-4 mt-20 pb-10 sm:grid-cols-2 lg:grid-cols-4">
            {loading
              ? [...Array(20).keys()].map((data) => (
                  <SkeletonLoading key={data} />
                ))
              : datas.map((data) => (
                  <div
                    key={data.id}
                    id={`select-product-${data.id}`}
                    className="flex flex-col text-center   items-center border rounded-2xl shadow-lg h-[28rem] gap-2 pt-5 bg-white cursor-pointer"
                    onClick={() => {
                      onClickProduct(data);
                    }}
                  >
                    {data.product_image === "" ? (
                      <img
                        src="https://i.pinimg.com/564x/2c/4b/7f/2c4b7f4b0cb5ae1f3879ec36eb64386b.jpg"
                        alt="product"
                        className="w-56 m-3 rounded"
                      />
                    ) : (
                      <img
                        src={data.product_image}
                        alt="product"
                        className="w-56 "
                      />
                    )}

                    <p className="font-bold text-xl text-[#4AA3BA]">
                      {data.product_name}
                    </p>
                    <p>
                      Rp.{" "}
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      .-
                    </p>
                    <p className="text-sm text-teal-800">Stock: {data.stock}</p>
                  </div>
                ))}
          </div>
        </div>
        <div className="p-10 w-1/3  md:w-2/3 lg:w-1/3 " hidden={isHidden}>
          <h3 className="font-bold text-3xl text-[#4AA3BA] mb-20">Keranjang</h3>
          {carts.length === 0 ? (
            <div className="text-center text-lg text-[#a0a0a0]">
              <a href="">Select Product</a>
            </div>
          ) : (
            <div className="md:text-xs lg:text-base">
              {carts.map((cart, index) => (
                <div key={index} className="grid grid-flow-row  gap-4 mb-7 ">
                  <div className="flex  border rounded-2xl shadow-lg p-1">
                    {cart.product_image === "" ? (
                      <img
                        src="https://i.pinimg.com/564x/2c/4b/7f/2c4b7f4b0cb5ae1f3879ec36eb64386b.jpg"
                        alt="product"
                        className="h-32 m-3 rounded"
                      />
                    ) : (
                      <img
                        src={cart.product_image}
                        alt="product"
                        className="h-32 w-32 p-1"
                      />
                    )}
                    <div className=" flex flex-col p-3 justify-between ">
                      <p className="font-bold text-xl md:text-base lg:text-xl text-[#4AA3BA]">
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
                        <div className="flex items-center rounded-xl border-2 w-28 md:w-20 lg:w-28 divide-x border-gray-300">
                          <button
                            id="inc-product"
                            className="text-xl w-9 bg-white hidden lg:flex lg:px-2 rounded-l-xl md:hidden"
                            onClick={() => {
                              handleIncCart(index);
                            }}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            id="cart_quantity"
                            name="cart_quantity"
                            className="w-12 text-center md:w-full lg:w-12"
                            value={cart.quantity}
                            onChange={(e) => {
                              const updatedCart = [...carts];
                              updatedCart[index].quantity = parseInt(
                                e.target.value
                              );
                              setCarts(updatedCart);
                            }}
                          ></input>
                          <button
                            id="dec-product"
                            className="text-xl w-9 bg-white hidden lg:flex lg:px-2 rounded-r-xl md:hidden"
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
                  <p className="font-bold text-xl md:text-sm lg:text-xl text-[#4AA3BA]">
                    Total Belanja
                  </p>
                  <p className="font-bold text-xl md:text-sm lg:text-xl">
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
