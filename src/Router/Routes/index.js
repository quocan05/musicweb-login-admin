import { useRoutes } from "react-router-dom";
import RoutesConfig from "../ConfigRoutes";
const AllRoutes = () => {
  return useRoutes(RoutesConfig);
};
export default AllRoutes;
