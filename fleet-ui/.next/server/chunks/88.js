exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 1168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ logout),
/* harmony export */   "x": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4274);

const login = async (username, password, api)=>{
    const response = {
        data: null,
        status: 500
    };
    try {
        const res = await fetch(`${api}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            }),
            credentials: "include"
        });
        response.status = res.status;
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__/* .setToken */ .o4)(res.headers.get("x-access-token"), res.headers.get("x-refresh-token"));
        const data = await res.json();
        response.data = data;
    } catch (err) {
        console.log(err);
    }
    return response;
};
const logout = async (api)=>{
    const response = {
        data: null,
        status: 500
    };
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__/* .removeToken */ .gy)();
    response.status = 200;
    response.data = {
        message: "Logout success"
    };
    return response;
};


/***/ }),

/***/ 4274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "o4": () => (/* binding */ setToken)
/* harmony export */ });
const setToken = (access_token, refresh_token)=>{
    if (access_token && refresh_token) {
        // set token to cookie with 1 minute expire for all path
        document.cookie = `access_token=${access_token}; max-age=60; path=/`;
        document.cookie = `refresh_token=${refresh_token}; max-age=900; path=/`;
    }
};
const getToken = ()=>{
    // get token from cookie
    const access_token = document.cookie.split(";").find((c)=>c.trim().startsWith("access_token="))?.split("=")[1] || null;
    const refresh_token = document.cookie.split(";").find((c)=>c.trim().startsWith("refresh_token="))?.split("=")[1] || null;
    if (access_token || refresh_token) {
        return {
            access_token,
            refresh_token
        };
    }
    removeToken();
    window.location.href = "/login";
    return null;
};
const removeToken = ()=>{
    document.cookie.split(";").forEach((c)=>{
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
};


/***/ }),

/***/ 9542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Loader = ()=>{
    return(// <div className="fixed z-50 w-full h-full bg-opacity-100 bg-black">
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative w-auto my-6 mx-auto max-w-3xl",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-transparent  w-full min-h-screen flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex min-h-screen w-full items-center justify-center animate-pulse",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-9 w-9 rounded-full bg-transparent bg-opacity-70 bg-gray-500"
                        })
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;