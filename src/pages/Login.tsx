import React from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { LayoutPlain } from "../components/Layout";

export const Login = () => {
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
              ></Input>
              <Input
                id="password"
                name="password"
                label="Password"
                placeholder="Password"
                labelSet="tracking-widest text-[#1E1E1E]"
                inputSet="w-full bg-[#FFFFFF] p-4 border-2 rounded-lg placeholder-[#DDE2E5]"
                type={"password"}
              ></Input>
              <Button
                label="Login"
                buttonSet="btn w-full mb-10 bg-[#306D75] capitalize font-medium mb-10 mt-5"
                type="submit"
              />
              <p className="text-center underline cursor-pointer text-[#306D75]">
                Register
              </p>
            </div>
          </form>
        </div>
      </div>
    </LayoutPlain>
  );
};
