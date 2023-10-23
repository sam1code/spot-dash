import {
  getInstanceCPUUtilization,
  getInstanceNetworkIn,
  getInstanceNetworkOut,
} from "@/api/fleetDetails";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const InstanceDetails = ({ region, toggleModal, instance, url }: any) => {
  const [cpuData, setCpuData] = useState<any>(null);
  const [netWorkIn, setNetworkIn] = useState<any>(null);
  const [netWorkOut, setNetworkOut] = useState<any>(null);

  const launchRef = useRef<any>("");

  const getCPUData = async () => {
    const res = await getInstanceCPUUtilization(
      region,
      instance.InstanceId,
      url
    );
    if (res.status !== 200) {
      toast.error("Error fetching CPU Utilization data!");
      return;
    }

    res.data.Datapoints?.sort((a: any, b: any) => {
      return new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime();
    });

    res.data.Datapoints?.forEach((item: any) => {
      item.Timestamp = new Date(item.Timestamp).toLocaleTimeString();
    });
    setCpuData(res.data.Datapoints);
  };

  const getNetworkIn = async () => {
    const res = await getInstanceNetworkIn(region, instance.InstanceId, url);
    if (res.status !== 200) {
      toast.error("Error fetching Network In data!");
      return;
    }

    // sort by timestamp
    res.data.Datapoints.sort((a: any, b: any) => {
      return new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime();
    });

    // convert timestamp to local time hour and minute
    res.data.Datapoints.forEach((item: any) => {
      item.Timestamp = new Date(item.Timestamp).toLocaleTimeString();
    });

    setNetworkIn(res.data.Datapoints);
  };

  const getNetworkOut = async () => {
    const res = await getInstanceNetworkOut(region, instance.InstanceId, url);
    if (res.status !== 200) {
      toast.error("Error fetching Network Out data!");
      return;
    }

    res.data.Datapoints?.sort((a: any, b: any) => {
      return new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime();
    });

    res.data.Datapoints?.forEach((item: any) => {
      item.Timestamp = new Date(item.Timestamp).toLocaleTimeString();
    });

    setNetworkOut(res.data.Datapoints);
  };

  useEffect(() => {
    if (launchRef.current !== instance.InstanceId) {
      launchRef.current = instance.InstanceId;
      getCPUData();
      getNetworkIn();
      getNetworkOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [InstanceDetails]);

  useEffect(() => {
    if (instance) {
    }
  }, [instance]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mb-4">
        <div
          className="relative w-auto my-6 mx-auto "
          style={{
            height: "90vh",
            width: "90vw",
          }}
        >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Instance Details</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={toggleModal}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-lg">
              {instance && (
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    Instance ID : {instance.InstanceId}
                  </div>
                  <div className="flex flex-row">VPC ID : {instance.VpcId}</div>
                  <div className="flex flex-row">
                    Private IPs :{" "}
                    {instance.NetworkInterfaces[0].PrivateIpAddresses?.map(
                      (ip: any, ind: any) => (
                        <div key={ip.PrivateIpAddress}>
                          {ip.PrivateIpAddress}
                          {instance.NetworkInterfaces[0].PrivateIpAddresses
                            ?.length >
                            ind + 1 && ", "}
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex flex-row">
                    Public IPs : {instance.PublicIpAddress}
                  </div>
                  <div className="flex flex-row">
                    Instance Type : {instance.InstanceType}
                  </div>
                  <div className="flex flex-row">
                    Availability Zone : {instance.Placement.AvailabilityZone}
                  </div>
                  <div className="flex flex-row">
                    Instance Lifecycle :{" "}
                    {instance.InstanceLifecycle || "on-demand"}
                  </div>
                  <div className="flex flex-row">
                    Launch Time : {instance.LaunchTime}
                  </div>
                  <div className="flex flex-row">
                    Status check : {instance.State.Name}
                  </div>
                  <div className="my-4 text-base">
                    <p className="text-lg">CPU Utilization (in Percentage) :</p>
                    <LineChart
                      width={700}
                      height={400}
                      data={cpuData}
                      className="mt-2"
                    >
                      <XAxis dataKey="Timestamp" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Average"
                        stroke="#8884d8"
                      />
                    </LineChart>
                  </div>
                  <div className="flex flex-wrap gap-6  text-base">
                    <div className="my-4">
                      <p className="text-lg">Network In matrics (in bytes):</p>
                      <LineChart
                        width={700}
                        height={400}
                        data={netWorkIn}
                        className="mt-2"
                      >
                        <XAxis dataKey="Timestamp" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Average"
                          stroke="#8884d8"
                        />
                      </LineChart>
                    </div>
                    <div className="my-4">
                      <p className="text-lg">Network out matrics (in bytes):</p>
                      <LineChart
                        width={700}
                        height={400}
                        data={netWorkOut}
                        className="mt-2"
                      >
                        <XAxis dataKey="Timestamp" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Average"
                          stroke="#8884d8"
                        />
                      </LineChart>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default InstanceDetails;
