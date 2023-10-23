// import FleetFilters from "@/components/FleetFilters";
import { getFleets } from "@/api/fleetDetails";
import { getToken } from "@/api/storage";
import FleetList from "@/components/FleetList";
import Loader from "@/components/Loader";
import SelectRegion from "@/components/modals/SelectRegion";
import AuthRequire from "@/HOC/authRequire";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home(props: any) {
  const [fleets, setFleets] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("");

  const handelFetchFleet = async () => {
    setLoading(true);
    setFleets([]);
    const res = await getFleets(selectedRegion, props.url);
    setLoading(false);
    if (res.status !== 200) {
      toast.error(res.data?.message || "Something went wrong!");
      return;
    }
    setFleets(res.data);
  };

  useEffect(() => {
    setLoading(true);
    if (selectedRegion) {
      handelFetchFleet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedRegion) {
      setShowModal(false);
    }
  }, [selectedRegion]);

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("region");
    if (item) {
      setSelectedRegion(item);
      setShowModal(false);
    }
  }, []);
  

  return (
    <DashboardLayout props={props}>
      <div className="flex justify-between">
        <h1 className="text-2xl" onClick={handelFetchFleet}>
          Fleets List
        </h1>
        {!showModal && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(true)}
          >
            Select Region
          </button>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : fleets?.length !== 0 ? (
        <FleetList fleets={fleets} />
      ) : (
        <p>No fleets found in the region {selectedRegion}</p>
      )}
      {showModal && (
        <SelectRegion
          setShowModal={setShowModal}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      )}
    </DashboardLayout>
  );
}

export const getServerSideProps = AuthRequire();
