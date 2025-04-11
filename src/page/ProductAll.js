import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const ProductAll = ({ productList, query }) => {
  const navigate = useNavigate();

  const intoDetail = id => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div>
        {productList.length > 0 ? (
          <div>
            <div className="main-title">
              <div className="main-title-cate">
                HOME &nbsp;&nbsp; /&nbsp; &nbsp; 여성
              </div>
              <div className="main-title-info">
                <div className="font-bold">PASTEL NOTES</div>
                <div className="main-title-sub">
                  소프트한 컬러를 더한 뉴 시즌 실루엣
                </div>
              </div>
            </div>
            <div className="main-top-img">
              <img src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2695110020250408140430.jpg"></img>
            </div>
            <div>
              {query === "" || query.size === 0 ? (
                <div className="product-main-center-mo">
                  <Row className="product-main-center">
                    {productList.slice(4, 6).map(item => (
                      <Col className="productImgCol" lg={4} key={item.id}>
                        <div className="fix">
                          <img
                            onClick={() => intoDetail(item._id)}
                            alt="product"
                            className="productImg"
                            src={item.img[0]}
                          />
                        </div>
                        <div className="product-info">
                          <div>
                            <div>{item.name}</div>
                            <div>
                              {item.price && !isNaN(item.price)
                                ? item.price.toLocaleString()
                                : ""}
                              원
                            </div>
                            <div className="season-font">
                              {item?.choice === true ? "CONCIOUS CHOICE" : ""}
                            </div>
                            <div className="season-font">
                              {item?.choice === false ? item.season : ""}
                            </div>
                          </div>
                          <div className="product-color-size">
                            +
                            {item && item.color && Array.isArray(item.color)
                              ? item.color.length
                              : 0}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              ) : (
                <div></div>
              )}
              <Row className="sub-main">
                {productList.map(item => (
                  <Col className="productImgCol" lg={3}>
                    <div className="fix">
                      <img
                        onClick={() => intoDetail(item._id)}
                        alt="product"
                        className="productImg"
                        src={item.img[0]}
                      ></img>
                    </div>
                    <div className="product-info">
                      <div>
                        <div>{item.name}</div>
                        <div>
                          {item.price && !isNaN(item.price)
                            ? item.price.toLocaleString()
                            : ""}
                          원
                        </div>
                        <div className="season-font">
                          {item?.choice === true ? "CONCIOUS CHOICE" : ""}
                        </div>
                        {item?.choice === false ? item.season : ""}
                      </div>
                      <div className="product-color-size">
                        +
                        {item && item.color && Array.isArray(item.color)
                          ? item.color.length
                          : 0}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ) : (
          <div className="product-non-existent">
            <div>존재하는 상품이 없습니다</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAll;
