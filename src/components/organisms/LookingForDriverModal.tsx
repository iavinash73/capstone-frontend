import { Dispatch, SetStateAction } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { fareDataResponse } from "../../interfaces";
import { getFareByVehicleType } from "../../utils";

interface Props {
  setLookingForDriverModalOpen: Dispatch<SetStateAction<boolean>>;
  originDestinationData: { origin: string; destination: string };
  faresData: fareDataResponse | null;
  vehicleType: string;
}

const LookingForDriverModal = ({
  setLookingForDriverModalOpen,
  originDestinationData,
  faresData,
  vehicleType,
}: Props) => {
  const fare = getFareByVehicleType(vehicleType, faresData);

  return (
    <div className="relative">
      <div
        onClick={() => setLookingForDriverModalOpen(false)}
        className="cursor-pointer absolute -top-5 left-1/2 transform 
        -translate-x-1/2 text-zinc-300"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>

      <div className="w-full h-1 mt-3 bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-[length:200%_100%] animate-gradient-move"></div>

      <h3 className="text-2xl font-semibold pt-3 mb-5">Looking for Driver</h3>

      <div className="w-full flex flex-col">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <div className="w-3">
            <FaLocationDot />
          </div>
          <div className="pickup">
            <h4 className="text-lg font-semibold">Origin:</h4>
            <p className="text-sm -mt-1 text-zinc-600">
              {originDestinationData.origin}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <div className="w-3">
            <TbLocationFilled />
          </div>
          <div className="destination">
            <h4 className="text-lg font-semibold">Destination:</h4>
            <p className="text-sm -mt-1 text-zinc-600">
              {originDestinationData.destination}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <div className="w-3">
            <IoIosCash />
          </div>
          <div className="cash">
            <h4 className="text-lg font-semibold">Rs. {fare}</h4>
            <p className="text-sm -mt-1 text-zinc-600 font-medium">Fare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriverModal;
