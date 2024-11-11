import "./MainInfo.css";
import Button from "../Button/Button";

import photo_test from "../../../assets/photo.jpg";
import Union from "../../../assets/Union.svg?react";
import Share from "../../../assets/Share.svg?react";
import Message from "../../../assets/Message.svg?react";
import { useEffect, useState } from "react";

function MainInfo() {
  const [data, setData] = useState({
    name: "",
    tag: "",
    description: "",
    region: "",
  });
  useEffect(() => {
    fetch(`http://localhost:8080/user/840986267`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => data && setData(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="main-info">
      <img src={photo_test} alt="" />
      <div className="name">{data.name}</div>
      <div className="nick">{data.tag}</div>
      <div className="desc">{data.description}</div>
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
            window.open(`http://t.me/${data.tag}`, "_blank").focus();
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
