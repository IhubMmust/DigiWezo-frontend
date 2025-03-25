import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const queryClient = new QueryClient();
  return (
    //  react router , Tanstack query
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
