import { login } from "@/api/auth";
import Loader from "@/components/Loader";
import NoAuth from "@/HOC/noAuth";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Login = (props:any) => {
  // useState
  const [details, setDetails] = React.useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [loginDisabled, setLoginDisabled] = React.useState(true);
  const [info, setInfo] = React.useState({
    message: "",
    isError: true,
  });

  // useRouter
  const router = useRouter();

  // functions
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await login(details.username, details.password, props.url);
    setLoading(false);
    if (response.status !== 200) {
      setInfo({
        message: response.data?.message || "Something went wrong!",
        isError: true,
      });
      return;
    }
    setInfo({
      message: response.data.message,
      isError: false,
    });
    router.push("/");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // useEffect
  useEffect(() => {
    if (details.username && details.password) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [details]);

  useEffect(() => {
    if (info.message) {
      if (info.isError) {
        toast.error(info.message);
      } else {
        toast.success(info.message);
      }
    }
  }, [info]);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      {loading && <Loader />}
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <form className="m-8 relative space-y-4" onSubmit={submitHandler}>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center">
                  Fleet Dashboard Login
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="username"
                      onChange={(e) => changeHandler(e)}
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={(e) => changeHandler(e)}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative flex justify-center">
                    <button
                      className={`text-white rounded-lg py-1.5 px-8 mt-4 ${
                        loginDisabled
                          ? "bg-gray-400"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                      type="submit"
                      disabled={loginDisabled}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

export const getServerSideProps = NoAuth();
