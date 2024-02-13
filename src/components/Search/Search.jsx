import { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/AuthProvider";
import CarData from "./CarData";

const Search = () => {
  const { state } = useContext(AuthContext);
  const [carNumber, setCarNumber] = useState("");
  const [carData, setCarData] = useState({});

  const handleSearch = async (e, number) => {
    e.preventDefault();
    console.log(carNumber);
    fetch(`http://localhost:5000/car-data?number=${number}`)
      .then((res) => res.json())
      .then(async (data) => {
        await setCarData(data);

        console.log(carData);
      });
  };

  const { english } = state;
  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputFocus();
  }, []);

  return (
    <div className="w-5/6 mx-auto p-4 mt-4 bg-[#4a6ecf1f] ">
      {english ? (
        <h2 className="text-center alpona text-2xl">
          Search for vehicle status
        </h2>
      ) : (
        <h2 className="text-center alpona text-2xl">
          যানবাহনের অবস্থা জানতে অনুসন্ধান করুন
        </h2>
      )}
      <div className="flex  lg:flex-row   flex-col-reverse ">
        {carData?._id ? (
          <div className="lg:w-1/2 flex justify-center">
            {" "}
            <CarData car={carData} />{" "}
          </div>
        ) : (
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="lg:w-1/2"
              src="https://cdn-icons-png.flaticon.com/512/5044/5044165.png"
              alt=""
            />
          </div>
        )}
        <div className="lg:w-1/2 mt-8 border my-box p-4">
          <form className="lg:mt-24">
            <div className="mx-auto flex justify-center">
              <input
                onChange={(e) => {
                  setCarNumber(e.target.value);
                  console.log(carNumber);
                }}
                ref={inputRef}
                className="border "
                type="text"
              />
            </div>
            <br />
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  handleSearch(e, carNumber);
                }}
                className="bg-indigo-500 text-white p-2 rounded"
              >
                {english ? <span>Search</span> : <span>অনুসন্ধান</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#2e302f] p-2 mt-4 rounded-md text-white">
        {english ? (
          <h2 className="lg:text-3xl text-center mt-4">
            As a member of the Bangladesh Police, you should fulfill your duties
            properly.
          </h2>
        ) : (
          <h2 className="lg:text-3xl text-center mt-4">
            বাংলাদেশ পুলিশের একজন সদস্য হিসেবে আপনি আপনার দায়িত্ব যথাযথভাবে
            পালন করুন।
          </h2>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Search;
