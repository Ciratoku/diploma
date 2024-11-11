import "./MainInfo.css";
import Button from "../Button/Button";

import photo_test from "../../../assets/photo.jpg";
import Union from "../../../assets/Union.svg?react";
import Share from "../../../assets/Share.svg?react";
import Message from "../../../assets/Message.svg?react";

function MainInfo() {
  return (
    <div className="main-info">
      <img src={photo_test} alt="" />
      <div className="name">Аня Мельник</div>
      <div className="nick">@amelnikcom</div>
      <div className="desc">
        Креативный дизайнер, основательница школы Цитадель и студии Dofamin
      </div>
      <div className="location">
        <div className="svg">
          <Union />
        </div>
        <div>Ташкент, Узбекистан</div>
      </div>
      <div className="main-buttons">
        <Button>
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
