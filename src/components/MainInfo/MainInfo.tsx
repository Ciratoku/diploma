import "./MainInfo.css";

import Button from "../Button/Button";

import Union from "../../../assets/Union.svg?react";
import Share from "../../../assets/Share.svg?react";
import Message from "../../../assets/Message.svg?react";

function MainInfo({ data }: any) {
  return (
    <div className="main-info">
      <img src={data.photo} alt="" />
      <div className="name">{data.name}</div>
      <div className="nick">{data.tag}</div>
      <div className="desc">{data.info}</div>
      <hr className="separator" />
      <div className="location">
        <div className="svg">
          <Union />
        </div>
        <div>{data.region}</div>
      </div>
      <div className="main-buttons">
        <Button
          handleClick={() => {
            const newWindow = window.open(
              `http://t.me/${data.tag.slice(1)}`,
              "_blank"
            );
            if (newWindow) {
              newWindow.focus();
            } else {
              console.warn("Popup blocked or could not be opened.");
            }
          }}
        >
          <Message />
          <div>Написать</div>
        </Button>
        <Button>
          <Share />
          <div>Поделиться</div>
        </Button>
      </div>
    </div>
  );
}

export default MainInfo;
