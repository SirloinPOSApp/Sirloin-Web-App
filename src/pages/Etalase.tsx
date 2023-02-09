import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../components/Button";
import { CardEtalase } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { ProductsType } from "../utils/types/sirloin";
import axios from "axios";
import Swal from "../utils/Swal";
import { SkeletonLoadingEtalase } from "../components/Loading";
import { useTitle } from "../utils/Title";

export const Etalase = () => {
  useTitle("Sirloin - Etalase Belanja");
  const [product, setProduct] = useState<ProductsType[]>([]);
  const [carts, setCarts] = useState<ProductsType[]>([]);
  const [summary, setSummary] = useState({
    sub_total: 0,
    discount: 0,
    total: 0,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    listProducts();
  }, []);

  useEffect(() => {
    const sub_total = carts.reduce(
      (acc, cart) => acc + cart.price * (cart.quantity || 0),
      0
    );
    const total = sub_total - summary.discount;
    setSummary((prevState) => ({ ...prevState, sub_total }));
    setSummary((prevState) => ({ ...prevState, total }));
  }, [carts]);

  function listProducts() {
    axios
      .get(`https://bluepath.my.id/products/admin`)
      .then((product) => {
        const { data } = product.data;
        setProduct(data);
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
  };

  function orderProduct() {
    const data: any = {
      items: carts.map((cart) => ({
        product_id: cart.id,
        quantity: cart.quantity,
        price: cart.price,
      })),
    };
    Swal.fire({
      title: `Total order: Rp. ${summary.total
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`,
      text: "Apakah Anda yakin dengan ordernya?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Order",
    }).then((result) => {
      if (result.value) {
        axios
          .post(`https://bluepath.my.id/transactions/buy`, data)
          .then((response) => {
            window.open(response.data.data.payment_url);
            navigate("/history-shopping");
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
    });
  }

  return (
    <Layout>
      <div className="w-full flex font-medium">
        <div className=" p-10  w-3/4 bg-[#FAFAFA] h-screen">
          <div className="flex justify-between ">
            <h3 className="font-bold text-3xl text-[#4AA3BA]">
              Etalase Belanja Product
            </h3>
          </div>
          <div className="grid grid-cols-4  gap-4 mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {loading
              ? [...Array(20).keys()].map((product) => (
                  <SkeletonLoadingEtalase key={product} />
                ))
              : product.map((product, index) => (
                  <CardEtalase
                    key={index}
                    id={product.id}
                    product_name={product.product_name}
                    product_image={product.product_image}
                    stock={product.stock}
                    price={product.price}
                    onClickCart={() => onClickProduct(product)}
                  />
                ))}
          </div>
        </div>
        <div className="p-10 w-1/4 md:w-1/2 lg:w-1/4">
          <h3 className="font-bold text-3xl text-[#4AA3BA] mb-20">Keranjang</h3>
          {carts.length === 0 ? (
            <div className="text-center text-lg text-[#a0a0a0]">
              <a href="">Select Product</a>
            </div>
          ) : (
            <div className="md:text-xs lg:text-base">
              {carts.map((cart, index) => (
                <div key={index} className="grid grid-flow-row  gap-4 mb-7">
                  <div className="flex  border rounded-2xl shadow-lg p-1 ">
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

                    <div className=" flex flex-col p-3 justify-between">
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
                        <div className="flex items-center rounded-xl border-2 w-28 divide-x border-gray-300">
                          <button
                            id="inc-product"
                            className="text-xl  w-9 bg-white  rounded-l-xl"
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
                            className="w-12 text-center"
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
                  <p className="font-bold text-xl md:text-base lg:text-xl text-[#4AA3BA]">
                    Total Belanja
                  </p>
                  <p className="font-bold text-xl md:text-base lg:text-xl ">
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
                onClick={() => orderProduct()}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
