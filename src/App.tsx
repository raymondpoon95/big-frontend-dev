import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ReactCounterApp from "./components/ReactCounterApp/ReactCounterApp";
import UseTimeOut from "./components/UseTimeOut/UseTimeOut";
import UseIsFirstRender from "./components/UseIsFirstRender/UseIsFirstRender";
import UsePrevious from "./components/UsePrevious/UsePrevious";
import UseSWR from "./components/UseSWR/UseSWR";
import UseHover from "./components/UseHover/UseHover";
import UseToggle from "./components/UseToggle/UseToggle";
import UseDebounce from "./components/UseDebounce/UseDebounce";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="reactCounterApp" element={<ReactCounterApp />} />
        <Route path="useTimeOut" element={<UseTimeOut />} />
        <Route path="useIsFirstRender" element={<UseIsFirstRender />} />
        <Route path="usePrevious" element={<UsePrevious />} />
        <Route path="useSWR" element={<UseSWR />} />
        <Route path="useHover" element={<UseHover />} />
        <Route path="useToggle" element={<UseToggle />} />
        <Route path="useDebounce" element={<UseDebounce />} />
      </Route>
    </Routes>
  );
};

export default App;
