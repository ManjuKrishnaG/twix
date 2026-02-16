// import { useNavigate } from "react-router-dom"

// import logo from "../assets/images/logo.webp"
// import bg from "../assets/images/app-background.jpg"

// export default function DetailForm() {
//   const navigate = useNavigate()

//   return (
//     <div className="form-screen">

//       {/* Header */}
//       <div className="form-header">
//         <img src={logo} />
//       </div>

//       {/* Body */}
//       <div className="form-body" style={{ backgroundImage: `url(${bg})` }}>

//         {/* Player 1 */}
//         <div className="player">
//           <span>PLAYER</span>
//           <h2>1</h2>

//           <input placeholder="Name" />
//           <input placeholder="Email" />
//           <input placeholder="Phone Number" />
//         </div>

//         {/* Player 2 */}
//         <div className="player">
//           <span>PLAYER</span>
//           <h2>2</h2>

//           <input placeholder="Name" />
//           <input placeholder="Email" />
//           <input placeholder="Phone Number" />
//         </div>

//         <button className="submit-btn" onClick={() => navigate("/user/game")}>
//           SUBMIT
//         </button>

//         <p className="stand-text">
//           VISIT OUR STAND TO DOUBLE THE FUN!
//         </p>

//       </div>

//     </div>
//   )
// }

import { useNavigate } from "react-router-dom"
import { useApp } from "../context/AppContext"
import { useEffect } from "react"

import logo from "../assets/images/logo.webp"
import bg from "../assets/images/app-background.jpg"

export default function DetailForm() {
  const navigate = useNavigate()
  const { language } = useApp()

  // ✅ RTL Support
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  // ✅ Translations
  const text = {
    en: {
      player: "PLAYER",
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      submit: "SUBMIT",
      standText: "VISIT OUR STAND TO DOUBLE THE FUN!"
    },
    ar: {
      player: "اللاعب",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      submit: "إرسال",
      standText: "قم بزيارة منصتنا لمضاعفة المتعة!"
    }
  }

  const t = text[language]

  return (
    <div className="form-screen">

      {/* Header */}
      <div className="form-header">
        <img src={logo} alt="logo" />
      </div>

      {/* Body */}
      <div
        className="form-body"
        style={{ backgroundImage: `url(${bg})` }}
      >

        {/* Player 1 */}
        <div className="player">
          <span>{t.player}</span>
          <h2>1</h2>

          <input placeholder={t.name} />
          <input placeholder={t.email} />
          <input placeholder={t.phone} />
        </div>

        {/* Player 2 */}
        <div className="player">
          <span>{t.player}</span>
          <h2>2</h2>

          <input placeholder={t.name} />
          <input placeholder={t.email} />
          <input placeholder={t.phone} />
        </div>

        <button
          className="submit-btn"
          onClick={() => navigate("/user/game")}
        >
          {t.submit}
        </button>

        <p className="stand-text">
          {t.standText}
        </p>

      </div>

    </div>
  )
}

