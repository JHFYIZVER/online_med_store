import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import Preloader from "./components/UI/Preloader";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./main";
import { check } from "./http/userApi";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(() => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col h-svh justify-between">
      <Header />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <AppRouter />
        </div>
      )}
      <Footer />
    </div>
  );
});

export default App;
