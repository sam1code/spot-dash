import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthRequire from "@/HOC/authRequire";
import { getFleetInstances, getLaunchTemplate } from "@/api/fleetDetails";
import { toast, ToastContainer } from "react-toastify";
import Instances from "@/components/Instances";
import FleetLTs from "@/components/FleetLTs";
import InstanceDetails from "@/components/modals/InstanceDetailsModal";
import FleetLtModal from "@/components/modals/FleetLtModal";
import Loader from "@/components/Loader";

interface ILoading {
  instances: boolean;
  launchTemplate: boolean;
  main: boolean;
}

const Fleets = (props: any) => {
  const location = useRouter();

  const [fleetId, setFleetId] = useState<string>("");
  const [loading, setLoading] = useState<ILoading>({
    instances: true,
    launchTemplate: true,
    main: false,
  });
  const [region, setRegion] = useState<string>("");
  const [fleetInstances, setFleetInstances] = useState<any>([]);
  const [fleetLTs, setFleetLTs] = useState<any>([]);
  // instance modal
  const [instanceModal, setInstanceModal] = useState<boolean>(false);
  const [instance, setInstance] = useState<any>(null);

  // launch template modal
  const [launchTemplateModal, setLaunchTemplateModal] =
    useState<boolean>(false);
  const [launchTemplate, setLaunchTemplate] = useState<any>(null);
  const [avgs, setAvgs] = useState<{
    cpu: number;
    nwIn: number;
    nwOut: number;
  }>();

  const getFleetIdFromParams = () => {
    const { id } = location.query;
    if (id) {
      setFleetId(id as string);
    }
  };

  const getFleetInsts = async () => {
    setLoading({ ...loading, instances: true });
    const res = await getFleetInstances(region, fleetId, props.url);
    if (res.status !== 200) {
      toast.error("Error fetching instances!");
      setLoading({ ...loading, instances: false });
      return;
    }
    setAvgs({
      cpu: res.data?.avgFleetCPUUtilization,
      nwIn: res.data?.avgFleetNWIn,
      nwOut: res.data?.avgFleetNWOut,
    });
    res.data = res.data?.instances.flat(1);
    for (let i = 0; i < res.data?.length; i++) {
      res.data[i] = res.data[i]?.Instances;
    }
    res.data = res.data?.flat(1);

    setFleetInstances(res.data);
    setLoading({ ...loading, instances: false });
  };

  const getFleetLTs = async () => {
    setLoading({ ...loading, launchTemplate: true });
    const res = await getLaunchTemplate(region, fleetId, props.url);
    if (res.status !== 200) {
      setLoading({ ...loading, launchTemplate: false });
      return;
    }

    const data = [];

    for (let i = 0; i < res.data?.length; i++) {
      for (let j = 0; j < res.data[i].LaunchTemplateVersions?.length; j++) {
        data.push(res.data[i].LaunchTemplateVersions[j]);
      }
    }
    setFleetLTs(data);
    setLoading({ ...loading, launchTemplate: false });
  };

  // effects
  useEffect(() => {
    if (launchTemplateModal) {
      setInstanceModal(false);
    }
  }, [launchTemplateModal]);

  useEffect(() => {
    if (instanceModal) {
      setLaunchTemplateModal(false);
    }
  }, [instanceModal]);

  useEffect(() => {
    setRegion(localStorage.getItem("region") || "ap-south-1");
  }, []);

  useEffect(() => {
    if (location.isReady && !fleetId) getFleetIdFromParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.isReady]);

  useEffect(() => {
    if (fleetId && region) {
      getFleetInsts();
      getFleetLTs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleetId, region]);

  return (
    <DashboardLayout props={props}>
      <ToastContainer />
      {instanceModal && (
        <InstanceDetails
          instance={instance}
          toggleModal={() => {
            setInstance(null);
            setInstanceModal(false);
          }}
          region={region}
          url={props.url}
        />
      )}
      {launchTemplateModal && (
        <FleetLtModal
          fleetLt={launchTemplate}
          toggleModal={() => {
            setLaunchTemplate(null);
            setLaunchTemplateModal(false);
          }}
        />
      )}
      {loading.main && <Loader />}
      <h2 className="text-xl">Fleet ID : {fleetId}</h2>
      <h3 className="text-xl">Fleet Avg CPU Utilization : {avgs?.cpu}</h3>
      <h3 className="text-xl">Fleet Avg Network In : {avgs?.nwIn}</h3>
      <h3 className="text-xl">Fleet Avg Network Out : {avgs?.nwOut}</h3>
      <div
        className="bg-blue-50 shadow-xl"
        style={{
          height: "42vh",
          overflowY: "scroll",
        }}
      >
        <Instances
          instances={fleetInstances}
          loading={loading.instances}
          setInstanceModal={setInstanceModal}
          setInstance={setInstance}
        />
      </div>
      <div
        className="bg-green-50 shadow-xl"
        style={{
          height: "42vh",
          overflowY: "scroll",
        }}
      >
        <FleetLTs
          fleetLTs={fleetLTs}
          setLaunchTemplateModal={setLaunchTemplateModal}
          setLaunchTemplate={setLaunchTemplate}
        />
      </div>
    </DashboardLayout>
  );
};

export default Fleets;

export const getServerSideProps = AuthRequire();
