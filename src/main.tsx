import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.tsx';
import Portal from './pages/Portal.tsx';
import PostPage from "./pages/PostPage.tsx";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Unavailable from './pages/Unavailable.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-screen min-w-screen flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dynamic Site */}
        <main className="flex flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/highlight" element={<Unavailable/>} />
            <Route path="/profile" element={<Unavailable/>} />
            <Route path="/event/:id" element={<PostPage />} /> {/* Dynamic route */}

            <Route path="*" element={<Unavailable />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
