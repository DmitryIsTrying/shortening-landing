import { LogoType } from "@shared/ui";
import { AuthMoved } from "./auth/AuthMoved";
import cls from "./Header.module.scss";
import { Navigation } from "./navigation/Navigation";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useViewport } from "@shared/appHooks";

export const Header = () => {
  const windowWidth = useViewport();

  return (
    <header className={cls.header}>
      <LogoType fill="#34313D" />
      {windowWidth > 875 ? (
        <>
          <Navigation />
          <AuthMoved />
        </>
      ) : (
        <BurgerMenu />
      )}
    </header>
  );
};
