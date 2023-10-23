"use strict";
exports.id = 349;
exports.ids = [349];
exports.modules = {
  /***/ 750: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(8982);
    /* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        cookies_next__WEBPACK_IMPORTED_MODULE_0__
      );

    const AuthRequire = () => {
      return async ({ req, res }) => {
        const token = (0, cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookies)(
          {
            req,
            res,
          }
        );
        if (!token.access_token && !token.refresh_token) {
          return {
            redirect: {
              destination: "/login",
              permanent: false,
            },
          };
        }
        return {
          props: {
            url: `${process.env.API_URL}`,
          },
        };
      };
    };
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = AuthRequire;

    /***/
  },

  /***/ 2160: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ $C: () => /* binding */ getFleetInstances,
      /* harmony export */ JR: () => /* binding */ getLaunchTemplate,
      /* harmony export */ K3: () => /* binding */ getInstanceNetworkOut,
      /* harmony export */ LD: () => /* binding */ getInstanceCPUUtilization,
      /* harmony export */ Xd: () => /* binding */ getInstanceNetworkIn,
      /* harmony export */ ul: () => /* binding */ getFleets,
      /* harmony export */
    });
    /* unused harmony export getFleetInstanceDetails */
    /* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(4274);

    const getFleets = async (selectedRegion, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = (0,
        _storage__WEBPACK_IMPORTED_MODULE_0__ /* .getToken */.LP)();
        const res = await fetch(
          `${api}/aws/ec2client/list-fleets?region=${selectedRegion}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        (0, _storage__WEBPACK_IMPORTED_MODULE_0__ /* .setToken */.o4)(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    const getFleetInstances = async (region, fleetId, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = (0,
        _storage__WEBPACK_IMPORTED_MODULE_0__ /* .getToken */.LP)();
        const res = await fetch(
          `${api}/aws/ec2client/fleet-instances?fleetid=${fleetId}&region=${region}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        (0, _storage__WEBPACK_IMPORTED_MODULE_0__ /* .setToken */.o4)(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    const getLaunchTemplate = async (region, fleetId, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = (0,
        _storage__WEBPACK_IMPORTED_MODULE_0__ /* .getToken */.LP)();
        const res = await fetch(
          `${api}/aws/ec2client/fleet-lunch-templates?fleetid=${fleetId}&region=${region}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        (0, _storage__WEBPACK_IMPORTED_MODULE_0__ /* .setToken */.o4)(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    const getFleetInstanceDetails = async (region, instanceId, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = getToken();
        const res = await fetch(
          `${api}/aws/ec2client/desc-instance?instanceid=${instanceId}&region=${region}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        setToken(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    const getInstanceCPUUtilization = async (region, instanceId, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = (0,
        _storage__WEBPACK_IMPORTED_MODULE_0__ /* .getToken */.LP)();
        const res = await fetch(
          `${api}/aws/cw-client/cpu-utilization?instanceid=${instanceId}&region=${region}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        (0, _storage__WEBPACK_IMPORTED_MODULE_0__ /* .setToken */.o4)(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    const getInstanceNetworkIn = async (region, instanceId, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = (0,
        _storage__WEBPACK_IMPORTED_MODULE_0__ /* .getToken */.LP)();
        const res = await fetch(
          `${api}/aws/cw-client/nw-utilization/in?instanceid=${instanceId}&region=${region}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        (0, _storage__WEBPACK_IMPORTED_MODULE_0__ /* .setToken */.o4)(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    const getInstanceNetworkOut = async (region, instanceId, api) => {
      const response = {
        data: null,
        status: 500,
      };
      try {
        const token = (0,
        _storage__WEBPACK_IMPORTED_MODULE_0__ /* .getToken */.LP)();
        const res = await fetch(
          `${api}/aws/cw-client/nw-utilization/out?instanceid=${instanceId}&region=${region}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token?.access_token || "",
              "x-refresh-token": token?.refresh_token || "",
            },
            credentials: "include",
          }
        );
        (0, _storage__WEBPACK_IMPORTED_MODULE_0__ /* .setToken */.o4)(
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        response.status = res.status;
        const data = await res.json();
        response.data = data;
      } catch (error) {
        console.log(error);
      }
      return response;
    };

    /***/
  },

  /***/ 8739: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ Z: () => /* binding */ DashboardLayout,
            /* harmony export */
          });
          /* unused harmony export getServerSideProps */
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(1168);
          /* harmony import */ var _HOC_authRequire__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(750);
          /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(1853);
          /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_router__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(3590);
          /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(8819);
          /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              react_toastify__WEBPACK_IMPORTED_MODULE_4__,
            ]);
          react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          function DashboardLayout({ children, props }) {
            // states
            const [goBack, setGoBack] = (0,
            react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
            const [info, setInfo] = (0,
            react__WEBPACK_IMPORTED_MODULE_3__.useState)({
              message: "",
              isError: false,
            });
            // useRouter
            const location = (0,
            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
            // functions
            const logoutHandler = async () => {
              const res = await (0,
              _api_auth__WEBPACK_IMPORTED_MODULE_6__ /* .logout */.k)(
                props.url
              );
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
            (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
              if (location.pathname === "/") {
                setGoBack(false);
              } else {
                setGoBack(true);
              }
            }, [location.pathname]);
            (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
              if (info.message) {
                if (info.isError) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(
                    info.message
                  );
                } else {
                  react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(
                    info.message
                  );
                }
              }
            }, [info]);
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  "nav",
                  {
                    className: "fixed top-0 z-10 w-full bg-white shadow-md",
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        "div",
                        {
                          className: "px-3 py-5 lg:px-5 lg:pl-3",
                          children: /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            "div",
                            {
                              className: "flex items-center justify-between",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-2 justify-start",
                                    children: [
                                      goBack &&
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          "div",
                                          {
                                            className:
                                              "cursor-pointer rounded-full p-1 shadow-md hover:bg-slate-100",
                                            onClick: goBackHandler,
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                              "svg",
                                              {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 720 720",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                    "g",
                                                    {
                                                      clipPath:
                                                        "url(#clip0_101_11)",
                                                      children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                          "path",
                                                          {
                                                            d: "M360.001 720C558.502 720 719.993 558.503 719.993 359.998C719.993 161.497 558.502 0 360.001 0C161.5 0 0.00634766 161.497 0.00634766 359.998C0.00634766 558.503 161.5 720 360.001 720ZM360.001 49.2811C531.329 49.2811 670.712 188.668 670.715 359.998C670.715 531.329 531.332 670.716 360.001 670.719C188.674 670.716 49.2907 531.329 49.2907 359.995C49.2907 188.671 188.674 49.2811 360.001 49.2811Z",
                                                            fill: "url(#paint0_linear_101_11)",
                                                            stroke:
                                                              "url(#paint1_linear_101_11)",
                                                            strokeWidth:
                                                              "1.832",
                                                          }
                                                        ),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                          "path",
                                                          {
                                                            d: "M311.657 514.189C321.28 523.809 336.882 523.805 346.502 514.189C356.128 504.563 356.128 488.964 346.499 479.337L251.813 384.655L526.003 384.629C539.612 384.626 550.641 373.597 550.641 359.982C550.637 346.374 539.608 335.348 526 335.348L251.8 335.374L346.509 240.672C356.132 231.049 356.132 215.444 346.509 205.824C341.695 201.014 335.391 198.606 329.083 198.606C322.778 198.606 316.473 201.014 311.66 205.821L174.892 342.586C170.27 347.205 167.674 353.47 167.674 360.008C167.677 366.546 170.273 372.808 174.895 377.437L311.657 514.189Z",
                                                            fill: "url(#paint2_linear_101_11)",
                                                            stroke:
                                                              "url(#paint3_linear_101_11)",
                                                            strokeWidth:
                                                              "1.832",
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                    "defs",
                                                    {
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                          "linearGradient",
                                                          {
                                                            id: "paint0_linear_101_11",
                                                            x1: "360",
                                                            y1: "0",
                                                            x2: "360",
                                                            y2: "720",
                                                            gradientUnits:
                                                              "userSpaceOnUse",
                                                            children: [
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  stopColor:
                                                                    "#0145CC",
                                                                }
                                                              ),
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  offset: "1",
                                                                  stopColor:
                                                                    "#030E45",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                          "linearGradient",
                                                          {
                                                            id: "paint1_linear_101_11",
                                                            x1: "360",
                                                            y1: "0",
                                                            x2: "360",
                                                            y2: "720",
                                                            gradientUnits:
                                                              "userSpaceOnUse",
                                                            children: [
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  stopColor:
                                                                    "#0145CC",
                                                                }
                                                              ),
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  offset: "1",
                                                                  stopColor:
                                                                    "#030E45",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                          "linearGradient",
                                                          {
                                                            id: "paint2_linear_101_11",
                                                            x1: "359.157",
                                                            y1: "198.606",
                                                            x2: "359.157",
                                                            y2: "521.403",
                                                            gradientUnits:
                                                              "userSpaceOnUse",
                                                            children: [
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  stopColor:
                                                                    "#0145CC",
                                                                }
                                                              ),
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  offset: "1",
                                                                  stopColor:
                                                                    "#030E45",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                          "linearGradient",
                                                          {
                                                            id: "paint3_linear_101_11",
                                                            x1: "359.157",
                                                            y1: "198.606",
                                                            x2: "359.157",
                                                            y2: "521.403",
                                                            gradientUnits:
                                                              "userSpaceOnUse",
                                                            children: [
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  stopColor:
                                                                    "#0145CC",
                                                                }
                                                              ),
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "stop",
                                                                {
                                                                  offset: "1",
                                                                  stopColor:
                                                                    "#030E45",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                          "clipPath",
                                                          {
                                                            id: "clip0_101_11",
                                                            children:
                                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                "rect",
                                                                {
                                                                  width: "720",
                                                                  height: "720",
                                                                  fill: "white",
                                                                }
                                                              ),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                ],
                                              }
                                            ),
                                          }
                                        ),
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        "a",
                                        {
                                          href: "https://samcode.tech",
                                          className: "flex ml-2 mr-24",
                                          children:
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              "span",
                                              {
                                                className:
                                                  "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ",
                                                children: "Fleet Client",
                                              }
                                            ),
                                        }
                                      ),
                                    ],
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  "div",
                                  {
                                    className: "flex items-center",
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        "div",
                                        {
                                          className: "flex items-center ml-3",
                                          children:
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              "div",
                                              {
                                                className:
                                                  "rounded-full p-1 shadow-md hover:bg-slate-100",
                                                onClick: logoutHandler,
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                  "svg",
                                                  {
                                                    width: "28",
                                                    height: "28",
                                                    viewBox: "0 0 1024 1024",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    className: "cursor-pointer",
                                                    children: [
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        "path",
                                                        {
                                                          d: "M768 106V184C865.2 260 928 378.8 928 512C928 741.6 741.6 928 512 928C282.4 928 96 741.6 96 512C96 378.8 158.8 260.4 256 184V106C121.6 190.8 32 341.2 32 512C32 777.2 246.8 992 512 992C777.2 992 992 777.2 992 512C992 341.2 902.4 190.8 768 106Z",
                                                          fill: "url(#paint0_linear_101_2)",
                                                        }
                                                      ),
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        "path",
                                                        {
                                                          d: "M511 32C486.8 32 467 46.4 467 64V512C467 529.6 486.8 544 511 544C535.2 544 555 529.6 555 512V64C555 46.4 535.2 32 511 32Z",
                                                          fill: "url(#paint1_linear_101_2)",
                                                        }
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                        "defs",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                              "linearGradient",
                                                              {
                                                                id: "paint0_linear_101_2",
                                                                x1: "512",
                                                                y1: "106",
                                                                x2: "512",
                                                                y2: "992",
                                                                gradientUnits:
                                                                  "userSpaceOnUse",
                                                                children: [
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    "stop",
                                                                    {
                                                                      stopColor:
                                                                        "#004AD9",
                                                                    }
                                                                  ),
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    "stop",
                                                                    {
                                                                      offset:
                                                                        "0.9375",
                                                                      stopColor:
                                                                        "#03032B",
                                                                    }
                                                                  ),
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    "stop",
                                                                    {
                                                                      offset:
                                                                        "1",
                                                                      stopColor:
                                                                        "#260FB3",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                              "linearGradient",
                                                              {
                                                                id: "paint1_linear_101_2",
                                                                x1: "511",
                                                                y1: "32",
                                                                x2: "511",
                                                                y2: "544",
                                                                gradientUnits:
                                                                  "userSpaceOnUse",
                                                                children: [
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    "stop",
                                                                    {
                                                                      stopColor:
                                                                        "#004AD9",
                                                                    }
                                                                  ),
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    "stop",
                                                                    {
                                                                      offset:
                                                                        "0.9375",
                                                                      stopColor:
                                                                        "#03032B",
                                                                    }
                                                                  ),
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    "stop",
                                                                    {
                                                                      offset:
                                                                        "1",
                                                                      stopColor:
                                                                        "#260FB3",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                    ],
                                                  }
                                                ),
                                              }
                                            ),
                                        }
                                      ),
                                  }
                                ),
                              ],
                            }
                          ),
                        }
                      ),
                  }
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  "div",
                  {
                    className: "p-4 ",
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        "div",
                        {
                          className: "p-4 mt-14",
                          children: children,
                        }
                      ),
                  }
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer,
                  {}
                ),
              ],
            });
          }
          const getServerSideProps = (0,
          _HOC_authRequire__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z)();

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },
};
