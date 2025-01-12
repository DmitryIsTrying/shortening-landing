import { Button, ButtonTheme } from "@shared/ui";
import cls from "./GetStarted.module.scss";
import { IllustrationWorking } from "@shared/assets";

export const GetStarted = () => {
  return (
    <div className={cls.container}>
      <h2 className={cls.title}>
        More than just <br />
        shorter links
      </h2>
      <p className={cls.text}>
        Build your brand's recognition and get detailed <br /> insights on how your links are
        performing.
      </p>
      <Button theme={ButtonTheme.FULLCYAN} isLink>
        Get Started
      </Button>
      <div className={cls.backgroundImage}>
        <IllustrationWorking />
      </div>
    </div>
  );
};
