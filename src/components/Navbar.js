import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setSex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navbarRef = useRef();
  const navigate = useNavigate();

  const loginPage = () => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const productPageMove = sex => {
    setSex(sex);
    navigate(`/product/${sex}`);
  };

  const moveHome = () => {
    navigate("/product");
  };

  // 바깥 클릭을 감지하여 메뉴 상태 업데이트
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // 바깥 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

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
    <div ref={navbarRef}>
      <div className="nav-title">
        <div className="nav-title-font">
          2025 봄 여름 런웨이 | 컬렉션 보러가기
        </div>
      </div>

      {/* ================= */}
      <Row className="nav-body">
        <Col className="col-pd">
          <button
            className="menu-button menu-left-pd"
            onClick={() => toggleMenu()}
          >
            <img
              alt="iconmenubar"
              className="icon-img menubar col-img"
              src="/icon/menubar.png"
            ></img>
          </button>
        </Col>
        <Col className="button-mo">
          <button
            className="cate"
            href="/product"
            onClick={() => productPageMove("women")}
          >
            여성
          </button>
        </Col>
        <Col>
          <button
            className="cate"
            href="/product"
            onClick={() => productPageMove("man")}
          >
            남성
          </button>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col xs={2}>
          <img
            alt="iconlogo"
            className="logo-img col-img"
            onClick={moveHome}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/COS_Logo.png"
          ></img>
        </Col>
        <Col></Col>
        <Col xs={4} className="icon-list">
          <button
            className="menu-button button-mo-pd"
            onClick={() => toggleSerch()}
          >
            <img
              alt="iconsearchbar"
              className="icon-img col-img"
              src="/icon/search.png"
            ></img>
          </button>
          <button className="menu-button button-mo" onClick={loginPage}>
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
          <button className="menu-button button-mo menu-right-pd">
            <img
              alt="iconbag"
              className="icon-img col-img"
              src="/icon/bag2.png"
            ></img>
          </button>
        </Col>
      </Row>

      <Sidebar isOpen={isOpen} />
      <SearchBar
        setSex={setSex}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </div>
  );
};

export default Navbar;
