import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ width: "100%" }}>
        <img alt="iconlogo" src="/icon/footer.png"></img>
      </div>
      <div className="footer-text1">
        <div className="mo-row">
          <div className="mo-row-pd">
            <u>이용약관</u>
          </div>
          <div className="mo-row-pd">
            <u>개인정보처리방침</u>
          </div>
          <div className="mo-row-pd">
            <u>현대백화점 그룹</u>
          </div>
        </div>

        <div className="top-gap">
          COS 온라인 스토어는 <u>더현대닷컴</u> 을 이용하고 있습니다.
        </div>
      </div>
      <div className="pd-10">
        <div>
          주식회사 현대백화점 대표이사 : 정지선, 정지영 서울시 강남구
          테헤란로98길 12/
        </div>
        <div>
          사업자등록번호: 211-87-21455 [<u>사업자정보 확인</u>] / 통신판매업신고
          : 2010-서울강남-01882/
        </div>
        <div>
          개인정보관리 및 청소년보호 책임자 : 회원운영관리담당 박근호/ E-MAIL:
          <u>customerservice.kr@cos.com</u>
        </div>
        <div>고객센터 : 1800-2765/호스팅서비스 : (주)현대백화점/</div>
        <div>
          고객님의 안전거래를 위해 현금결제시 우리은행과 채무지급보증계약을
          체결하여 안전거래를 보장하고 있습니다.
        </div>
        <div>
          <u>서비스 가입사실 확인</u>
        </div>
        <div className="copy">
          Copyright© Hyundai Department Store. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
