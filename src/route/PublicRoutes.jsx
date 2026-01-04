import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/templates/public";
import PublicPage from "../pages/public";
import FeaturesPage from "../pages/public/FeaturesPage";
import HowItWorks from "../pages/public/HowItWorks";
import Contact from "../pages/public/Contact";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
