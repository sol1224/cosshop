import React from "react";

const HomeBottom = () => {
  return (
    <div className="home-bottom">
      <div className="home-bottom-img">
        <div className="home-bottom-logo">
          <img
            alt="iconlogo"
            className="logo-img-footer"
            src="/icon/logo-footer.png"
          ></img>
        </div>
      </div>
      <div className="home-bottom-text">
        <div className="home-bottom-text-area">
          <div className="home-bottom-title">
            <div>CUSTOMER SERVICE</div>
          </div>
          <div className="home-bottom-sub">
            <div>고객 서비스</div>
            <div>고객 문의</div>
            <div>매장 찾기</div>
            <div>배송 정보</div>
            <div>반품 및 환불</div>
            <div>제품관리</div>
            <div>핏 가이드</div>
          </div>
        </div>

        <div className="home-bottom-text-area about-mo">
          <div className="home-bottom-title">
            <div>ABOUT COS</div>
          </div>
          <div className="home-bottom-sub">
            <div>매거진</div>
            <div>디자인과 제작과정</div>
            <div>협력업체</div>
            <div>다양성 &포용성</div>
            <div>채용 정보</div>
            <div>프레스 문의</div>
          </div>
        </div>

        <div className="home-bottom-text-area">
          <div className="home-bottom-title">
            <div>FOLLOW US</div>
          </div>
          <div className="home-bottom-sub">
            <div>KAKAOTALK</div>
            <div>FACEBOOK</div>
            <div>INSTAGRAM</div>
            <div>PINTEREST</div>
            <div>SPOTIFY</div>
          </div>
        </div>
      </div>
      <div className="home-bottom-etc">
        <div className="etc-gap2">
          <div className="etc-gap">COS</div>
          <div>HOME</div>
        </div>
        <div className="etc-gap2 gap-right">
          <div>배송국가</div>
          <div>
            <div className="font-sm">＞</div>
          </div>
          <div>대한민국</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
