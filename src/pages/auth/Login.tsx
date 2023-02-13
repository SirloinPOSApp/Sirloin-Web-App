import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { LayoutPlain } from "../../components/Layout";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import { userContext } from "../../utils/context";
import { useTitle } from "../../utils/Title";

export const Login = () => {
  useTitle("Sirloin - Login");
  const MySwal = withReactContent(Swal);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    if (formLogin.email === "" || formLogin.password === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formLogin]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios
      .postForm("https://bluepath.my.id/login", formLogin)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        setCookie("token", response.data.data.token, { path: "/" });
        setCookie("id", response.data.data.id, { path: "/" });
        setCookie("business_name", response.data.data.business_name, {
          path: "/",
        });
        setCookie("email", response.data.data.email, { path: "/" });
        setUser(!user);
        MySwal.fire({
          title: "Berhasil Login",
          text: response.data.message,
          icon: "success",
          confirmButtonAriaLabel: "ok",
        }).then(() => {
          navigate("/landing");
          window.location.reload();
        });
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal Login",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  };

  return (
    <LayoutPlain>
      <div className="flex h-full gap-44 justify-center">
        <div className="justify-center items-center content-center flex h-full">
          <img src="/Logo_Sirloin.png" alt="Sirloin" className="w-[50rem]" />
        </div>
        <div className="flex h-full justify-center items-center content-center">
          <form>
            <div className="drop-shadow-xl bg-[#FAFAFA] rounded-3xl w-[34rem]  py-[9rem] px-[6.063rem]">
              <h1 className="text-center text-[#306D75] font-bold text-5xl mb-11">
                Login
              </h1>
              <Input
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                labelSet="tracking-widest text-[#1E1E1E]"
                inputSet="w-full bg-[#FFFFFF] p-4 border-2 rounded-lg placeholder-[#DDE2E5]"
                type={"email"}
                onChange={(e) =>
                  setFormLogin({
                    ...formLogin,
                    email: e.target.value,
                  })
                }
                value={formLogin.email}
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
                  setFormLogin({
                    ...formLogin,
                    password: e.target.value,
                  })
                }
                value={formLogin.password}
              ></Input>
              <Button
                id="login"
                label="Login"
                buttonSet="btn w-full mb-10 bg-[#306D75] capitalize font-medium mb-10 mt-5"
                type="submit"
                disabled={isDisable}
                onClick={handleSubmit}
              />
              <Link to={"/register"}>
                <p
                  id="to-register"
                  className="text-center underline cursor-pointer text-[#306D75]"
                >
                  Register
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LayoutPlain>
  );
};
