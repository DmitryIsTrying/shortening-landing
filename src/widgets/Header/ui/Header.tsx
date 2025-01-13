import { AuthMoved } from "./auth/AuthMoved";
import cls from "./Header.module.scss";
import { Navigation } from "./navigation/Navigation";

export const Header = () => {
  return (
    <header className={cls.header}>
      <Navigation />
      <AuthMoved />
    </header>
  );
};
