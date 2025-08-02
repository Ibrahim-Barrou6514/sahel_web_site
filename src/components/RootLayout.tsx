import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from './QuoteModal'
import { Outlet } from 'react-router'
import { useState } from "react";

export default function RootLayout() {

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        openQuoteModal={() => setIsQuoteModalOpen(true)}
      />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
