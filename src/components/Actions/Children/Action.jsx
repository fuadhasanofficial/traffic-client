import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

/* eslint-disable react/prop-types */
const Action = ({ data }) => {
  const { state, dispatch } = useContext(AuthContext);
  const english = state.english;

  const handelMode = (name) => {
    dispatch({
      type: "CHANGE_MODE",
      payload: name,
    });
  };

  console.log(state.mode);
  return (
    <Link onClick={() => handelMode(data.id)} to={`action/${data.id}`}>
      <div className="border p-4 bg-indigo-200  hover:border-green-400 hover:bg-indigo-400 hover:text-white duration-[0.75s]  ">
        {english ? (
          <h2 className="text-2xl">{data.nameEng}</h2>
        ) : (
          <h2 className="alpona text-2xl">{data.nameBng}</h2>
        )}
        <img className="w-24 mx-auto" src={data.img} alt="" />
      </div>
    </Link>
  );
};

export default Action;
