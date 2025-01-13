import { IllustrationWorking } from "@shared/assets";
import cls from "./GetStarted.module.scss";
import { InfoContainer } from "./InfoContainer/InfoContainer";

export const GetStarted = () => {
  return (
    <div className={cls.container}>
      <InfoContainer />
      <div className={cls.backgroundImage}>
        <img
          width={700}
          height={500}
          className={cls.bgcSizeImage}
          src={IllustrationWorking}
          alt="getStarted background"
        />
      </div>
    </div>
  );
};
