import { Routes, Route, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Language from "./pages/Language"
import AgeGate from "./pages/AgeGate"
import UserForm from "./pages/UserForm"
import Game from "./pages/Game"
import MobileWrapper from "./components/MobileWrapper"
import ThankYou from "./pages/ThankYou";



export default function App() {
return (
<MobileWrapper>
<AnimatePresence mode="wait">
<Routes>
<Route path="/" element={<Navigate to="/user" />} />
<Route path="/user" element={<Language />} />
<Route path="/user/age-verification" element={<AgeGate />} />
<Route path="/user/detail-form" element={<UserForm />} />
<Route path="/user/game" element={<Game />} />
<Route path="/thank-you" element={<ThankYou />} />

</Routes>
</AnimatePresence>
</MobileWrapper>
)
}