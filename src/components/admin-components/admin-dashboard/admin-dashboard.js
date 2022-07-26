import { useContext } from "react";
import Context from "../../../globalstate/context";

const AdminDashboard = () => {
  const { globalState } = useContext(Context);

  console.log("global state", globalState.test);

  return (
    <div className="relative md:ml-64 pt-14">
      <div className="global-wrapper-div mx-auto w-full">test dashboard</div>
    </div>
  );
};

export default AdminDashboard;
