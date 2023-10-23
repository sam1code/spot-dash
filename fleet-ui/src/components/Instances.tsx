import React from "react";

const Instances = ({
  instances,
  loading,
  setInstance,
  setInstanceModal,
}: {
  instances: any;
  loading: any;
  setInstance: any;
  setInstanceModal: any;
}) => {

  return (
    <div className="overflow-auto ">
      <h2 className="text-2xl mt-2">Instances</h2>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-100  divide-y divide-gray-200">
          <tr className="grid grid-cols-7">
            <th>
              <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instance ID
              </span>
            </th>
            <th>
              <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instance Type
              </span>
            </th>
            <th>
              <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instance Lifecycle
              </span>
            </th>
            <th>
              <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instance State
              </span>
            </th>
            <th>
              <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Launch Time
              </span>
            </th>
            <th>
              <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider grid-cols-2">
                Tags
              </span>
            </th>
          </tr>
        </thead>
        {loading.instances ? (
          <p>Loading...</p>
        ) : (
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {instances?.map((instance: any) => (
              <tr
                className="grid grid-cols-7 cursor-pointer hover:bg-gray-100"
                key={instance?.InstanceId}
                onClick={() => {
                  setInstance(instance);
                  setInstanceModal(true);
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">
                    {instance?.InstanceId}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">
                    {instance?.InstanceType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">
                    {instance?.InstanceLifecycle || "on-demand"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                    {instance?.State?.Name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800">
                    {new Date(instance?.LaunchTime).toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex flex-wrap grid-cols-2">
                  {instance?.Tags?.map((tag: any) => (
                    <span
                      key={tag?.Key}
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {tag?.Key} : {tag?.Value}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Instances;
