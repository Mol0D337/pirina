import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDING from "./pages/LANDING";
import ENGLANDING from "./pages/ENGLANDING";
import ENGMob20x15 from "./pages/ENGMob20x15";
import ENGMob70x50 from "./pages/ENGMob70x50";
import ENGMob20x151 from "./pages/ENGMob20x151";
import ENGMob70x501 from "./pages/ENGMob70x501";
import ENGMob20x152 from "./pages/ENGMob20x152";
import ENGMob70x502 from "./pages/ENGMob70x502";
import ENGMob100x70 from "./pages/ENGMob100x70";
import ENGMob100x701 from "./pages/ENGMob100x701";
import ENGMob100x702 from "./pages/ENGMob100x702";
import ENGMobEnd from "./pages/ENGMobEnd";
import ENGEND from "./pages/ENGEND";
import Mob20x15 from "./pages/Mob20x15";
import Mob70x50 from "./pages/Mob70x50";
import M20 from "./pages/M20";
import M70 from "./pages/M70";
import M100 from "./pages/M100";
import Mob20x151 from "./pages/Mob20x151";
import Mob70x501 from "./pages/Mob70x501";
import MobEnd from "./pages/MobEnd";
import Mob100x70 from "./pages/Mob100x70";
import Mob100x701 from "./pages/Mob100x701";
import END from "./pages/END";
import Mob20x152 from "./pages/Mob20x152";
import Mob70x502 from "./pages/Mob70x502";
import Mob100x702 from "./pages/Mob100x702";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/eng-landing":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-20x151":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-70x501":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-20x152":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-70x502":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-20x15":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-70x50":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-100x70":
        title = "";
        metaDescription = "";
        break;
      case "/mob-100x701":
        title = "";
        metaDescription = "";
        break;
      case "/mob-100x702":
        title = "";
        metaDescription = "";
        break;
      case "/eng-mob-end":
        title = "";
        metaDescription = "";
        break;
      case "/eng-end":
        title = "";
        metaDescription = "";
        break;
      case "/mob-20x152":
        title = "";
        metaDescription = "";
        break;
      case "/mob-70x502":
        title = "";
        metaDescription = "";
        break;
      case "/m20":
        title = "";
        metaDescription = "";
        break;
      case "/m70":
        title = "";
        metaDescription = "";
        break;
      case "/m100":
        title = "";
        metaDescription = "";
        break;
      case "/mob-20x151":
        title = "";
        metaDescription = "";
        break;
      case "/mob-70x501":
        title = "";
        metaDescription = "";
        break;
      case "/mob-end":
        title = "";
        metaDescription = "";
        break;
      case "/mob-100x704":
        title = "";
        metaDescription = "";
        break;
      case "/mob-100x703":
        title = "";
        metaDescription = "";
        break;
      case "/end":
        title = "";
        metaDescription = "";
        break;
      case "/mob-20x153":
        title = "";
        metaDescription = "";
        break;
      case "/mob-70x503":
        title = "";
        metaDescription = "";
        break;
      case "/mob-100x70":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDING />} />
      <Route path="/eng-landing" element={<ENGLANDING />} />
      <Route path="/eng-mob-20x151" element={<ENGMob20x15 />} />
      <Route path="/eng-mob-70x501" element={<ENGMob70x50 />} />
      <Route path="/eng-mob-20x152" element={<ENGMob20x151 />} />
      <Route path="/eng-mob-70x502" element={<ENGMob70x501 />} />
      <Route path="/eng-mob-20x15" element={<ENGMob20x152 />} />
      <Route path="/eng-mob-70x50" element={<ENGMob70x502 />} />
      <Route path="/eng-mob-100x70" element={<ENGMob100x70 />} />
      <Route path="/mob-100x701" element={<ENGMob100x701 />} />
      <Route path="/mob-100x702" element={<ENGMob100x702 />} />
      <Route path="/eng-mob-end" element={<ENGMobEnd />} />
      <Route path="/eng-end" element={<ENGEND />} />
      <Route path="/mob-20x152" element={<Mob20x15 />} />
      <Route path="/mob-70x502" element={<Mob70x50 />} />
      <Route path="/m20" element={<M20 />} />
      <Route path="/m70" element={<M70 />} />
      <Route path="/m100" element={<M100 />} />
      <Route path="/mob-20x151" element={<Mob20x151 />} />
      <Route path="/mob-70x501" element={<Mob70x501 />} />
      <Route path="/mob-end" element={<MobEnd />} />
      <Route path="/mob-100x704" element={<Mob100x70 />} />
      <Route path="/mob-100x703" element={<Mob100x701 />} />
      <Route path="/end" element={<END />} />
      <Route path="/mob-20x153" element={<Mob20x152 />} />
      <Route path="/mob-70x503" element={<Mob70x502 />} />
      <Route path="/mob-100x70" element={<Mob100x702 />} />
    </Routes>
  );
}
export default App;
