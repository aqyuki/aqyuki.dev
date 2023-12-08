import { memo } from "react";

export type LinkListProps = {
  links: {
    display: string;
    href: string;
  }[];
};

const LinkList = memo(({ links }: LinkListProps) => {
  return (
    <div className="link-box">
      {links.map((item, index) => {
        return (
          <div key={`link-list-${index}`}>
            <a href={item.href}>{item.display}</a>
          </div>
        );
      })}
    </div>
  );
});

LinkList.displayName = "LinkList";
export { LinkList };
