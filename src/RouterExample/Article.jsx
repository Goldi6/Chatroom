import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import ArticlesNav from "./ArticlesNav";

export default function Article(props) {
  //   const location = useLocation();
  const { name } = useParams();
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(-1);
  };
  //   const outlet = useOutletContext();
  //   console.log(outlet);

  return (
    <div>
      {<ArticlesNav />}
      Article {name ? name : ""}
      <button onClick={onClickButton}>Back</button>
    </div>
  );
}
