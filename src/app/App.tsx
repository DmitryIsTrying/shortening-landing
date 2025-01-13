import { Shortening } from "@features/Shortening";
import { BoostStarted } from "@widgets/BoostStarted";
import { Footer } from "@widgets/Footer";
import { GetStarted } from "@widgets/GetStarted";
import { Header } from "@widgets/Header";
import { Statistic } from "@widgets/Statistic";

function App() {
  return (
    <div className="app light">
      <main>
        <div className="container">
          <Header />
          <GetStarted />
          <Shortening />
        </div>
        <div className="container violet">
          <Statistic />
        </div>
        <BoostStarted />
      </main>
      <Footer />
      <div style={{ height: "200px" }}>TEST TEST TEST</div>
    </div>
  );
}

export default App;
