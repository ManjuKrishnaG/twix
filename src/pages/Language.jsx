// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useApp } from "../context/AppContext"

// export default function Language() {
//   const navigate = useNavigate()
//   const { setLanguage, setCountry } = useApp()

//   const [langOpen, setLangOpen] = useState(false)
//   const [countryOpen, setCountryOpen] = useState(false)
//   const [lang, setLang] = useState("Select Language")
//   const [country, setCountryVal] = useState("Select Country")

//   return (
//     <div className="screen bg-language">

//       <div className="bottom-ui">

//         {/* Language Dropdown */}
//         <div className="dropdown-box">
//           <button
//             className="twix-select"
//             onClick={() => {
//               setLangOpen(!langOpen)
//               setCountryOpen(false)
//             }}
//           >
//             {lang}
//             <span>⌄</span>
//           </button>

//           {langOpen && (
//             <div className="twix-dropdown">
//               <div onClick={() => { setLang("English"); setLanguage("en"); setLangOpen(false) }}>English</div>
//               <div onClick={() => { setLang("Arabic"); setLanguage("ar"); setLangOpen(false) }}>Arabic</div>
//             </div>
//           )}
//         </div>

//         {/* Country Dropdown */}
//         <div className="dropdown-box">
//           <button
//             className="twix-select"
//             onClick={() => {
//               setCountryOpen(!countryOpen)
//               setLangOpen(false)
//             }}
//           >
//             {country}
//             <span>⌄</span>
//           </button>

//           {countryOpen && (
//             <div className="twix-dropdown">
//               <div onClick={() => { setCountryVal("UAE"); setCountry("uae"); setCountryOpen(false); navigate("/user/age-verification") }}>United Arab Emirates</div>
//               <div onClick={() => { setCountryVal("Saudi Arabia"); setCountry("ksa"); setCountryOpen(false); navigate("/user/age-verification") }}>Saudi Arabia</div>
//               <div onClick={() => { setCountryVal("Kuwait"); setCountry("kw"); setCountryOpen(false); navigate("/user/age-verification") }}>Kuwait</div>
//               <div onClick={() => { setCountryVal("Qatar"); setCountry("qa"); setCountryOpen(false); navigate("/user/age-verification") }}>Qatar</div>
//               <div onClick={() => { setCountryVal("Oman"); setCountry("om"); setCountryOpen(false); navigate("/user/age-verification") }}>Oman</div>
//               <div onClick={() => { setCountryVal("Bahrain"); setCountry("bh"); setCountryOpen(false); navigate("/user/age-verification") }}>Bahrain</div>
//             </div>
//           )}
//         </div>

//       </div>

//     </div>
//   )
// }


import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useApp } from "../context/AppContext"

export default function Language() {
  const navigate = useNavigate()
  const { language, setLanguage, setCountry } = useApp()

  const [langOpen, setLangOpen] = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)

  // ✅ Handle RTL when Arabic selected
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  // ✅ Dynamic text based on language
  const text = {
    en: {
      selectLanguage: "Select Language",
      selectCountry: "Select Country",
      english: "English",
      arabic: "Arabic",
      uae: "United Arab Emirates",
      ksa: "Saudi Arabia",
      kuwait: "Kuwait",
      qatar: "Qatar",
      oman: "Oman",
      bahrain: "Bahrain",
    },
    ar: {
      selectLanguage: "اختر اللغة",
      selectCountry: "اختر الدولة",
      english: "الإنجليزية",
      arabic: "العربية",
      uae: "الإمارات العربية المتحدة",
      ksa: "المملكة العربية السعودية",
      kuwait: "الكويت",
      qatar: "قطر",
      oman: "عُمان",
      bahrain: "البحرين",
    }
  }

  const t = text[language]

  return (
    <div className="screen bg-language">

      <div className="bottom-ui">

        {/* Language Dropdown */}
        {/* Language Dropdown */}
<div className="dropdown-box">
  <button
    className="twix-select"
    onClick={() => {
      setLangOpen(!langOpen)
      setCountryOpen(false)
    }}
  >
    {language === "en"
      ? t.english
      : language === "ar"
      ? t.arabic
      : t.selectLanguage}
    <span>⌄</span>
  </button>

  {langOpen && (
    <div className="twix-dropdown">
      <div onClick={() => { setLanguage("en"); setLangOpen(false) }}>
        {t.english}
      </div>
      <div onClick={() => { setLanguage("ar"); setLangOpen(false) }}>
        {t.arabic}
      </div>
    </div>
  )}
</div>

        {/* Country Dropdown */}
        <div className="dropdown-box">
          <button
            className="twix-select"
            onClick={() => {
              setCountryOpen(!countryOpen)
              setLangOpen(false)
            }}
          >
            {t.selectCountry}
            <span>⌄</span>
          </button>

          {countryOpen && (
            <div className="twix-dropdown">
              <div onClick={() => { setCountry("uae"); navigate("/user/age-verification") }}>
                {t.uae}
              </div>
              <div onClick={() => { setCountry("ksa"); navigate("/user/age-verification") }}>
                {t.ksa}
              </div>
              <div onClick={() => { setCountry("kw"); navigate("/user/age-verification") }}>
                {t.kuwait}
              </div>
              <div onClick={() => { setCountry("qa"); navigate("/user/age-verification") }}>
                {t.qatar}
              </div>
              <div onClick={() => { setCountry("om"); navigate("/user/age-verification") }}>
                {t.oman}
              </div>
              <div onClick={() => { setCountry("bh"); navigate("/user/age-verification") }}>
                {t.bahrain}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

