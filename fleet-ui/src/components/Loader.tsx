import React from "react";

const Loader = () => {
  return (
    // <div className="fixed z-50 w-full h-full bg-opacity-100 bg-black">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="bg-transparent  w-full min-h-screen flex justify-center items-center">
            <div className="flex min-h-screen w-full items-center justify-center animate-pulse">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
                <div className="h-9 w-9 rounded-full bg-transparent bg-opacity-70 bg-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Loader;
