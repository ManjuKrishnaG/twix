// import { useNavigate } from "react-router-dom"

// import bg from "../assets/images/app-background.jpg"
// import logo from "../assets/images/logo.webp"
// import burst from "../assets/images/age-gate-image.webp"

// export default function AgeVerification() {
//   const navigate = useNavigate()

//   return (
//     <div className="screen age-wrapper">

//       {/* Background */}
//       <img src={bg} className="age-bg" />

//       {/* Center Card */}
//       <div className="age-card">

//         <img src={logo} className="age-logo" />

//         <h1>ARE YOU ABOVE<br />13 YEARS OLD?</h1>

//         <img src={burst} className="age-burst" />

//         <button className="age-btn yes" onClick={() => navigate("/user/detail-form")}>
//           YES
//         </button>

//         <button className="age-btn no" onClick={() => alert("Sorry! You are not eligible")}>
//           NO
//         </button>

//       </div>

//     </div>
//   )
// }





import { useNavigate } from "react-router-dom"
import { useApp } from "../context/AppContext"
import { useEffect } from "react"

import bg from "../assets/images/app-background.jpg"
import logo from "../assets/images/logo.webp"
import burst from "../assets/images/age-gate-image.webp"

export default function AgeVerification() {
  const navigate = useNavigate()
  const { language } = useApp()

  // ✅ RTL support
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  // ✅ Translations
  const text = {
    en: {
      question: "ARE YOU ABOVE 13 YEARS OLD?",
      yes: "YES",
      no: "NO",
      notEligible: "Sorry! You are not eligible"
    },
    ar: {
      question: "هل عمرك أكثر من 13 سنة؟",
      yes: "نعم",
      no: "لا",
      notEligible: "عذراً! أنت غير مؤهل"
    }
  }

  const t = text[language]

  return (
    <div className="screen age-wrapper">

      {/* Background */}
      <img src={bg} className="age-bg" alt="" />

      {/* Center Card */}
      <div className="age-card">

        <img src={logo} className="age-logo" alt="logo" />

        <h1>{t.question}</h1>

        <img src={burst} className="age-burst" alt="" />

        <button
          className="age-btn yes"
          onClick={() => navigate("/user/detail-form")}
        >
          {t.yes}
        </button>

        <button
          className="age-btn no"
          onClick={() => alert(t.notEligible)}
        >
          {t.no}
        </button>

      </div>

    </div>
  )
}

