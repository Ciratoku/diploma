import "./MainInfo.css";
import Button from "../Button/Button";

import photo_test from "../../../assets/photo.jpg";
import Union from "../../../assets/Union.svg?react";
import Share from "../../../assets/Share.svg?react";
import Message from "../../../assets/Message.svg?react";
import { useEffect } from "react";

function MainInfo() {
  useEffect(() => {
    fetch(`http://localhost:8080/user/840986267`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="main-info">
      <img src={photo_test} alt="" />
      <div className="name">Аня Мельник</div>
      <div className="nick">@amelnikcom</div>
      <div className="desc">
        Креативный дизайнер, основательница школы Цитадель и студии Dofamin
      </div>
      <hr className="separator" />
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
