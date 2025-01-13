import { BrandRecognition, DetailedRecords, FullyCustomizable } from "@shared/assets";
import { Card } from "./Card/Card";
import cls from "./Statistic.module.scss";

export const Statistic = () => {
  return (
    <div className={cls.container}>
      <div className={cls.textContainer}>
        <h2 className={cls.titleText}>Advanced Statistics</h2>
        <p className={cls.textText}>
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard
        </p>
      </div>
      <div className={cls.containerBlocks}>
        <Card viewBox="0 0 40 40" IconInfo={BrandRecognition} title="Brand Recognition">
          Boost your brand recognition with each click. Generic links don't mean a thing. Branded
          links help instill confidence in your content
        </Card>
        <Card
          viewBox="0 0 40 40"
          IconInfo={DetailedRecords}
          title="Detailed Records"
          className={cls.secondCard}
        >
          Gain insights into who is clicking your links. Knowing when and where people engage with
          your content helps inform better decisions
        </Card>
        <Card
          viewBox="0 0 48 48"
          IconInfo={FullyCustomizable}
          title="Fully Customizable"
          className={cls.thirdCard}
        >
          Improve brand awareness and content discoverability through customizable links,
          supercharging audience engagement.
        </Card>
      </div>
    </div>
  );
};
