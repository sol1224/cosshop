import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
  return (
    <Row>
      <Col className="mainImg" lg={6} style={{ height: "100%" }}>
        <img
          alt="mainImg1"
          className="selector"
          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2693390020250401103120.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Col>
      <Col className="mainImg" lg={6} style={{ height: "100%" }}>
        <img
          alt="mainImg2"
          className="selector"
          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2693391020250401091813.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Col>
    </Row>
  );
};

export default Main;
