import "./header.css";
import Img1 from "../assets/hImg1.jpg";
import ImgLOGO from "../assets/Blogaway2.png";
import Typical from "react-typical";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          <img src={ImgLOGO} alt="" />
        </span>
        <span className="headerTitleLg">
          <Typical
            loop={Infinity}
            steps={[
              "Welcome To ",
              1000,
              "Blog-a-Way",
              2000,
              "Share Your Journey",
              1000,
              "With The World",
              1000,
            ]}
          />
        </span>
      </div>
      <img className="headerImg" src={Img1} alt="" />
    </div>
  );
}
