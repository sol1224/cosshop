import React from "react";

const Sidebar = ({ isOpen }) => {
  const clothList = [
    "신상품",
    "트렌딩 나우",
    "셔츠",
    "트라우저",
    "폴로 셔츠",
    "티셔츠",
    "니트웨어",
    "코드 & 재킷",
    "진",
    "스웻셔츠 & 후디",
    "수트 & 테일러링",
  ];
  const acc = [
    "신상품 액세서리",
    "가방",
    "선글라스",
    "슈즈",
    "모자 & 머플러",
    "주얼리",
    "벨트",
    "양말",
  ];
  const edits = [
    "2025 봄 여름 런웨이",
    "2025 봄 여름 컬렉션",
    "리넨 컬렉션",
    "COS 셀렉션",
    "매칭 세트",
    "온라인 익스클루시브",
  ];

  return (
    <ul className={isOpen ? "show-menu dis-flex" : "hide-menu"}>
      <section className="sidebar-sec">
        <li style={{ fontWeight: "900" }}>CLOTHING</li>
        {clothList.map(menu => (
          <li>{menu}</li>
        ))}
        <li>모두보기</li>
      </section>
      <section className="sidebar-sec">
        <li style={{ fontWeight: "900" }}>ACCESSORIES</li>
        {acc.map(menu => (
          <li>{menu}</li>
        ))}
      </section>
      <section className="sidebar-sec">
        {edits.map(menu => (
          <li>{menu}</li>
        ))}
      </section>
    </ul>
  );
};

export default Sidebar;
