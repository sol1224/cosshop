import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ isSearchOpen, setIsSearchOpen, setSex }) => {
  const recommended = [
    "COS 런웨이 컬렉션",
    "리넨",
    "셔츠",
    "드레스",
    "트라우저",
  ];

  const navigate = useNavigate();
  const search = event => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      setIsSearchOpen(false);
      setSex("");
      navigate(`/product?search=${keyword}`);
      event.target.value = "";
    }
  };

  return (
    <div>
      <div className={isSearchOpen ? "search-show-menu dis-flex" : "hide-menu"}>
        <div className="box">
          <div className="box-position">
            <input type="text" onKeyDown={event => search(event)} required />
            {/* <label>Name</label> */}
            <span></span>
          </div>
          <div className="reco">
            <div className="reco-title">추천검색어</div>
            <div className="dis-col">
              {recommended.map(item => (
                <a className="recommendedItem">`{item}`</a>
              ))}
            </div>
            <div></div>
          </div>
          <div className="bottom-border"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
