// import { useEffect, useState } from "react";
// import GameBoard from "./GameBoard";

// const icons = ["🍫", "📘", "✂️", "📎", "📐", "🧮", "✈️", "📕"];

// const shuffleCards = () => {
//   const pair = [...icons, ...icons];
//   return pair
//     .sort(() => Math.random() - 0.5)
//     .map((icon, i) => ({ id: i, icon, flipped: true, matched: false }));
// };

// const GameWrapper = () => {
//   const [cards, setCards] = useState(shuffleCards());
//   const [showPreview, setShowPreview] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // hide all cards after preview
//       setCards(prev =>
//         prev.map(card => ({ ...card, flipped: false }))
//       );
//       setShowPreview(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="game-container">
//       <img src="/logo.webp" alt="Twix" className="logo" />
//       <h2 className="title">MEMORY MATCH</h2>

//       <div className="game-area">
//         {showPreview ? (
//           <div className="grid">
//             {cards.map(card => (
//               <div key={card.id} className="card open">
//                 {card.icon}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <GameBoard cards={cards} setCards={setCards} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default GameWrapper;


import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import GameBoard from "./GameBoard";

const icons = ["🍫", "📘", "✂️", "📎", "📐", "🧮", "✈️", "📕"];

const shuffleCards = () => {
  const pair = [...icons, ...icons];
  return pair
    .sort(() => Math.random() - 0.5)
    .map((icon, i) => ({ id: i, icon, flipped: true, matched: false }));
};

const GameWrapper = () => {
  const { language } = useApp();   // ✅ get language

  const [cards, setCards] = useState(shuffleCards());
  const [showPreview, setShowPreview] = useState(true);

  // ✅ RTL support (remove if already inside AppContext)
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(prev =>
        prev.map(card => ({ ...card, flipped: false }))
      );
      setShowPreview(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Translations
  const text = {
    en: {
      title: "MEMORY MATCH"
    },
    ar: {
      title: "لعبة الذاكرة"
    }
  };

  const t = text[language];

  return (
    <div className="game-container">
      <img src="/logo.webp" alt="Twix" className="logo" />

      <h2 className="title">{t.title}</h2>

      <div className="game-area">
        {showPreview ? (
          <div className="grid">
            {cards.map(card => (
              <div key={card.id} className="card open">
                {card.icon}
              </div>
            ))}
          </div>
        ) : (
          <GameBoard cards={cards} setCards={setCards} />
        )}
      </div>
    </div>
  );
};

export default GameWrapper;


