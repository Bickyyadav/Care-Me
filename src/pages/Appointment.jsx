import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docterId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState();
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docinfo = doctors.find((doc) => doc._id === docterId);
    setDocInfo(docinfo);
  };

  const getAvailableSlots = async () => {
   setDocSlots([]);

  //   //getting current data
  //   let today = new Date();
  //   for (let i = 0; i < 7; i++) {
  //     //getting data with index
  //     let currentData = new Date(today);
  //     currentData.setDate(today.getDate() + i);

  //     //setting end time of the data with index
  //     let endTime = new Date();
  //     endTime.setDate(today.getDate() + i);
  //     endTime.setHours(21, 0, 0, 0);

  //     //setting hours
  //     if (today.getDate() === currentData.getDate()) {
  //       currentData.setHours(
  //         currentData.getHours() > 10 ? currentData.getHours() + 1 : 10
  //       );
  //       currentData.setMinutes(currentData.getMinutes() > 30 ? 30 : 0);
  //     } else {
  //       currentData.setHours(10);
  //       currentData.setMinutes(0);
  //     }

  //     let timeSlot = [];
  //     while (currentData < endTime) {
  //       let formattedTime = currentData.toLocaleTimeString([], {
  //         hour: "2-digit",
  //         number: "2-digit",
  //       });
  //       // addd slot ot array
  //       timeSlot.push({
  //         datetime: new Date(currentData),
  //         time: formattedTime,
  //       });

  //       // increment current time by 30 minutes
  //       currentData.setMinutes(currentData.getMinutes() * 30);
  //     }
  //     setDocSlots((prev) => [...prev, timeSlot]);
  //   }
   };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docterId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(()=>{
console.log(docSlots);

  },[docSlots])




  return (
    docInfo && (
      <div>
        {/* Doctor details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt="verifytoken"
              />
            </p>
            <div className="flex item-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* Doctor about */}
            <div className="">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="info icon" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="mt-3">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
