import { useRouter } from "next/router";
import React from "react";

const FleetList = ({ fleets }: { fleets: any }) => {
  const location = useRouter();

  const handleFleetClick = (fleet: string) => {
    location.push(`/fleet/${fleet}`);
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {/* table with grid */}
            <table className="min-w-full divide-y divide-gray-200 mt-4">
              <thead className="bg-gray-50">
                <tr className="grid grid-cols-10 gap-4 text-center">
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider col-span-2"
                  >
                    Fleet ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider "
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider "
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Instance count(on demand)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Instance count(spot)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Allocation strategy(on demand)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Allocation strategy(spot)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {fleets?.length > 0 ? (
                  fleets?.map((fleet: any) => (
                    <tr
                      className="grid grid-cols-10  gap-4 text-center cursor-pointer items-center hover:bg-gray-100"
                      key={fleets.FleetId}
                      onClick={() => handleFleetClick(fleet.FleetId)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap col-span-2">
                        {fleet.FleetId}
                      </td>
                      <td className="px-6  py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-green-800">
                          {fleet.Type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-green-800">
                          {fleet.ActivityStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                          {fleet.FleetState}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {
                          fleet.TargetCapacitySpecification
                            .OnDemandTargetCapacity
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {fleet.TargetCapacitySpecification.SpotTargetCapacity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {fleet.OnDemandOptions.AllocationStrategy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {fleet.SpotOptions.AllocationStrategy}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {fleet?.Tags?.map((tag: any) => (
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-green-800"
                            key={tag.Key}
                          >
                            <span>
                              {tag.Key} : {tag.Value}
                            </span>
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="grid grid-cols-1 gap-4 text-center">
                    <td className="px-6 py-4 whitespace-nowrap ">
                      No fleets found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetList;
