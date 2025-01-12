import { Button, ButtonTheme } from "@shared/ui";
import cls from "./AuthMoved.module.scss";

export const AuthMoved = () => {
  return (
    <div className={cls.btnsContainer}>
      <Button href="#login" isLink>
        Login
      </Button>
      <Button href="#signup" isLink theme={ButtonTheme.FULLCYAN}>
        Sign Up
      </Button>
    </div>
  );
};
