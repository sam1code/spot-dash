"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [744],
  {
    3104: function (e, t, s) {
      s.d(t, {
        k: function () {
          return o;
        },
        x: function () {
          return a;
        },
      });
      var n = s(4274);
      let a = async (e, t, s) => {
          let a = { data: null, status: 500 };
          try {
            let o = await fetch("".concat(s, "/auth/login"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username: e, password: t }),
              credentials: "include",
            });
            (a.status = o.status),
              (0, n.o4)(
                o.headers.get("x-access-token"),
                o.headers.get("x-refresh-token")
              );
            let i = await o.json();
            a.data = i;
          } catch (e) {
            console.log(e);
          }
          return a;
        },
        o = async (e) => {
          let t = { data: null, status: 500 };
          return (
            (0, n.gy)(),
            (t.status = 200),
            (t.data = { message: "Logout success" }),
            t
          );
        };
    },
    2160: function (e, t, s) {
      s.d(t, {
        $C: function () {
          return o;
        },
        JR: function () {
          return i;
        },
        K3: function () {
          return c;
        },
        LD: function () {
          return r;
        },
        Xd: function () {
          return l;
        },
        ul: function () {
          return a;
        },
      });
      var n = s(4274);
      let a = async (e, t) => {
          let s = { data: null, status: 500 };
          try {
            let a = (0, n.LP)(),
              o = await fetch(
                "".concat(t, "/aws/ec2client/list-fleets?region=").concat(e),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token":
                      (null == a ? void 0 : a.access_token) || "",
                    "x-refresh-token":
                      (null == a ? void 0 : a.refresh_token) || "",
                  },
                  credentials: "include",
                }
              );
            (0, n.o4)(
              o.headers.get("x-access-token"),
              o.headers.get("x-refresh-token")
            ),
              (s.status = o.status);
            let i = await o.json();
            s.data = i;
          } catch (e) {
            console.log(e);
          }
          return s;
        },
        o = async (e, t, s) => {
          let a = { data: null, status: 500 };
          try {
            let o = (0, n.LP)(),
              i = await fetch(
                ""
                  .concat(s, "/aws/ec2client/fleet-instances?fleetid=")
                  .concat(t, "&region=")
                  .concat(e),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token":
                      (null == o ? void 0 : o.access_token) || "",
                    "x-refresh-token":
                      (null == o ? void 0 : o.refresh_token) || "",
                  },
                  credentials: "include",
                }
              );
            (0, n.o4)(
              i.headers.get("x-access-token"),
              i.headers.get("x-refresh-token")
            ),
              (a.status = i.status);
            let r = await i.json();
            a.data = r;
          } catch (e) {
            console.log(e);
          }
          return a;
        },
        i = async (e, t, s) => {
          let a = { data: null, status: 500 };
          try {
            let o = (0, n.LP)(),
              i = await fetch(
                ""
                  .concat(s, "/aws/ec2client/fleet-lunch-templates?fleetid=")
                  .concat(t, "&region=")
                  .concat(e),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token":
                      (null == o ? void 0 : o.access_token) || "",
                    "x-refresh-token":
                      (null == o ? void 0 : o.refresh_token) || "",
                  },
                  credentials: "include",
                }
              );
            (0, n.o4)(
              i.headers.get("x-access-token"),
              i.headers.get("x-refresh-token")
            ),
              (a.status = i.status);
            let r = await i.json();
            a.data = r;
          } catch (e) {
            console.log(e);
          }
          return a;
        },
        r = async (e, t, s) => {
          let a = { data: null, status: 500 };
          try {
            let o = (0, n.LP)(),
              i = await fetch(
                ""
                  .concat(s, "/aws/cw-client/cpu-utilization?instanceid=")
                  .concat(t, "&region=")
                  .concat(e),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token":
                      (null == o ? void 0 : o.access_token) || "",
                    "x-refresh-token":
                      (null == o ? void 0 : o.refresh_token) || "",
                  },
                  credentials: "include",
                }
              );
            (0, n.o4)(
              i.headers.get("x-access-token"),
              i.headers.get("x-refresh-token")
            ),
              (a.status = i.status);
            let r = await i.json();
            a.data = r;
          } catch (e) {
            console.log(e);
          }
          return a;
        },
        l = async (e, t, s) => {
          let a = { data: null, status: 500 };
          try {
            let o = (0, n.LP)(),
              i = await fetch(
                ""
                  .concat(s, "/aws/cw-client/nw-utilization/in?instanceid=")
                  .concat(t, "&region=")
                  .concat(e),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token":
                      (null == o ? void 0 : o.access_token) || "",
                    "x-refresh-token":
                      (null == o ? void 0 : o.refresh_token) || "",
                  },
                  credentials: "include",
                }
              );
            (0, n.o4)(
              i.headers.get("x-access-token"),
              i.headers.get("x-refresh-token")
            ),
              (a.status = i.status);
            let r = await i.json();
            a.data = r;
          } catch (e) {
            console.log(e);
          }
          return a;
        },
        c = async (e, t, s) => {
          let a = { data: null, status: 500 };
          try {
            let o = (0, n.LP)(),
              i = await fetch(
                ""
                  .concat(s, "/aws/cw-client/nw-utilization/out?instanceid=")
                  .concat(t, "&region=")
                  .concat(e),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token":
                      (null == o ? void 0 : o.access_token) || "",
                    "x-refresh-token":
                      (null == o ? void 0 : o.refresh_token) || "",
                  },
                  credentials: "include",
                }
              );
            (0, n.o4)(
              i.headers.get("x-access-token"),
              i.headers.get("x-refresh-token")
            ),
              (a.status = i.status);
            let r = await i.json();
            a.data = r;
          } catch (e) {
            console.log(e);
          }
          return a;
        };
    },
    4274: function (e, t, s) {
      s.d(t, {
        LP: function () {
          return a;
        },
        gy: function () {
          return o;
        },
        o4: function () {
          return n;
        },
      });
      let n = (e, t) => {
          e &&
            t &&
            ((document.cookie = "access_token=".concat(
              e,
              "; max-age=60; path=/"
            )),
            (document.cookie = "refresh_token=".concat(
              t,
              "; max-age=900; path=/"
            )));
        },
        a = () => {
          var e, t;
          let s =
              (null ===
                (e = document.cookie
                  .split(";")
                  .find((e) => e.trim().startsWith("access_token="))) ||
              void 0 === e
                ? void 0
                : e.split("=")[1]) || null,
            n =
              (null ===
                (t = document.cookie
                  .split(";")
                  .find((e) => e.trim().startsWith("refresh_token="))) ||
              void 0 === t
                ? void 0
                : t.split("=")[1]) || null;
          return s || n
            ? { access_token: s, refresh_token: n }
            : (o(), (window.location.href = "/login"), null);
        },
        o = () => {
          document.cookie.split(";").forEach((e) => {
            document.cookie = e
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=".concat(new Date().toUTCString(), ";path=/")
              );
          });
        };
    },
    9542: function (e, t, s) {
      var n = s(5893);
      s(7294);
      let a = () =>
        (0, n.jsx)("div", {
          className:
            "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
          children: (0, n.jsx)("div", {
            className: "relative w-auto my-6 mx-auto max-w-3xl",
            children: (0, n.jsx)("div", {
              className:
                "bg-transparent  w-full min-h-screen flex justify-center items-center",
              children: (0, n.jsx)("div", {
                className:
                  "flex min-h-screen w-full items-center justify-center animate-pulse",
                children: (0, n.jsx)("div", {
                  className:
                    "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin",
                  children: (0, n.jsx)("div", {
                    className:
                      "h-9 w-9 rounded-full bg-transparent bg-opacity-70 bg-gray-500",
                  }),
                }),
              }),
            }),
          }),
        });
      t.Z = a;
    },
    8705: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(5893),
        a = s(3104),
        o = s(7041),
        i = s(3454),
        r = s(1163),
        l = s(7294),
        c = s(2920);
      function d(e) {
        let { children: t, props: s } = e,
          [o, i] = (0, l.useState)(!1),
          [d, u] = (0, l.useState)({ message: "", isError: !1 }),
          h = (0, r.useRouter)(),
          p = async () => {
            let e = await (0, a.k)(s.url);
            if (200 !== e.status) {
              var t;
              u({
                message:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.message) || "Something went wrong!",
                isError: !0,
              });
              return;
            }
            u({ message: e.data.message, isError: !1 }), h.push("/login");
          },
          f = () => {
            h.back();
          };
        return (
          (0, l.useEffect)(() => {
            "/" === h.pathname ? i(!1) : i(!0);
          }, [h.pathname]),
          (0, l.useEffect)(() => {
            d.message &&
              (d.isError ? c.Am.error(d.message) : c.Am.success(d.message));
          }, [d]),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("nav", {
                className: "fixed top-0 z-10 w-full bg-white shadow-md",
                children: (0, n.jsx)("div", {
                  className: "px-3 py-5 lg:px-5 lg:pl-3",
                  children: (0, n.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 justify-start",
                        children: [
                          o &&
                            (0, n.jsx)("div", {
                              className:
                                "cursor-pointer rounded-full p-1 shadow-md hover:bg-slate-100",
                              onClick: f,
                              children: (0, n.jsxs)("svg", {
                                width: "28",
                                height: "28",
                                viewBox: "0 0 720 720",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, n.jsxs)("g", {
                                    clipPath: "url(#clip0_101_11)",
                                    children: [
                                      (0, n.jsx)("path", {
                                        d: "M360.001 720C558.502 720 719.993 558.503 719.993 359.998C719.993 161.497 558.502 0 360.001 0C161.5 0 0.00634766 161.497 0.00634766 359.998C0.00634766 558.503 161.5 720 360.001 720ZM360.001 49.2811C531.329 49.2811 670.712 188.668 670.715 359.998C670.715 531.329 531.332 670.716 360.001 670.719C188.674 670.716 49.2907 531.329 49.2907 359.995C49.2907 188.671 188.674 49.2811 360.001 49.2811Z",
                                        fill: "url(#paint0_linear_101_11)",
                                        stroke: "url(#paint1_linear_101_11)",
                                        strokeWidth: "1.832",
                                      }),
                                      (0, n.jsx)("path", {
                                        d: "M311.657 514.189C321.28 523.809 336.882 523.805 346.502 514.189C356.128 504.563 356.128 488.964 346.499 479.337L251.813 384.655L526.003 384.629C539.612 384.626 550.641 373.597 550.641 359.982C550.637 346.374 539.608 335.348 526 335.348L251.8 335.374L346.509 240.672C356.132 231.049 356.132 215.444 346.509 205.824C341.695 201.014 335.391 198.606 329.083 198.606C322.778 198.606 316.473 201.014 311.66 205.821L174.892 342.586C170.27 347.205 167.674 353.47 167.674 360.008C167.677 366.546 170.273 372.808 174.895 377.437L311.657 514.189Z",
                                        fill: "url(#paint2_linear_101_11)",
                                        stroke: "url(#paint3_linear_101_11)",
                                        strokeWidth: "1.832",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("defs", {
                                    children: [
                                      (0, n.jsxs)("linearGradient", {
                                        id: "paint0_linear_101_11",
                                        x1: "360",
                                        y1: "0",
                                        x2: "360",
                                        y2: "720",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, n.jsx)("stop", {
                                            stopColor: "#0145CC",
                                          }),
                                          (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#030E45",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("linearGradient", {
                                        id: "paint1_linear_101_11",
                                        x1: "360",
                                        y1: "0",
                                        x2: "360",
                                        y2: "720",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, n.jsx)("stop", {
                                            stopColor: "#0145CC",
                                          }),
                                          (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#030E45",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("linearGradient", {
                                        id: "paint2_linear_101_11",
                                        x1: "359.157",
                                        y1: "198.606",
                                        x2: "359.157",
                                        y2: "521.403",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, n.jsx)("stop", {
                                            stopColor: "#0145CC",
                                          }),
                                          (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#030E45",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("linearGradient", {
                                        id: "paint3_linear_101_11",
                                        x1: "359.157",
                                        y1: "198.606",
                                        x2: "359.157",
                                        y2: "521.403",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, n.jsx)("stop", {
                                            stopColor: "#0145CC",
                                          }),
                                          (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#030E45",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)("clipPath", {
                                        id: "clip0_101_11",
                                        children: (0, n.jsx)("rect", {
                                          width: "720",
                                          height: "720",
                                          fill: "white",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          (0, n.jsx)("a", {
                            href: "https://samcode.tech",
                            className: "flex ml-2 mr-24",
                            children: (0, n.jsx)("span", {
                              className:
                                "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ",
                              children: "Fleet Client",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "flex items-center",
                        children: (0, n.jsx)("div", {
                          className: "flex items-center ml-3",
                          children: (0, n.jsx)("div", {
                            className:
                              "rounded-full p-1 shadow-md hover:bg-slate-100",
                            onClick: p,
                            children: (0, n.jsxs)("svg", {
                              width: "28",
                              height: "28",
                              viewBox: "0 0 1024 1024",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "cursor-pointer",
                              children: [
                                (0, n.jsx)("path", {
                                  d: "M768 106V184C865.2 260 928 378.8 928 512C928 741.6 741.6 928 512 928C282.4 928 96 741.6 96 512C96 378.8 158.8 260.4 256 184V106C121.6 190.8 32 341.2 32 512C32 777.2 246.8 992 512 992C777.2 992 992 777.2 992 512C992 341.2 902.4 190.8 768 106Z",
                                  fill: "url(#paint0_linear_101_2)",
                                }),
                                (0, n.jsx)("path", {
                                  d: "M511 32C486.8 32 467 46.4 467 64V512C467 529.6 486.8 544 511 544C535.2 544 555 529.6 555 512V64C555 46.4 535.2 32 511 32Z",
                                  fill: "url(#paint1_linear_101_2)",
                                }),
                                (0, n.jsxs)("defs", {
                                  children: [
                                    (0, n.jsxs)("linearGradient", {
                                      id: "paint0_linear_101_2",
                                      x1: "512",
                                      y1: "106",
                                      x2: "512",
                                      y2: "992",
                                      gradientUnits: "userSpaceOnUse",
                                      children: [
                                        (0, n.jsx)("stop", {
                                          stopColor: "#004AD9",
                                        }),
                                        (0, n.jsx)("stop", {
                                          offset: "0.9375",
                                          stopColor: "#03032B",
                                        }),
                                        (0, n.jsx)("stop", {
                                          offset: "1",
                                          stopColor: "#260FB3",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("linearGradient", {
                                      id: "paint1_linear_101_2",
                                      x1: "511",
                                      y1: "32",
                                      x2: "511",
                                      y2: "544",
                                      gradientUnits: "userSpaceOnUse",
                                      children: [
                                        (0, n.jsx)("stop", {
                                          stopColor: "#004AD9",
                                        }),
                                        (0, n.jsx)("stop", {
                                          offset: "0.9375",
                                          stopColor: "#03032B",
                                        }),
                                        (0, n.jsx)("stop", {
                                          offset: "1",
                                          stopColor: "#260FB3",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: "p-4 ",
                children: (0, n.jsx)("div", {
                  className: "p-4 mt-14",
                  children: t,
                }),
              }),
              (0, n.jsx)(c.Ix, {}),
            ],
          })
        );
      }
      s(1399),
        async (e) => {
          let { req: t, res: s } = e,
            n = (0, o.getCookies)({ req: t, res: s });
          return n.access_token || n.refresh_token
            ? { props: { url: "".concat(i.env.API_URL) } }
            : { redirect: { destination: "/login", permanent: !1 } };
        };
    },
  },
]);
