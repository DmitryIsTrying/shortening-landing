import { Button, ButtonTheme, Input } from "@shared/ui";
import cls from "./Shortening.module.scss";

export const Shortening = () => {
  return (
    <form className={cls.container}>
      <Input className={cls.input} placeholder="Shorten a link here..." />
      <Button className={cls.btn} theme={ButtonTheme.FULLCYAN}>
        Shorten It!
      </Button>
    </form>
  );
};
