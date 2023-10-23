import React from "react";

const FleetLTs = ({
  fleetLTs,
  setLaunchTemplateModal,
  setLaunchTemplate,
}: any) => {
  return (
    <div>
      <h1 className="text-2xl mt-2">Launch Templates</h1>
      <div>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead className="bg-gray-100  divide-y divide-gray-200">
            <tr className="grid grid-cols-6 gap-4 text-center">
              <th className="px-4 py-2">
                <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </span>
              </th>
              <th className="px-4 py-2">
                <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Version
                </span>
              </th>
              <th className="px-4 py-2">
                <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </span>
              </th>
              <th className="px-4 py-2">
                <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CreatedBy
                </span>
              </th>
              <th className="px-4 py-2">
                <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CreatedOn
                </span>
              </th>
              <th className="px-4 py-2">
                <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Default Version
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {fleetLTs?.map((lt: any) => {
              return (
                <tr
                  className="grid grid-cols-6 gap-4 text-center font-normal cursor-pointer hover:bg-gray-100 py-2"
                  key={lt.LaunchTemplateId}
                  onClick={() => {
                    setLaunchTemplate(lt);
                    setLaunchTemplateModal(true);
                  }}
                >
                  <td className="px-4 py-2">{lt.LaunchTemplateName}</td>
                  <td className="px-4 py-2">{lt.VersionNumber}</td>
                  <td className="px-4 py-2">{lt.LaunchTemplateId}</td>
                  <td className="px-4 py-2">{lt.CreatedBy}</td>
                  <td className="px-4 py-2">{lt.CreateTime}</td>
                  <td className="px-4 py-2">
                    {lt.DefaultVersion ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        true
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        false
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetLTs;
