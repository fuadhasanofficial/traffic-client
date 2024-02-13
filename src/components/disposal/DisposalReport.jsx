import { useContext } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";

const DisposalReport = () => {
  const { state } = useContext(AuthContext);
  const reportMode = state.mode === "report-car";
  const disposalMode = state.mode === "complaint-disposal-car";
  console.log(reportMode, state.mode);
  const { english } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const status = e.target.status.value;
    if (reportMode) {
      const sure = window.confirm(
        `আপনি কি নিশ্চিত ${number} গাড়ির বিরুদ্ধে ${status} ধারায় অভিযোগ করতে চাচ্ছেন ?`
      );

      if (sure) {
        fetch(`http://localhost:5000/disposal-report?number=${number}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("success", {
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
            }
            e.target.number.value = "";
            e.target.status.value = "";
          });
      }
    } else {
      fetch(`http://localhost:5000/disposal-report?number=${number}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("success", {
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
          } else if (data.error) {
            toast.error("No car Found On This Number", {
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
          e.target.number.value = "";
          e.target.status.value = "";
        });
    }
  };
  return (
    <div className="body-bg lg:w-5/6 mx-auto border flex justify-center p-24">
      <form className="mt-10 my-box p-8 rounded-md" onSubmit={handleSubmit}>
        {english ? (
          <h2 className="text-center lg:text-4xl">Abstain from charges</h2>
        ) : (
          <h2 className="text-center lg:text-4xl">
            {reportMode ? "অভিযোগ করুন" : "অভিযোগ থেকে অব্যাহতি দিন"}
          </h2>
        )}
        <div className="flex - justify-center mt-10">
          <div>
            <div>
              <input
                name="number"
                type="text"
                className="border-[#128cd3] border-2 mb-2 h-[50px] p-2"
                placeholder="Number"
              />
            </div>
            <div>
              {" "}
              <input
                name="status"
                type="number"
                className=" border-[#128cd3] border-2 mb-2 h-[50px] p-2"
                placeholder="Code"
                readOnly={disposalMode}
                defaultValue={100}
              />
            </div>
          </div>
        </div>

        <br />
        <div className="flex justify-center">
          <button type="submit">submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DisposalReport;
