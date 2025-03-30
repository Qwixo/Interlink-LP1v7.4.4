import React from 'react';
import { ParallaxScroll } from './ui/parallax-scroll';

const images = [
  "https://i.imgur.com/KSHUrgP.jpeg",
  "https://i.imgur.com/YqRhjAx.jpeg",
  "https://i.imgur.com/og5Xkom.jpeg",
  "https://i.imgur.com/oPOyATA.jpeg",
  "https://i.imgur.com/eVo8eYl.jpeg",
  "https://i.imgur.com/Ebr66Jg.jpeg",
  "https://i.imgur.com/55rE0R8.jpeg",
  "https://i.imgur.com/yv24Bj1.jpeg",
  "https://i.imgur.com/BKu9LNH.jpeg",
  "https://i.imgur.com/eVzxCUf.jpeg",
  "https://i.imgur.com/fkr8T23.jpeg",
  "https://i.imgur.com/ok5Lc6u.jpeg",
  "https://i.imgur.com/H3Er8BA.jpeg",
  "https://i.imgur.com/YGURtyz.jpeg",
  "https://i.imgur.com/VcF77OM.jpeg",
  "https://i.imgur.com/W5ydknw.jpeg",
  "https://i.imgur.com/iZAow8f.jpeg",
  "https://i.imgur.com/26omH46.jpeg",
  "https://i.imgur.com/E4XWdCP.jpeg",
  "https://i.imgur.com/6bLitwj.jpeg",
  "https://i.imgur.com/VSlbBYO.jpeg",
  "https://i.imgur.com/SCU3wa9.jpeg",
  "https://i.imgur.com/R1pjYYj.jpeg",
  "https://i.imgur.com/RNEaHdZ.jpeg",
  "https://i.imgur.com/d7uYvp5.jpeg",
  "https://i.imgur.com/VsAFqXZ.jpeg",
  "https://i.imgur.com/HQ2aIEZ.png",
  "https://i.imgur.com/6plpYnW.jpeg",
  "https://i.imgur.com/k018UnK.jpeg",
];

const StudentLifeSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <ParallaxScroll images={images} />
      </div>
    </section>
  );
};

export default StudentLifeSection;
