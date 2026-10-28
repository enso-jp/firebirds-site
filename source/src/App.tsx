import { Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./lib/i18n";
import { Home } from "./pages/Home";
import { StoryCraft, StoryTropical } from "./pages/Story";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Collection } from "./pages/Collection";
import { Book } from "./pages/Book";

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories/tropical-origin" element={<StoryTropical />} />
        <Route path="/stories/vietnam-craft" element={<StoryCraft />} />
        <Route path="/tropical-origin" element={<Navigate to="/stories/tropical-origin" replace />} />
        <Route path="/cocktailmenu" element={<Menu />} />
        <Route path="/menu" element={<Navigate to="/cocktailmenu" replace />} />
        <Route path="/about-me-1" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/book-online" element={<Book />} />
        <Route path="/locations" element={<Navigate to="/#branches" replace />} />
        <Route path="/service-page/firebirds-table-reservation" element={<Navigate to="/book-online" replace />} />
        <Route path="/ja" element={<Home />} />
        <Route path="/ko" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
}
