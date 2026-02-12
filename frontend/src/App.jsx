import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AIProjects from "./pages/AIProjects";
import WebProjects from "./pages/WebProjects";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="ai-projects"
            element={
              <PageTransition>
                <AIProjects />
              </PageTransition>
            }
          />
          <Route
            path="web-projects"
            element={
              <PageTransition>
                <WebProjects />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
