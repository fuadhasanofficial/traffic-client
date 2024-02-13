import { createBrowserRouter } from "react-router-dom";
import Actions from "../components/Actions/Actions";
import AutoMatic from "../components/Automatic/AutoMatic";
import Main from "../components/Layout/Main/Main";
import Search from "../components/Search/Search";
import DisposalReport from "../components/disposal/DisposalReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Actions /> },
      { path: "/action/:id", element: <Search></Search> },
      { path: "/action/automatic-system", element: <AutoMatic /> },
      { path: "/action/complaint-disposal-car", element: <DisposalReport /> },
      { path: "action/report-car", element: <DisposalReport /> },
    ],
  },
]);
