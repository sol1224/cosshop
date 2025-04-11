import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";

const ProductDetail = ({ user }) => {
  const [item, setItem] = useState("");
  const navigate = useNavigate();

  let { id } = useParams();

  const getProductList = async () => {
    const response = await api.get(`/product/${id}`);
    setItem(response.data.data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="product-detail">
      <section className="product-detail-sub-img">
        <div className="product-detail-sub-img-size sub-img-pd">
          {item.img && item.img.length > 0 ? (
            item.img.map(i => (
              <div>
                <img
                  className="product-detail-sub-img-size"
                  alt="subImg"
                  src={i}
                ></img>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </section>
      <section className="product-detail-main-img">
        {item.img && item.img.length > 0 ? (
          item.img.map(i => (
            <div>
              <img
                className="product-detail-main-img-size"
                alt="mainImg"
                src={i}
              ></img>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </section>
      <section className="product-detail-info">
        <div>
          <div className="product-detail-name">{item.name}</div>
          <div>
            {item.price && !isNaN(item.price)
              ? item.price.toLocaleString()
              : ""}
            원
          </div>
        </div>
        <div className="detail-gap">
          <div>COLOR</div>
          <div className="color-align">
            {Array.isArray(item.color) && item.color.length > 0 ? (
              item.color.map((color, index) => (
                <div key={index} className="color-right-pd">
                  {color}
                </div>
              ))
            ) : (
              <div>No colors available</div>
            )}
          </div>
        </div>
        <div>
          <div>SIZE</div>
          <div>
            {Array.isArray(item.size) && item.size.length > 0 ? (
              item.size.map((s, index) => (
                <button key={index} className="size-button">
                  {s}
                </button>
              ))
            ) : (
              <div>No sizes available</div>
            )}
          </div>
          <div className="detail-etc-size">
            <u>사이즈 가이드</u>
          </div>
        </div>
        <button className="shopping-basket">장바구니 담기</button>
        <div>
          <div className="product-detail-infomaition">
            <u className="detail-title">상품 설명</u>
          </div>
          <div className="detail-ex">
            자연스러운 실루엣과 감각적인 무드가 돋보이는 맥시 드레스입니다.
            가벼운 느낌의 텐셀™ 라이오셀과 리넨 혼방 원단으로 드레이프를
            연출했으며, 에이라인 실루엣과 브이넥, 그리고 볼륨감을 더하는 박스
            플리츠가 더해져 있습니다.
          </div>

          <div className="detail-etc">
            <u>상품 필수 표시 정보</u>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
