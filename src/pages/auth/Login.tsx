import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { LayoutPlain } from "../../components/Layout";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "../../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useCookies } from "react-cookie";

export const Login = () => {
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

  // const handleChange = (event: any) => {
  //   setFormLogin({
  //     ...formLogin,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  useEffect(() => {
    if (formLogin.email === "" || formLogin.password === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    console.log(formLogin);
  }, [formLogin]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios
      .postForm("https://bluepath.my.id/login", formLogin)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        removeCookie("token", { path: "/" });
        removeCookie("id", { path: "/" });
        removeCookie("business_name", { path: "/" });
        removeCookie("email", { path: "/" });
        setCookie("token", response.data.data.token, { path: "/" });
        setCookie("id", response.data.data.id, { path: "/" });
        setCookie("business_name", response.data.data.business_name, {
          path: "/",
        });
        setCookie("email", response.data.data.email, { path: "/" });
        MySwal.fire({
          title: "Berhasil Login",
          text: response.data.message,
          icon: "success",
          confirmButtonAriaLabel: "ok",
        });
        // alert(response.data.message);
        // navigate("/landing");
      })
      .catch((err) => {
        MySwal.fire({
          title: "Gagal Login",
          text: err.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
        // alert(err.response.data.message);
        // alert(err.toString());
      });
  };
  return (
    <LayoutPlain>
      <div className="flex h-full gap-44 justify-center">
        <div className="justify-center items-center content-center flex h-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/6a22/f8f5/dcdc0cb9315f24ecd0cb322db5fe8a3e?Expires=1676246400&Signature=pc8iLYIXdxv3011XIaimZNf-7UTYRwIUIqHcbQJ6xdl-urLocfFc6OhfdDw9cVwKycwv9OsPo2bT-FQcExJ0tNqfLL3oIQ8Kd9zMrm-f4C1brcjw9nE4wrlgNyCbK027b3gFS6j4SSuwPBsjqb6qcMqyyXy7IRgwd~3pS5plkjuTjq9xMkk6M0YMRJO3KaIJ9jIsCEI0BDxBQfxhyE70pCQra2Nuzb29ESt~uX67vQaQJeXA9bEQnJEHrRintLJrcqG75-OguHiWBX-LBOASDs6PmOXAt7XY9RE5JzfNf3Ae2i66okiCjcHHw8ziDNUZe9JaaR0tkjdZOP8yQeM0~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Sirloin"
            className="w-[50rem]"
          />
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
