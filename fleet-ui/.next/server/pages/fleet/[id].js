"use strict";
(() => {
var exports = {};
exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FleetLTs = ({ fleetLTs , setLaunchTemplateModal , setLaunchTemplate  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl mt-2",
                children: "Launch Templates"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "min-w-full divide-y divide-gray-200 mt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "bg-gray-100  divide-y divide-gray-200",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "grid grid-cols-6 gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Name"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Version"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "ID"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "CreatedBy"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "CreatedOn"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Default Version"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            className: "bg-white divide-y divide-gray-200 text-center",
                            children: fleetLTs?.map((lt)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "grid grid-cols-6 gap-4 text-center font-normal cursor-pointer hover:bg-gray-100 py-2",
                                    onClick: ()=>{
                                        setLaunchTemplate(lt);
                                        setLaunchTemplateModal(true);
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-2",
                                            children: lt.LaunchTemplateName
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-2",
                                            children: lt.VersionNumber
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-2",
                                            children: lt.LaunchTemplateId
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-2",
                                            children: lt.CreatedBy
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-2",
                                            children: lt.CreateTime
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-2",
                                            children: lt.DefaultVersion ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                                                children: "true"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800",
                                                children: "false"
                                            })
                                        })
                                    ]
                                }, lt.LaunchTemplateId);
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FleetLTs);


/***/ }),

/***/ 3198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Instances = ({ instances , loading , setInstance , setInstanceModal  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "overflow-auto ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-2xl mt-2",
                children: "Instances"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "min-w-full divide-y divide-gray-200 mt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        className: "bg-gray-100  divide-y divide-gray-200",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            className: "grid grid-cols-7",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Instance ID"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Instance Type"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Instance Lifecycle"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Instance State"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Launch Time"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider grid-cols-2",
                                        children: "Tags"
                                    })
                                })
                            ]
                        })
                    }),
                    loading.instances ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Loading..."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        className: "bg-white divide-y divide-gray-200 text-center",
                        children: instances?.map((instance)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "grid grid-cols-7 cursor-pointer hover:bg-gray-100",
                                onClick: ()=>{
                                    setInstance(instance);
                                    setInstanceModal(true);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-gray-900",
                                            children: instance?.InstanceId
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-gray-900",
                                            children: instance?.InstanceType
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-gray-900",
                                            children: instance?.InstanceLifecycle || "on-demand"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800",
                                            children: instance?.State?.Name
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800",
                                            children: new Date(instance?.LaunchTime).toLocaleString()
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap flex flex-wrap grid-cols-2",
                                        children: instance?.Tags?.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                                                children: [
                                                    tag?.Key,
                                                    " : ",
                                                    tag?.Value
                                                ]
                                            }, tag?.Key))
                                    })
                                ]
                            }, instance?.InstanceId))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instances);


/***/ }),

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FleetLtModal = ({ fleetLt , toggleModal  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-auto my-6 mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-3xl font-semibold",
                                        children: "Launch Template Details"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: toggleModal,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none",
                                            children: "X"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative p-6 flex-auto text-lg",
                                children: [
                                    "subnet:",
                                    " ",
                                    fleetLt.LaunchTemplateData.NetworkInterfaces.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: data.SubnetId
                                        }, data.SubnetId)),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "vpc id: \xa0",
                                    fleetLt.LaunchTemplateData.NetworkInterfaces[0].VpcId || "Not Available",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "security group IDs:",
                                    " ",
                                    fleetLt.LaunchTemplateData.NetworkInterfaces[0].Groups?.map((data, ind)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                data,
                                                fleetLt.LaunchTemplateData?.NetworkInterfaces[0]?.Groups?.length - 1 > ind && ", "
                                            ]
                                        }, data)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Tags:",
                                    " ",
                                    fleetLt.LaunchTemplateData?.TagSpecifications ? fleetLt.LaunchTemplateData?.TagSpecifications[0]?.Tags?.map((data, ind)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "px-2 text-xs leading-5 font-semibold rounded-full bg-violet-200 text-green-800",
                                            children: [
                                                data.Key,
                                                ": ",
                                                data.Value
                                            ]
                                        }, data.Key)) : "Not Available"
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FleetLtModal);


/***/ }),

