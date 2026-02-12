import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow z-10 pt-28 md:pt-36">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
