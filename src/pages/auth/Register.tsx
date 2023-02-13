import Button from "../../components/Button";
import { Input, TextArea } from "../../components/Input";
import { LayoutPlain } from "../../components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useTitle } from "../../utils/Title";

export const Register = () => {
  useTitle("Sirloin - Register");
  const MySwal = withReactContent(Swal);
  const [formRegister, setFormRegister] = useState({
    business_name: "",
    email: "",
    address: "",
    phone_number: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (
      formRegister.business_name === "" ||
      formRegister.email === "" ||
      formRegister.address === "" ||
      formRegister.phone_number === "" ||
      formRegister.password === ""
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formRegister]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios
      .postForm("https://bluepath.my.id/register", formRegister)
      .then((response) => {
        MySwal.fire({
          title: "Berhasil Register",
          text: response.data.message,
          icon: "success",
          confirmButtonAriaLabel: "ok",
        });
        navigate("/login");
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal Register",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  };

  return (
    <LayoutPlain>
      <div className="flex h-full gap-44 justify-center">
        <div className="justify-center items-center content-center flex h-full ">
          <img src="/Logo_Sirloin.png" alt="Sirloin" className="w-[50rem]" />
        </div>
        <div className="flex h-full  justify-center items-center content-center">
          <form>
            <div className="drop-shadow-xl bg-[#FAFAFA] rounded-3xl w-[34rem]  py-[3.438rem] px-[6.063rem]">
              <h1 className="text-center text-[#306D75] font-bold text-5xl mb-11 ">
                Register
              </h1>
              <Input
                id="business-name"
                name="business_name"
                label="Nama Bisnis/Toko"
                placeholder="Nama Bisnis/Toko"
                labelSet="tracking-widest text-[#1E1E1E]"
                inputSet="w-full bg-[#FFFFFF] p-4 border-2 rounded-lg placeholder-[#DDE2E5]"
                type={"text"}
                onChange={(e) =>
                  setFormRegister({
                    ...formRegister,
                    business_name: e.target.value,
                  })
                }
                value={formRegister.business_name}
              ></Input>
              <Input
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                labelSet="tracking-widest text-[#1E1E1E]"
                inputSet="w-full bg-[#FFFFFF] p-4 border-2 rounded-lg placeholder-[#DDE2E5]"
                type={"email"}
                onChange={(e) =>
                  setFormRegister({
                    ...formRegister,
                    email: e.target.value,
                  })
                }
                value={formRegister.email}
              ></Input>
              <Input
                id="password"
                name="password"
                label="Password"
                placeholder="Password"
                labelSet="tracking-widest text-[#1E1E1E]"
                inputSet="w-full bg-[#FFFFFF] p-4 border-2 rounded-lg placeholder-[#DDE2E5]"
                type={"password"}
                onChange={(e) =>
                  setFormRegister({
                    ...formRegister,
                    password: e.target.value,
                  })
                }
                value={formRegister.password}
              ></Input>
              <Input
                id="number-hp"
                name="phone_number"
                label="Nomor Telephone"
                placeholder="Nomor Telephone"
                labelSet="tracking-widest text-[#1E1E1E] "
                inputSet="w-full bg-[#FFFFFF] p-4 border-2 rounded-lg placeholder-[#DDE2E5]"
                type={"tel"}
                onChange={(e) =>
                  setFormRegister({
                    ...formRegister,
                    phone_number: e.target.value,
                  })
                }
                value={formRegister.phone_number}
              ></Input>
              <TextArea
                id="address"
                name="address"
                label="Alamat"
                rows={5}
                labelSet="tracking-widest text-[#1E1E1E] "
                inputSet="w-full "
                onChange={(e) =>
                  setFormRegister({
                    ...formRegister,
                    address: e.target.value,
                  })
                }
                value={formRegister.address}
              />
              <Button
                id="register"
                label="Register"
                buttonSet="btn w-full mb-10 bg-[#306D75] capitalize font-medium mb-10 mt-5"
                type="submit"
                disabled={isDisable}
                onClick={handleSubmit}
              />
              <Link to={"/login"}>
                <p
                  id="to-login"
                  className="text-center underline cursor-pointer text-[#306D75]"
                >
                  Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LayoutPlain>
  );
};
