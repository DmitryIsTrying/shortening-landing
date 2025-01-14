import { LinksBlock } from "./LinksBlock/LinksBlock";
import cls from "./Resources.module.scss";

const features = [
  { name: "Link Shortening", href: "#Shortening" },
  { name: "Branded Links", href: "#Branded" },
  { name: "Analytics", href: "#Analytics" },
];
const resources = [
  { name: "Blog", href: "#Blog" },
  { name: "Developers", href: "#Developers" },
  { name: "Support", href: "#Support" },
];
const company = [
  { name: "About", href: "#About" },
  { name: "Our Team", href: "#Team" },
  { name: "Careers", href: "#Careers" },
  { name: "Contact", href: "#Contact" },
];

export const Resources = () => {
  return (
    <div className={cls.container}>
      <LinksBlock links={features} title="Features" />
      <LinksBlock links={resources} title="Resources" />
      <LinksBlock links={company} title="Company" />
    </div>
  );
};
