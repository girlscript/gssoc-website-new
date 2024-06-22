import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./BackToTopButton";
import { useRouter } from "next/router";
import ComingSoon from "./CustomPages/ComingSoon";
import ScrollProgressBar from "./ScrollProgressBar";

const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname != "/comingsoon") {
    return (
      <div className="transition-colors dark:bg-darkmode_gray-0 dark:transition-colors">
        <Navbar />
        {children}
        <div className="hidden lg:block">
          <ScrollToTop />
        </div>
        <ScrollProgressBar />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="transition-colors dark:bg-darkmode_gray-0 dark:transition-colors">
        {/* <Navbar />
        {children}
        <div className="hidden lg:block">
          <ScrollToTop />
        </div>
        <Footer /> */}
        <ComingSoon />
      </div>
    );
  }
};
export default Layout;
