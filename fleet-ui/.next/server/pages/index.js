"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const FleetList = ({ fleets  })=>{
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleFleetClick = (fleet)=>{
        location.push(`/fleet/${fleet}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: "min-w-full divide-y divide-gray-200 mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                className: "bg-gray-50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "grid grid-cols-10 gap-4 text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider col-span-2",
                                            children: "Fleet ID"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider ",
                                            children: "Type"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Status"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider ",
                                            children: "State"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Instance count(on demand)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Instance count(spot)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Allocation strategy(on demand)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Allocation strategy(spot)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Tags"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                className: "bg-white divide-y divide-gray-200 ",
                                children: fleets?.length > 0 ? fleets?.map((fleet)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "grid grid-cols-10  gap-4 text-center cursor-pointer items-center hover:bg-gray-100",
                                        onClick: ()=>handleFleetClick(fleet.FleetId),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap col-span-2",
                                                children: fleet.FleetId
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6  py-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-green-800",
                                                    children: fleet.Type
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-green-800",
                                                    children: fleet.ActivityStatus
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800",
                                                    children: fleet.FleetState
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                children: fleet.TargetCapacitySpecification.OnDemandTargetCapacity
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                children: fleet.TargetCapacitySpecification.SpotTargetCapacity
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                children: fleet.OnDemandOptions.AllocationStrategy
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                children: fleet.SpotOptions.AllocationStrategy
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 text-sm text-gray-500",
                                                children: fleet?.Tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-green-800",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                tag.Key,
                                                                " : ",
                                                                tag.Value
                                                            ]
                                                        })
                                                    }, tag.Key))
                                            })
                                        ]
                                    }, fleets.FleetId)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    className: "grid grid-cols-1 gap-4 text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap ",
                                        children: "No fleets found"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FleetList);


/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ modals_SelectRegion)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-select"
const external_react_select_namespaceObject = require("react-select");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_namespaceObject);
;// CONCATENATED MODULE: ./src/components/modals/SelectRegion.tsx



const AWS_REGIONS_API_URL = "https://ip-ranges.amazonaws.com/ip-ranges.json";
const SelectRegion = ({ setShowModal , setSelectedRegion , selectedRegion  })=>{
    const [regions, setRegions] = (0,external_react_.useState)([]);
    const regionRef = (0,external_react_.useRef)(true);
    (0,external_react_.useEffect)(()=>{
        if (!regionRef.current) return;
        async function fetchRegions() {
            regionRef.current = false;
            try {
                const response = await fetch(AWS_REGIONS_API_URL);
                const data = await response.json();
                const regions = data?.prefixes.filter((prefix)=>prefix.region !== "").map((prefix)=>prefix.region).filter((region, index, self)=>self.indexOf(region) === index);
                setRegions(regions.map((region)=>({
                        value: region,
                        label: region
                    })));
            } catch (error) {
                console.error(error);
            }
        }
        fetchRegions();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-auto my-6 mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-3xl font-semibold",
                                        children: "Select Region"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-1 bg-transparent border-0 text-black ml-16 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: ()=>setShowModal(false),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none",
                                            children: "X"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative p-6 flex-auto ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                    className: " w-full h-14 ",
                                    placeholder: "Select Region",
                                    options: regions,
                                    onChange: (e)=>{
                                        localStorage.setItem("region", e.value);
                                        setSelectedRegion(e.value);
                                        setShowModal(false);
                                    }
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    });
};
/* harmony default export */ const modals_SelectRegion = (SelectRegion);


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_fleetDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2160);
/* harmony import */ var _components_FleetList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5815);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9542);
/* harmony import */ var _components_modals_SelectRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _HOC_authRequire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var _layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8739);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
([_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import FleetFilters from "@/components/FleetFilters";









function Home(props) {
    const [fleets, setFleets] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const [selectedRegion, setSelectedRegion] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const handelFetchFleet = async ()=>{
        setLoading(true);
        setFleets([]);
        const res = await (0,_api_fleetDetails__WEBPACK_IMPORTED_MODULE_8__/* .getFleets */ .ul)(selectedRegion, props.url);
        setLoading(false);
        if (res.status !== 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(res.data?.message || "Something went wrong!");
            return;
        }
        setFleets(res.data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setLoading(true);
        if (selectedRegion) {
            handelFetchFleet();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedRegion
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (selectedRegion) {
            setShowModal(false);
        }
    }, [
        selectedRegion
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        // Perform localStorage action
        const item = localStorage.getItem("region");
        if (item) {
            setSelectedRegion(item);
            setShowModal(false);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        props: props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl",
                        onClick: handelFetchFleet,
                        children: "Fleets List"
                    }),
                    !showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                        onClick: ()=>setShowModal(true),
                        children: "Select Region"
                    })
                ]
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : fleets?.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FleetList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                fleets: fleets
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "No fleets found in the region ",
                    selectedRegion
                ]
            }),
            showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_SelectRegion__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                setShowModal: setShowModal,
                selectedRegion: selectedRegion,
                setSelectedRegion: setSelectedRegion
            })
        ]
    });
}
const getServerSideProps = (0,_HOC_authRequire__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [88,349], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();