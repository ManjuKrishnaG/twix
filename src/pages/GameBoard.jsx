// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const icons = ["🍫", "📘", "✂️", "📎", "📐", "🧮", "✈️", "📕"];

// const shuffledCards = () => {
//   const pair = [...icons, ...icons];
//   return pair
//     .sort(() => Math.random() - 0.5)
//     .map((icon, i) => ({ id: i, icon, flipped: false, matched: false }));
// };

// export default function GameBoard() {
//   const navigate = useNavigate();

//   const [cards, setCards] = useState(shuffledCards());
//   const [first, setFirst] = useState(null);
//   const [second, setSecond] = useState(null);
//   const [lock, setLock] = useState(false);

//   const handleClick = card => {
//     if (lock || card.flipped || card.matched) return;

//     setCards(prev =>
//       prev.map(c =>
//         c.id === card.id ? { ...c, flipped: true } : c
//       )
//     );

//     if (!first) {
//       setFirst(card);
//     } else {
//       setSecond(card);
//       setLock(true);
//     }
//   };

//   useEffect(() => {
//     if (!first || !second) return;

//     if (first.icon === second.icon) {
//       setCards(prev =>
//         prev.map(c =>
//           c.icon === first.icon ? { ...c, matched: true } : c
//         )
//       );
//       reset();
//     } else {
//       setTimeout(() => {
//         setCards(prev =>
//           prev.map(c =>
//             c.id === first.id || c.id === second.id
//               ? { ...c, flipped: false }
//               : c
//           )
//         );
//         reset();
//       }, 700);
//     }
//   }, [first, second]);

//   // ✅ WIN DETECTION + REDIRECT
//   useEffect(() => {
//     if (cards.length && cards.every(card => card.matched)) {
//       setTimeout(() => {
//         navigate("/thank-you");
//       }, 900);
//     }
//   }, [cards, navigate]);

//   const reset = () => {
//     setFirst(null);
//     setSecond(null);
//     setLock(false);
//   };

//   return (
//     <div className="game-area">
//       <div className="grid">
//         {cards.map(card => (
//           <div
//             key={card.id}
//             className={`card ${card.flipped || card.matched ? "open" : ""}`}
//             onClick={() => handleClick(card)}
//           >
//             {(card.flipped || card.matched) && card.icon}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameBoard({ cards, setCards }) {
  const navigate = useNavigate();

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [lock, setLock] = useState(false);

  const handleClick = card => {
    if (lock || card.flipped || card.matched) return;

    setCards(prev =>
      prev.map(c =>
        c.id === card.id ? { ...c, flipped: true } : c
      )
    );

    if (!first) {
      setFirst(card);
    } else {
      setSecond(card);
      setLock(true);
    }
  };

  useEffect(() => {
    if (!first || !second) return;

    if (first.icon === second.icon) {
      setCards(prev =>
        prev.map(c =>
          c.icon === first.icon ? { ...c, matched: true } : c
        )
      );
      reset();
    } else {
      setTimeout(() => {
        setCards(prev =>
          prev.map(c =>
            c.id === first.id || c.id === second.id
              ? { ...c, flipped: false }
              : c
          )
        );
        reset();
      }, 700);
    }
  }, [first, second]);

  useEffect(() => {
    if (cards.length && cards.every(card => card.matched)) {
      setTimeout(() => {
        navigate("/thank-you");
      }, 900);
    }
  }, [cards, navigate]);

  const reset = () => {
    setFirst(null);
    setSecond(null);
    setLock(false);
  };

  return (
    <div className="grid">
      {cards.map(card => (
        <div
          key={card.id}
          className={`card ${card.flipped || card.matched ? "open" : ""}`}
          onClick={() => handleClick(card)}
        >
          {(card.flipped || card.matched) && card.icon}
        </div>
      ))}
    </div>
  );
}

