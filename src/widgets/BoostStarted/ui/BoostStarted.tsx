import { Button, ButtonTheme } from "@shared/ui";
import cls from "./BoostStarted.module.scss";

export const BoostStarted = () => {
  return (
    <div className={cls.container}>
      <h2 className={cls.title}>Boost your links today</h2>
      <Button theme={ButtonTheme.FULLCYAN} isLink href="#boostStarted">
        Get Started
      </Button>
    </div>
  );
};
