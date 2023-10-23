import { logout } from "@/api/auth";
import AuthRequire from "@/HOC/authRequire";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardLayout({
  children,
  props,
}: {
  children: React.ReactNode;
  props: any;
}) {
  // states
  const [goBack, setGoBack] = useState(false);
  const [info, setInfo] = useState({
    message: "",
    isError: false,
  });

  // useRouter
  const location = useRouter();

  // functions
  const logoutHandler = async () => {
    const res = await logout(props.url);
    if (res.status !== 200) {
      setInfo({
        message: res.data?.message || "Something went wrong!",
        isError: true,
      });
      return;
    }
    setInfo({
      message: res.data.message,
      isError: false,
    });
    location.push("/login");
  };

  // goback
  const goBackHandler = () => {
    location.back();
  };

  // effects
  useEffect(() => {
    if (location.pathname === "/") {
      setGoBack(false);
    } else {
      setGoBack(true);
    }
  }, [location.pathname]);

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
    <div>
      <nav className="fixed top-0 z-10 w-full bg-white shadow-md">
        <div className="px-3 py-5 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 justify-start">
              {goBack && (
                <div
                  className="cursor-pointer rounded-full p-1 shadow-md hover:bg-slate-100"
                  onClick={goBackHandler}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 720 720"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_101_11)">
                      <path
                        d="M360.001 720C558.502 720 719.993 558.503 719.993 359.998C719.993 161.497 558.502 0 360.001 0C161.5 0 0.00634766 161.497 0.00634766 359.998C0.00634766 558.503 161.5 720 360.001 720ZM360.001 49.2811C531.329 49.2811 670.712 188.668 670.715 359.998C670.715 531.329 531.332 670.716 360.001 670.719C188.674 670.716 49.2907 531.329 49.2907 359.995C49.2907 188.671 188.674 49.2811 360.001 49.2811Z"
                        fill="url(#paint0_linear_101_11)"
                        stroke="url(#paint1_linear_101_11)"
                        strokeWidth="1.832"
                      />
                      <path
                        d="M311.657 514.189C321.28 523.809 336.882 523.805 346.502 514.189C356.128 504.563 356.128 488.964 346.499 479.337L251.813 384.655L526.003 384.629C539.612 384.626 550.641 373.597 550.641 359.982C550.637 346.374 539.608 335.348 526 335.348L251.8 335.374L346.509 240.672C356.132 231.049 356.132 215.444 346.509 205.824C341.695 201.014 335.391 198.606 329.083 198.606C322.778 198.606 316.473 201.014 311.66 205.821L174.892 342.586C170.27 347.205 167.674 353.47 167.674 360.008C167.677 366.546 170.273 372.808 174.895 377.437L311.657 514.189Z"
                        fill="url(#paint2_linear_101_11)"
                        stroke="url(#paint3_linear_101_11)"
                        strokeWidth="1.832"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_101_11"
                        x1="360"
                        y1="0"
                        x2="360"
                        y2="720"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0145CC" />
                        <stop offset="1" stopColor="#030E45" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_101_11"
                        x1="360"
                        y1="0"
                        x2="360"
                        y2="720"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0145CC" />
                        <stop offset="1" stopColor="#030E45" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_101_11"
                        x1="359.157"
                        y1="198.606"
                        x2="359.157"
                        y2="521.403"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0145CC" />
                        <stop offset="1" stopColor="#030E45" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_101_11"
                        x1="359.157"
                        y1="198.606"
                        x2="359.157"
                        y2="521.403"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0145CC" />
                        <stop offset="1" stopColor="#030E45" />
                      </linearGradient>
                      <clipPath id="clip0_101_11">
                        <rect width="720" height="720" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              )}
              <a href="https://samcode.tech" className="flex ml-2 mr-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
                  Fleet Client
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div
                  className="rounded-full p-1 shadow-md hover:bg-slate-100"
                  onClick={logoutHandler}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <path
                      d="M768 106V184C865.2 260 928 378.8 928 512C928 741.6 741.6 928 512 928C282.4 928 96 741.6 96 512C96 378.8 158.8 260.4 256 184V106C121.6 190.8 32 341.2 32 512C32 777.2 246.8 992 512 992C777.2 992 992 777.2 992 512C992 341.2 902.4 190.8 768 106Z"
                      fill="url(#paint0_linear_101_2)"
                    />
                    <path
                      d="M511 32C486.8 32 467 46.4 467 64V512C467 529.6 486.8 544 511 544C535.2 544 555 529.6 555 512V64C555 46.4 535.2 32 511 32Z"
                      fill="url(#paint1_linear_101_2)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_101_2"
                        x1="512"
                        y1="106"
                        x2="512"
                        y2="992"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#004AD9" />
                        <stop offset="0.9375" stopColor="#03032B" />
                        <stop offset="1" stopColor="#260FB3" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_101_2"
                        x1="511"
                        y1="32"
                        x2="511"
                        y2="544"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#004AD9" />
                        <stop offset="0.9375" stopColor="#03032B" />
                        <stop offset="1" stopColor="#260FB3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-4 ">
        <div className="p-4 mt-14">{children}</div>
      </div>
      <ToastContainer />
    </div>
  );
}

export const getServerSideProps = AuthRequire();
