import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programm from "./pages/Programm";
import UeberUns from "./pages/UeberUns";
import Mieten from "./pages/Mieten";
import Produzieren from "./pages/Produzieren";
import EventDetail from "./pages/EventDetail";
import Tickets from "./pages/Tickets";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programm" element={<Programm />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/mieten" element={<Mieten />} />
          <Route path="/produzieren" element={<Produzieren />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
