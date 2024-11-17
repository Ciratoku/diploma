import Block from "../Block/Block";
import Link from "../Link/Link";
import "./Links.css";

import yt from "../../../assets/youtube.svg?react";
import inst from "../../../assets/instagram.svg?react";
import vk from "../../../assets/vk.svg?react";
import inn from "../../../assets/inn.svg?react";
import web from "../../../assets/web.svg?react";
import mail from "../../../assets/email.svg?react";

type linkType = {
  type: string;
  link: string;
};

function Links({ links }: any) {
  const svgs = new Map([
    ["youtube", yt],
    ["instagram", inst],
    ["vk", vk],
    ["in", inn],
    ["web", web],
    ["email", mail],
  ]);
  return (
    <div className="links-wrapper">
      <Block title="контакты"></Block>
      <div className="links">
        {links.map((link: linkType, i: number) => (
          <Link key={i} Icon={svgs.get(link.type)} linkType={link.type}>
            {link.link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Links;