/***/ 1412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_fleetDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2160);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const InstanceDetails = ({ region , toggleModal , instance , url  })=>{
    const [cpuData, setCpuData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [netWorkIn, setNetworkIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [netWorkOut, setNetworkOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const launchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const getCPUData = async ()=>{
        const res = await (0,_api_fleetDetails__WEBPACK_IMPORTED_MODULE_4__/* .getInstanceCPUUtilization */ .LD)(region, instance.InstanceId, url);
        if (res.status !== 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Error fetching CPU Utilization data!");
            return;
        }
        res.data.Datapoints?.sort((a, b)=>{
            return new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime();
        });
        res.data.Datapoints?.forEach((item)=>{
            item.Timestamp = new Date(item.Timestamp).toLocaleTimeString();
        });
        setCpuData(res.data.Datapoints);
    };
    const getNetworkIn = async ()=>{
        const res = await (0,_api_fleetDetails__WEBPACK_IMPORTED_MODULE_4__/* .getInstanceNetworkIn */ .Xd)(region, instance.InstanceId, url);
        if (res.status !== 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Error fetching Network In data!");
            return;
        }
        // sort by timestamp
        res.data.Datapoints.sort((a, b)=>{
            return new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime();
        });
        // convert timestamp to local time hour and minute
        res.data.Datapoints.forEach((item)=>{
            item.Timestamp = new Date(item.Timestamp).toLocaleTimeString();
        });
        setNetworkIn(res.data.Datapoints);
    };
    const getNetworkOut = async ()=>{
        const res = await (0,_api_fleetDetails__WEBPACK_IMPORTED_MODULE_4__/* .getInstanceNetworkOut */ .K3)(region, instance.InstanceId, url);
        if (res.status !== 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Error fetching Network Out data!");
            return;
        }
        res.data.Datapoints?.sort((a, b)=>{
            return new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime();
        });
        res.data.Datapoints?.forEach((item)=>{
            item.Timestamp = new Date(item.Timestamp).toLocaleTimeString();
        });
        setNetworkOut(res.data.Datapoints);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (launchRef.current !== instance.InstanceId) {
            launchRef.current = instance.InstanceId;
            getCPUData();
            getNetworkIn();
            getNetworkOut();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        InstanceDetails
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (instance) {}
    }, [
        instance
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-auto my-6 mx-auto ",
                    style: {
                        height: "90vh",
                        width: "90vw"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-3xl font-semibold",
                                        children: "Instance Details"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: toggleModal,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none",
                                            children: "X"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative p-6 flex-auto text-lg",
                                children: instance && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Instance ID : ",
                                                instance.InstanceId
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "VPC ID : ",
                                                instance.VpcId
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Private IPs :",
                                                " ",
                                                instance.NetworkInterfaces[0].PrivateIpAddresses?.map((ip, ind)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            ip.PrivateIpAddress,
                                                            instance.NetworkInterfaces[0].PrivateIpAddresses?.length > ind + 1 && ", "
                                                        ]
                                                    }, ip.PrivateIpAddress))
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Public IPs : ",
                                                instance.PublicIpAddress
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Instance Type : ",
                                                instance.InstanceType
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Availability Zone : ",
                                                instance.Placement.AvailabilityZone
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Instance Lifecycle :",
                                                " ",
                                                instance.InstanceLifecycle || "on-demand"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Launch Time : ",
                                                instance.LaunchTime
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                "Status check : ",
                                                instance.State.Name
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "my-4 text-base",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-lg",
                                                    children: "CPU Utilization (in Percentage) :"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
                                                    width: 700,
                                                    height: 400,
                                                    data: cpuData,
                                                    className: "mt-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {
                                                            dataKey: "Timestamp"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {
                                                            strokeDasharray: "3 3"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Legend, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {
                                                            type: "monotone",
                                                            dataKey: "Average",
                                                            stroke: "#8884d8"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-wrap gap-6  text-base",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-lg",
                                                            children: "Network In matrics (in bytes):"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
                                                            width: 700,
                                                            height: 400,
                                                            data: netWorkIn,
                                                            className: "mt-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {
                                                                    dataKey: "Timestamp"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {
                                                                    strokeDasharray: "3 3"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Legend, {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {
                                                                    type: "monotone",
                                                                    dataKey: "Average",
                                                                    stroke: "#8884d8"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-lg",
                                                            children: "Network out matrics (in bytes):"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
                                                            width: 700,
                                                            height: 400,
                                                            data: netWorkOut,
                                                            className: "mt-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {
                                                                    dataKey: "Timestamp"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {
                                                                    strokeDasharray: "3 3"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Legend, {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {
                                                                    type: "monotone",
                                                                    dataKey: "Average",
                                                                    stroke: "#8884d8"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8739);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HOC_authRequire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var _api_fleetDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2160);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _components_Instances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3198);
/* harmony import */ var _components_FleetLTs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(522);
/* harmony import */ var _components_modals_InstanceDetailsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1412);
/* harmony import */ var _components_modals_FleetLtModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3408);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _components_modals_InstanceDetailsModal__WEBPACK_IMPORTED_MODULE_8__]);
([_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _components_modals_InstanceDetailsModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Fleets = (props)=>{
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [fleetId, setFleetId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        instances: true,
        launchTemplate: true,
        main: false
    });
    const [region, setRegion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [fleetInstances, setFleetInstances] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [fleetLTs, setFleetLTs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    // instance modal
    const [instanceModal, setInstanceModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    // launch template modal
    const [launchTemplateModal, setLaunchTemplateModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [launchTemplate, setLaunchTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [avgs, setAvgs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const getFleetIdFromParams = ()=>{
        const { id  } = location.query;
        if (id) {
            setFleetId(id);
        }
    };
    const getFleetInsts = async ()=>{
        setLoading({
            ...loading,
            instances: true
        });
        const res = await (0,_api_fleetDetails__WEBPACK_IMPORTED_MODULE_11__/* .getFleetInstances */ .$C)(region, fleetId, props.url);
        if (res.status !== 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Error fetching instances!");
            setLoading({
                ...loading,
                instances: false
            });
            return;
        }
        setAvgs({
            cpu: res.data?.avgFleetCPUUtilization,
            nwIn: res.data?.avgFleetNWIn,
            nwOut: res.data?.avgFleetNWOut
        });
        res.data = res.data?.instances.flat(1);
        for(let i = 0; i < res.data?.length; i++){
            res.data[i] = res.data[i]?.Instances;
        }
        res.data = res.data?.flat(1);
        setFleetInstances(res.data);
        setLoading({
            ...loading,
            instances: false
        });
    };
    const getFleetLTs = async ()=>{
        setLoading({
            ...loading,
            launchTemplate: true
        });
        const res = await (0,_api_fleetDetails__WEBPACK_IMPORTED_MODULE_11__/* .getLaunchTemplate */ .JR)(region, fleetId, props.url);
        if (res.status !== 200) {
            setLoading({
                ...loading,
                launchTemplate: false
            });
            return;
        }
        const data = [];
        for(let i = 0; i < res.data?.length; i++){
            for(let j = 0; j < res.data[i].LaunchTemplateVersions?.length; j++){
                data.push(res.data[i].LaunchTemplateVersions[j]);
            }
        }
        setFleetLTs(data);
        setLoading({
            ...loading,
            launchTemplate: false
        });
    };
    // effects
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (launchTemplateModal) {
            setInstanceModal(false);
        }
    }, [
        launchTemplateModal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (instanceModal) {
            setLaunchTemplateModal(false);
        }
    }, [
        instanceModal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setRegion(localStorage.getItem("region") || "ap-south-1");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (location.isReady && !fleetId) getFleetIdFromParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        location.isReady
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (fleetId && region) {
            getFleetInsts();
            getFleetLTs();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        fleetId,
        region
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        props: props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}),
            instanceModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_InstanceDetailsModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                instance: instance,
                toggleModal: ()=>{
                    setInstance(null);
                    setInstanceModal(false);
                },
                region: region,
                url: props.url
            }),
            launchTemplateModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_FleetLtModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                fleetLt: launchTemplate,
                toggleModal: ()=>{
                    setLaunchTemplate(null);
                    setLaunchTemplateModal(false);
                }
            }),
            loading.main && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-xl",
                children: [
                    "Fleet ID : ",
                    fleetId
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "text-xl",
                children: [
                    "Fleet Avg CPU Utilization : ",
                    avgs?.cpu
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "text-xl",
                children: [
                    "Fleet Avg Network In : ",
                    avgs?.nwIn
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "text-xl",
                children: [
                    "Fleet Avg Network Out : ",
                    avgs?.nwOut
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-blue-50 shadow-xl",
                style: {
                    height: "42vh",
                    overflowY: "scroll"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Instances__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    instances: fleetInstances,
                    loading: loading.instances,
                    setInstanceModal: setInstanceModal,
                    setInstance: setInstance
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-green-50 shadow-xl",
                style: {
                    height: "42vh",
                    overflowY: "scroll"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FleetLTs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    fleetLTs: fleetLTs,
                    setLaunchTemplateModal: setLaunchTemplateModal,
                    setLaunchTemplate: setLaunchTemplate
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fleets);
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

/***/ 3655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [88,349], () => (__webpack_exec__(8613)));
module.exports = __webpack_exports__;

})();