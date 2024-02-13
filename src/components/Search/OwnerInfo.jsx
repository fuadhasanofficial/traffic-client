/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
// eslint-disable-next-line react/prop-types
const OwnerInfo = ({ owner }) => {
  const { nameEng, nameBng, jobEng, jobBng, nid, mobile, img } = owner;
  const { state } = useContext(AuthContext);
  const { english } = state;
  return (
    <div className="w-full">
      <table className="border table mx-auto  p-2 mt-4 lg:w-5/6">
        <thead>
          <th>***</th>
          <th>***</th>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-[#ca8a8a] bg-[#e4e0e0] border p-2">
              {english ? "Photo" : "ছবি"}
            </td>
            <td className="border p-2">
              <div className="flex justify-center">
                <img className="w-1/2" src={img} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#272525] border p-2">
              {english ? "Number" : "নাম"}
            </td>
            <td className="border p-2 text-center">
              {english ? nameEng : nameBng}
            </td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#272525] border p-2">
              {english ? "Mobile" : "মোবাইল"}
            </td>
            <td className="border p-2">
              {" "}
              <a href={`tel:${mobile}`}> 0{mobile}</a>{" "}
            </td>
          </tr>
          <tr>
            <td className="font-bold text-[#fff] bg-[#272525] border p-2">
              {english ? "Job" : "পেশা"}
            </td>
            <td className="border p-2">{english ? jobEng : jobBng}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OwnerInfo;
