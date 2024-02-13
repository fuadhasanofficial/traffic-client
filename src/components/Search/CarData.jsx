import { useContext, useEffect, useRef } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import Normal from "../../assets/Antu_vcs-normal.svg.png";
import sound2 from "../../assets/audio/normal.mp3";
import sound from "../../assets/audio/problem.mp3";
import Stop from "../../assets/istockphoto-1156490264-1024x1024.webp";
import CarInfo from "./CarInfo";
import OwnerInfo from "./OwnerInfo";

/* eslint-disable react/prop-types */
const CarData = ({ car }) => {
  const { state } = useContext(AuthContext);
  const { english } = state;
  const sounRef = useRef(null);
  const soundRef = useRef(null);
  //   useEffect(() => {
  //     if (car.status !== 100) {
  //       sounRef.current.play();
  //     }
  //   }, []);
  const handlePlaySound = () => {
    soundRef?.current?.pause();
    sounRef.current.currentTime = 0;
    sounRef?.current?.play();
  };
  const handlePlaySound2 = () => {
    sounRef?.current?.pause();
    soundRef.current.currentTime = 0;
    soundRef?.current?.play();
  };

  useEffect(() => {
    if (car.status === 100) {
      handlePlaySound2();
      toast.success("Normal Gate Open", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      handlePlaySound();
      toast.error("Problem", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [car.status, car, car.numbeEng]);
  return (
    <div className="bg-[#ffffff] p-2 lg:w-5/6 mx-auto">
      {/* {car.status !== 100 ? handlePlaySound() : handlePlaySound2()} */}
      <h1></h1>
      <h2 className="text-2xl text-center">
        {car.status === 100 ? (
          <span className="text-[green]">
            {" "}
            {english ? "Normal" : "স্বাভাবিক"}
          </span>
        ) : (
          <span className="text-red">Problem</span>
        )}
      </h2>
      <table className="border table mx-auto  p-2">
        <thead className="text-[#080808]">
          <tr className="border p-2">
            <th className="border">Status</th>
            <th className="border">Name</th>
            <th className="border">Model</th>
          </tr>
        </thead>

        <tbody className="text-[#1a1818]">
          <tr className="border p-2">
            <td className="border p-2">
              {car.status === 100 ? (
                <span className="text-[green]">Normal</span>
              ) : (
                <span className="text-red">Problem</span>
              )}
            </td>
            <td className="border p-2">{car.name}</td>
            <td className="border p-2">{car.model}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
        <img
          className="lg:w-24"
          src={car.status === 100 ? Normal : Stop}
          alt=""
        />
      </div>
      <div className="border absolute top-[-1000px]">
        <audio ref={sounRef} controls>
          <source src={sound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio ref={soundRef} controls>
          <source src={sound2} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div>
        <OwnerInfo owner={car.owner} />
        <CarInfo car={car} />
      </div>
    </div>
  );
};

export default CarData;
