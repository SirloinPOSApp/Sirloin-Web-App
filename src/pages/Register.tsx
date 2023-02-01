import React from "react";
import { LayoutPlain } from "../components/Layout";

export const Register = () => {
  return (
    <LayoutPlain>
      <div className="flex h-full gap-44 justify-center">
        <div className="justify-center items-center content-center flex h-full ">
          <img
            src="https://s3-alpha-sig.figma.com/img/6a22/f8f5/dcdc0cb9315f24ecd0cb322db5fe8a3e?Expires=1676246400&Signature=pc8iLYIXdxv3011XIaimZNf-7UTYRwIUIqHcbQJ6xdl-urLocfFc6OhfdDw9cVwKycwv9OsPo2bT-FQcExJ0tNqfLL3oIQ8Kd9zMrm-f4C1brcjw9nE4wrlgNyCbK027b3gFS6j4SSuwPBsjqb6qcMqyyXy7IRgwd~3pS5plkjuTjq9xMkk6M0YMRJO3KaIJ9jIsCEI0BDxBQfxhyE70pCQra2Nuzb29ESt~uX67vQaQJeXA9bEQnJEHrRintLJrcqG75-OguHiWBX-LBOASDs6PmOXAt7XY9RE5JzfNf3Ae2i66okiCjcHHw8ziDNUZe9JaaR0tkjdZOP8yQeM0~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Sirloin"
            className="w-[50rem]"
          />
        </div>
        <div className="flex h-full  justify-center items-center content-center">
          <form>
            <div className="drop-shadow-xl bg-[#FAFAFA] rounded-3xl w-[34rem]  py-[3.438rem] px-[6.063rem]">
              <h1 className="text-center text-[#306D75] font-bold text-5xl mb-11 ">
                Register
              </h1>
              <label htmlFor="" className="mb-1 tracking-widest">
                Nama Bisnis/Toko
              </label>
              <input
                id="business-name"
                type="text"
                name="business-name"
                className="w-full bg-[#FFFFFF] p-4 mb-5 border-2 rounded-lg placeholder-[#DDE2E5]"
                placeholder="Nama Bisnis/Toko"
              ></input>
              <label htmlFor="" className="mb-1 tracking-widest">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full bg-[#FFFFFF] p-4 mb-5 border-2 rounded-lg placeholder-[#DDE2E5]"
                placeholder="Email"
              ></input>
              <label htmlFor="" className="mb-1 tracking-widest">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full bg-[#FFFFFF] p-4 mb-9 border-2 rounded-lg placeholder-[#DDE2E5]"
                placeholder="Password"
              ></input>
              <label htmlFor="" className="mb-1 tracking-widest">
                Nomor Telephone
              </label>
              <input
                id="number-hp"
                type="number"
                name="number-hp"
                className="w-full bg-[#FFFFFF] p-4 mb-5 border-2 rounded-lg placeholder-[#DDE2E5]"
                placeholder="Nomor Telephone"
              ></input>
              <label htmlFor="" className="mb-1 tracking-widest">
                Alamat
              </label>
              <textarea
                id="address"
                name="address"
                rows={5}
                className="w-full bg-[#FFFFFF] p-4 mb-2 border-2 rounded-lg"
              ></textarea>
              <button
                className="btn w-full mb-7 bg-[#306D75] capitalize font-medium"
                type="submit"
              >
                Register
              </button>
              <p className="text-center underline cursor-pointer text-[#306D75]">
                Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </LayoutPlain>
  );
};
