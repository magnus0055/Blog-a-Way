import "./sidebar.css";
import Img2 from "../assets/headerImg2.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




export default function Sidebar() {


  const [cats, setCats] = useState([]);

  useEffect(()=> {
   const getCats = async ()=>{
    const res = await axios.get("/categories")
    setCats(res.data);
   }
   getCats();
  },[])


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={Img2} alt="" style={{ width: "270px", height: "305px" }} />
        <p className="SidebarDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
          facilis rem recusandae reprehenderit ullam quis dolorem,
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <Link className="link sidebarListItem" to="/">
              All
            </Link>
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`}  className="link">
          <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="SidebarIcon fa-brands fa-instagram"></i>
          <i className="SidebarIcon fa-brands fa-linkedin"></i>
          <i className="SidebarIcon fa-brands fa-github"></i>
          <i className="SidebarIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
