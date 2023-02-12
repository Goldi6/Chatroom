import React from "react";
import "./roterExampleStyle.scss";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import RouterHome from "./RouterHome";
import Articles from "./Articles";
import NotFound from "./NotFound";
import RouterHeader from "./RouterHeader";
import ArticlesNav from "./ArticlesNav";
import Article from "./Article";

export default function RouterExample() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(navigate, location);

  // const handleNavigate = (path) => {
  //   navigate(path);
  // };

  // if (location.pathname === "/") {
  //   return <Navigate to="/home" replace />;

  // }
  return (
    <>
      <RouterHeader />
      <Routes>
        <Route path="article" element={<ArticlesNav />} />
      </Routes>
      <Routes>
        <Route path="articles" element={<ArticlesNav />} />
      </Routes>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" replace />}></Route>
        <Route path="home" index element={<RouterHome />} />
        <Route path="articles" element={<Articles />} />
        <Route path="article/:name" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/articles",
//     element: <Articles />,
//   },
//   {
//     path: "/home",
//     element: <RouterHome />,
//   },
//   // {
//   //   pathname: "/bbq/pig-pickins",
//   //   search: "?campaign=instagram",
//   //   hash: "#menu",
//   //   state: null,
//   //   key: "aefz24ie"
//   // }
// ]);

// const RouterExample = () => {
//   <RouterProvider history={history} router={router}></RouterProvider>;
// };
