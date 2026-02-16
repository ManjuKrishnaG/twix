import { createContext, useContext, useState } from "react"


const AppContext = createContext()


export const AppProvider = ({ children }) => {
const [language, setLanguage] = useState("en")
const [country, setCountry] = useState("uae")
const [user, setUser] = useState(null)


return (
<AppContext.Provider value={{ language, setLanguage, country, setCountry, user, setUser }}>
{children}
</AppContext.Provider>
)
}


export const useApp = () => useContext(AppContext)