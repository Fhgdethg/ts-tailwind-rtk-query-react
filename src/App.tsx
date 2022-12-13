import { useAppSelector } from "./hooks/appHooks";
import { Route, Routes } from "react-router";
import FullDate from "./components/FullDate/FullDate";
import Header from "./components/general/HeaderComponents/Header";
import Todo from "./components/Todo/Todo";

function App() {
  const mode = useAppSelector(state => state.settingThem.themStatus)

  return (
    <div className={`${mode}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/date" element={<FullDate />} />
        <Route path="*" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
