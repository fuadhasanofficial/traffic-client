import { ToastContainer } from "react-toastify";
import { actions } from "../../ults/ults";
import Action from "./Children/Action";

const Actions = () => {
  return (
    <div className=" body-bg w-5/6 mx-auto grid lg:grid-cols-2 grid-cols-1 text-center border mt-8  p-2 gap-2 ">
      {actions.map((action) => (
        <Action key={action.id} data={action} />
      ))}

      <ToastContainer />
    </div>
  );
};

export default Actions;
