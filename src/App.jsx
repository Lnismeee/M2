import "./App.css";
import Home from "./page/Home/index";
import ProductList from "./page/ProductList";
import Contact from "./page/Contact";
import News from "./page/News";
import { Routes, Route } from "react-router-dom";
import Header from "./page/theme/Header/Header";
import Footer from "./page/theme/Footer";
import Example1 from "./components/Example";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Example1></Example1>
            <Footer />
        </>
    );
}

export default App;
