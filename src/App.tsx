import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Oferta from "./pages/Oferta";
import Cennik from "./pages/Cennik";
import NaszZespol from "./pages/NaszZespol";
import UmowSpotkanie from "./pages/UmowSpotkanie";
import Kontakt from "./pages/Kontakt";
import Posluszenstwo from "./pages/oferta/Posluszenstwo";
import Nosework from "./pages/oferta/Nosework";
import SpacerySocjalizacyjne from "./pages/oferta/SpacerySocjalizacyjne";
import KonsultacjeSpacerowe from "./pages/oferta/KonsultacjeSpacerowe";
import PsiFitness from "./pages/oferta/PsiFitness";
import KonsultacjeBehawioralne from "./pages/oferta/KonsultacjeBehawioralne";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/oferta/posluszenstwo" element={<Posluszenstwo />} />
          <Route path="/oferta/nosework" element={<Nosework />} />
          <Route path="/oferta/spacery-socjalizacyjne" element={<SpacerySocjalizacyjne />} />
          <Route path="/oferta/konsultacje-spacerowe" element={<KonsultacjeSpacerowe />} />
          <Route path="/oferta/psi-fitness" element={<PsiFitness />} />
          <Route path="/oferta/konsultacje-behawioralne" element={<KonsultacjeBehawioralne />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/nasz-zespol" element={<NaszZespol />} />
          <Route path="/umow-spotkanie" element={<UmowSpotkanie />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
