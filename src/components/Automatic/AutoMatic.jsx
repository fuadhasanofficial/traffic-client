import { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/AuthProvider";
import auto from "../../assets/settings-icon-1024x1022-x2c1qvd9.png";
import CarData from "../Search/CarData";

const AutoMatic = () => {
  const { state } = useContext(AuthContext);
  const [load, setLoad] = useState(true);
  const [carData, setCarData] = useState({});
  const { english } = state;
  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputFocus();
  }, []);

  const preventDefault = (event) => {
    event.preventDefault();
  };

  // Stop propagation of mouse events
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleAutoSearch = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    fetch(`http://localhost:5000/car-data?number=${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);

        console.log(carData);
      });
    // inputRef.current.value = "";
    setLoad(!load);
  };

  const handeOnChange = (e) => {
    handleAutoSearch(e);
  };
  return (
    <div className=" bg-1 w-5/6 mx-auto p-4 mt-4 bg-[#4a6ecf1f]  ">
      {english ? (
        <h2 className="text-center alpona text-2xl">
          Search for vehicle status
        </h2>
      ) : (
        <h2 className="text-center alpona text-2xl">
          যানবাহনের অবস্থা জানতে অনুসন্ধান করুন
        </h2>
      )}
      <div className="flex  lg:flex-row   flex-col-reverse  ">
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
        <div className="lg:w-5/6 mt-8   lg:p-4 relative ">
          <form onSubmit={handleAutoSearch} className="lg:mt-24">
            <div className="mx-auto flex justify-center">
              <input
                onChange={handeOnChange}
                ref={inputRef}
                className=" focus:border-0 text[red] focus:outline-none focus:bg-[#E9EDF9] focus:bg-[#e4e8f500]  bg-[#e4e8f500] absolute top-0"
                type="text"
              />
            </div>
            <div className="image-container w-full mx-auto border  flex justify-center">
              <img src={auto} alt="Rotating Image" className="rotate" />
            </div>
            <br />
            <div className="flex justify-center"></div>
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
      <ToastContainer />
    </div>
  );
};

export default AutoMatic;
