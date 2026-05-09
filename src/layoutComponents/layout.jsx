import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Top from "../components/Top"

const Layout = ({ children }) => {
  return (
    <div>
      <Top />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;