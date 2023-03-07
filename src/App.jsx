import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import CreateProduct from "./views/CreateProduct";
import Logistics from "./views/Logistics";
import Header from "./components/Header";
import Products from "./views/Products";
import Tracker from "./views/Tracker";
import LogisticTable from "./views/LogisticTable";


const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new_product" element={<CreateProduct />} />
        <Route path="/new_logistics" element={<Logistics />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/logistic_table" element={<LogisticTable />} />
      </Routes>
    </div>
  );
};

export default App;
