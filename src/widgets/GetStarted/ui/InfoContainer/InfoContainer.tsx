import { Button, ButtonTheme } from "@shared/ui";
import cls from "../GetStarted.module.scss";

export const InfoContainer = () => {
  return (
    <div className={cls.textWrapper}>
      <h2 className={cls.title}>
        More than just <br />
        shorter links
      </h2>
      <p className={cls.text}>
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>
      <Button theme={ButtonTheme.FULLCYAN} isLink>
        Get Started
      </Button>
    </div>
  );
};
