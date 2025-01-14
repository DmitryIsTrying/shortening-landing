import { Button, ButtonTheme } from "@shared/ui";
import cls from "./AuthMoved.module.scss";
import { Moon, Sun } from "@shared/assets";
import { useState } from "react";
import { classNames } from "@shared/lib";

type AuthMovedProps = {
  className?: string;
};

export const AuthMoved = ({ className }: AuthMovedProps) => {
  const [theme, setTheme] = useState(true);
  return (
    <div className={classNames(cls.btnsContainer, {}, [className || ""])}>
      <div className={cls.themeContainer}>
        {theme ? (
          <Sun
            onClick={() => setTheme((prev) => !prev)}
            className={`${cls.btnTheme} ${cls.sunIcon}`}
          />
        ) : (
          <Moon onClick={() => setTheme((prev) => !prev)} className={cls.btnTheme} />
        )}
      </div>

      <Button href="#login" isLink>
        Login
      </Button>
      <Button href="#signup" isLink theme={ButtonTheme.FULLCYAN}>
        Sign Up
      </Button>
    </div>
  );
};
