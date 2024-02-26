import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AppProvider from "./context/AppProvider";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <AppProvider>
      <Routes>
        <Route path="/trybe-news" element={<Home />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  )
}

export default App
