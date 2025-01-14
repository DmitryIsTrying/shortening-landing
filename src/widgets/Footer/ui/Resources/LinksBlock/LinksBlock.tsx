import cls from "./LinksBlock.module.scss";
type Link = {
  name: string;
  href: string;
};

type LinksBlock = {
  title: string;
  links: Link[];
};

export const LinksBlock = ({ links, title }: LinksBlock) => {
  return (
    <div className={cls.container}>
      <h4 className={cls.title}>{title}</h4>
      {links.map(({ href, name }) => (
        <a className={cls.link} key={name} href={href}>
          {name}
        </a>
      ))}
    </div>
  );
};
