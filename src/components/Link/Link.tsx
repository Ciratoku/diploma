import "./Link.css";
import ArrowSVG from "../../../assets/arrow.svg?react";
function Link({ children, Icon, linkType }: any) {
  const backgrounds = new Map([
    ["youtube", "linear-gradient(267.66deg, #FF6C6A -41.42%, #FF0000 113.68%)"],
    ["in", "linear-gradient(267.66deg, #0A7BC2 -41.42%, #0A57C2 113.68%)"],
    ["vk", "linear-gradient(267.66deg, #0177FF -41.42%, #5045E8 113.68%)"],
    ["instagram", "linear-gradient(0deg, #DD2A7B, #DD2A7B)"],
    ["web", "linear-gradient(267.66deg, #5763E4 -41.42%, #9139EE 113.68%)"],
    ["email", "linear-gradient(267.66deg, #5763E4 -41.42%, #9139EE 113.68%)"],
  ]);
  const linkStyle = {
    width: "361px",
    height: "74px",
    padding: "12px 16px 12px 10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    fontFamily: "SF Pro Display",
    fontSize: "17px",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "-0.4000000059604645px",
    textAlign: "left",
    background: backgrounds.get(linkType),
  } as any;
  return (
    <div style={linkStyle}>
      <div className="icon-name">
        <div className="round">
          <Icon />
        </div>
        <p>{children}</p>
      </div>
      <ArrowSVG style={{ opacity: "30%" }} />
    </div>
  );
}

export default Link;
