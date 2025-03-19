import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    //  react router , Tanstack query
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
