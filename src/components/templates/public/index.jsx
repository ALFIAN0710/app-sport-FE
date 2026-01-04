import Navbar from "../../fragments/Navbar";
import Footer from "../../fragments/Footer";
import { Outlet } from "react-router-dom";
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
