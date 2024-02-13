/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export const CarInfo = ({ car }) => {
  const { colorEng, numberBng, numberEng, colorBng, engine, dimensions } = car;
  const { type, displacement, horsepower, torque } = engine;
  const { length, width, height, wheelbase } = dimensions;
  const { state } = useContext(AuthContext);
  const { english } = state;

  return (
    <div>
      <table className="border table mx-auto  p-2">
        <thead>
          <th>***</th>
          <th>***</th>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-[#fff] bg-[#272525] border p-2">
              {english ? "Number" : "নাম্বার"}
            </td>
            <td className="border p-2">{english ? numberEng : numberBng}</td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#62afa5] border p-2">
              {english ? "Color" : "রঙ"}
            </td>
            <td className="border p-2">{english ? colorEng : colorBng}</td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#8d8989] border p-2">
              Engine Type
            </td>
            <td className="border p-2">{type}</td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#d64e4e] border p-2">
              Horsepower
            </td>
            <td className="border p-2">{horsepower}</td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#6add6a] border p-2">
              Displacement
            </td>
            <td className="border p-2">{displacement}</td>
          </tr>
          <tr>
            <td className="font-bold text-[#272525] bg-[#e1e2e1] border p-2">
              Torque
            </td>
            <td className="border p-2">{torque} </td>
          </tr>
          <tr>
            <td className="font-bold text-[#f7f1f1] bg-[#8f3da8] border p-2">
              Length
            </td>
            <td className="border p-2">{length} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CarInfo;
