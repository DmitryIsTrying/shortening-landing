import { ReactNode } from "react";
import cls from "./Metric.module.scss";
type MetricProps = {
  children: ReactNode;
};

export const Metric = ({ children }: MetricProps) => {
  return <span className={cls.bgCircle}>{children}</span>;
};
