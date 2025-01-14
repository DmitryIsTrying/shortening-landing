import { Shortening } from "@features/Shortening";
import { BoostStarted } from "@widgets/BoostStarted";
import { Footer } from "@widgets/Footer";
import { GetStarted } from "@widgets/GetStarted";
import { Header } from "@widgets/Header";
import { Statistic } from "@widgets/Statistic";

function App() {
  return (
    <div id="app" className="app light">
      <Header />
      <main>
        <div className="container">
          <GetStarted />
          <Shortening />
        </div>
        <Statistic className="container violet" />
        <BoostStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;
