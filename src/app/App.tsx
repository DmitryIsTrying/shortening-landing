import { Shortening } from "@features/Shortening";
import { useLoading, useTheme } from "@shared/appHooks";
import { classNames } from "@shared/lib";
import { ProgressBar } from "@shared/ui";
import { BoostStarted } from "@widgets/BoostStarted";
import { Footer } from "@widgets/Footer";
import { GetStarted } from "@widgets/GetStarted";
import { Header } from "@widgets/Header";
import { Statistic } from "@widgets/Statistic";

function App() {
  const { theme } = useTheme();
  const isLoading = useLoading();

  return (
    <div id="app" className={classNames("app", {}, [theme])}>
      <Header />
      {isLoading && <ProgressBar />}
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
