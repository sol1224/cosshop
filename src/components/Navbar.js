import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    if (!isSearchOpen) {
      setIsOpen(isOpen => !isOpen);
    }
  };

  const toggleSerch = () => {
    if (!isOpen) {
      setIsSearchOpen(isSearchOpen => !isSearchOpen);
    }
  };

  return (
    <div>
      <div className="nav-title">
        <div className="nav-title-font">
          2025 봄 여름 런웨이 | 컬렉션 보러가기
        </div>
      </div>

      {/* ================= */}
      <Row className="nav-body">
        <Col>
          <button className="menu-button" onClick={() => toggleMenu()}>
            <img
              alt="iconmenubar"
              className="icon-img menubar col-img"
              src="/icon/menubar.png"
            ></img>
          </button>
        </Col>
        <Col className="button-mo">
          <a className="cate" href="#">
            여성
          </a>
        </Col>
        <Col>
          <a className="cate" href="#">
            남성
          </a>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col xs={2}>
          <a href="#">
            <img
              alt="iconlogo"
              className="logo-img col-img"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/COS_Logo.png"
            ></img>
          </a>
        </Col>
        <Col></Col>
        <Col xs={4} className="icon-list">
          <button className="menu-button" onClick={() => toggleSerch()}>
            <img
              alt="iconsearchbar"
              className="icon-img col-img"
              src="/icon/search.png"
            ></img>
          </button>
          <button className="menu-button button-mo">
            <img
              alt="iconmenubar"
              className="icon-img menubar col-img"
              src="/icon/user.png"
            ></img>
          </button>
          <button className="menu-button button-mo">
            <img
              alt="iconheart"
              className="icon-img col-img"
              src="/icon/heart2.png"
            ></img>
          </button>
          <button className="menu-button button-mo">
            <img
              alt="iconbag"
              className="icon-img col-img"
              src="/icon/bag2.png"
            ></img>
          </button>
        </Col>
      </Row>

      <Sidebar isOpen={isOpen} />
      <SearchBar isSearchOpen={isSearchOpen} />
    </div>
  );
};

export default Navbar;
