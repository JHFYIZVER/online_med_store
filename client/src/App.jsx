import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100svh]">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
