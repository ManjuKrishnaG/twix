// import bg from "../assets/images/app-background.jpg";
// import logo from "../assets/images/logo.webp";
// import choc from "../assets/images/choco.webp";

// export default function ThankYou() {
//   return (
//     <div
//       className="screen"
//       style={{ background: `url(${bg}) center/cover no-repeat` }}
//     >
//       <div className="thank-wrapper">
//         <img src={logo} className="thank-logo" />

//         <div className="thank-card">
//           <h1>THANK YOU</h1>
//         </div>

//         <p className="thank-text">
//           YOU HAVE ENTERED <br />
//           THE DRAW TO <br />
//           <span>WIN</span>
//         </p>

//         <p className="thank-sub">EXCITING PRIZES</p>

//         <img src={choc} className="thank-choco" />
//       </div>
//     </div>
//   );
// }




import { useApp } from "../context/AppContext";
import { useEffect } from "react";

import bg from "../assets/images/app-background.jpg";
import logo from "../assets/images/logo.webp";
import choc from "../assets/images/choco.webp";

export default function ThankYou() {
  const { language } = useApp();

  // ✅ RTL support (remove if already added globally in AppContext)
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  // ✅ Translations
  const text = {
    en: {
      thankYou: "THANK YOU",
      entered: "YOU HAVE ENTERED",
      draw: "THE DRAW TO",
      win: "WIN",
      prizes: "EXCITING PRIZES"
    },
    ar: {
      thankYou: "شكراً لك",
      entered: "لقد دخلت في",
      draw: "السحب من أجل",
      win: "الفوز",
      prizes: "بجوائز رائعة"
    }
  };

  const t = text[language];

  return (
    <div
      className="screen"
      style={{ background: `url(${bg}) center/cover no-repeat` }}
    >
      <div className="thank-wrapper">
        <img src={logo} className="thank-logo" alt="logo" />

        <div className="thank-card">
          <h1>{t.thankYou}</h1>
        </div>

        <p className="thank-text">
          {t.entered} <br />
          {t.draw} <br />
          <span>{t.win}</span>
        </p>

        <p className="thank-sub">{t.prizes}</p>

        <img src={choc} className="thank-choco" alt="" />
      </div>
    </div>
  );
}

