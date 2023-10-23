import React from "react";

const FleetFilters = ({ setShowModal }: any) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Apply Filters</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto ">
              <div className="">
                <div className="flex justify-between">
                  Activity Status
                  <select className="shadow-xl text-center ">
                    <option value="">Select</option>
                    <option value="fulfilled">fulfilled</option>
                    <option value="pending-fulfillment">
                      pending-fulfillment
                    </option>
                    <option value="pending-termination">
                      pending-termination
                    </option>
                    <option value="error">error</option>
                    <option value="deleted">deleted</option>
                  </select>
                </div>

                <div className="flex justify-between  mt-2">
                  Excess Capacity Termination Policy
                  <select className="shadow-xl text-center">
                    <option value="">Select</option>
                    <option value="noTermination">noTermination</option>
                    <option value="termination">termination</option>
                    <option value="terminationWithPriority">
                      terminationWithPriority
                    </option>
                  </select>
                </div>

                <div className="flex justify-between  mt-2">
                  Fleet states
                  <select className="shadow-xl  text-center">
                    <option value="">Select</option>
                    <option value="submitted">submitted</option>
                    <option value="termination">termination</option>
                    <option value="deleted">deleted</option>
                    <option value="failed">failed</option>
                    <option value="deleted_running">deleted running</option>
                    <option value="deleted_terminating">
                      deleted terminating
                    </option>
                    <option value="modifying">modifying</option>
                    <option value="modifying_merge_in_progress">
                      modifying merge in progress
                    </option>
                    <option value="modifying_rollback_in_progress">
                      modifying rollback in progress
                    </option>
                  </select>
                </div>

                {/* <select className="shadow-xl text-center ">
                  <option value="">Activity Status</option>
                  <option value="fulfilled">fulfilled</option>
                  <option value="pending-fulfillment">
                    pending-fulfillment
                  </option>
                  <option value="pending-termination">
                    pending-termination
                  </option>
                  <option value="error">error</option>
                  <option value="deleted">deleted</option>
                </select> */}

                {/* <select className="shadow-xl text-center   ml-2">
                  <option value="">Excess Capacity Termination Policy</option>
                  <option value="noTermination">noTermination</option>
                  <option value="termination">termination</option>
                  <option value="terminationWithPriority">
                    terminationWithPriority
                  </option>
                </select> */}

                {/* <select className="shadow-xl   ml-2 text-center">
                  <option value="">Fleet states</option>
                  <option value="submitted">submitted</option>
                  <option value="termination">termination</option>
                  <option value="deleted">deleted</option>
                  <option value="failed">failed</option>
                  <option value="deleted_running">deleted running</option>
                  <option value="deleted_terminating">
                    deleted terminating
                  </option>
                  <option value="modifying">modifying</option>
                  <option value="modifying_merge_in_progress">
                    modifying merge in progress
                  </option>
                  <option value="modifying_rollback_in_progress">
                    modifying rollback in progress
                  </option>
                </select> */}
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Apply Locally
              </button>
              <button
                className="bg-orange-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Fetch Filte
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default FleetFilters;
