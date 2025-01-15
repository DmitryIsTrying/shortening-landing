import { useTheme } from "@shared/appHooks";
import { Moon, Sun } from "@shared/assets";
import { classNames } from "@shared/lib";
import { Button, ButtonTheme } from "@shared/ui";
import cls from "./AuthMoved.module.scss";
import { AppTheme } from "@shared/model";

type AuthMovedProps = {
  className?: string;
};

export const AuthMoved = ({ className }: AuthMovedProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.btnsContainer, {}, [className || ""])}>
      <div className={cls.themeContainer}>
        {theme === AppTheme.LIGHT ? (
          <Sun
            key={"sun"}
            onClick={toggleTheme}
            className={`slowMo ${cls.btnTheme} ${cls.sunIcon}`}
          />
        ) : (
          <Moon key={"moon"} onClick={toggleTheme} className={`slowMo ${cls.btnTheme}`} />
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
