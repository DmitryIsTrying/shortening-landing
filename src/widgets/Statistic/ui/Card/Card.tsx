import { classNames } from "@shared/lib";
import { ReactNode } from "react";
import { Metric } from "../Metric/Metric";
import cls from "./Card.module.scss";

type CardProps = {
  className?: string;
  title: string;
  children: ReactNode;
  IconInfo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  viewBox: string;
};

export const Card = ({ className, title, children, IconInfo, viewBox }: CardProps) => {
  return (
    <div className={classNames(cls.containerInfo, {}, [className || ""])}>
      <Metric>
        <IconInfo viewBox={viewBox} className={cls.iconStatistic} />
      </Metric>
      <h3 className={cls.titleInfo}>{title}</h3>
      <p className={cls.textInfo}>{children}</p>
    </div>
  );
};
