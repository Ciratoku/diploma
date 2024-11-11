import { useEffect, useState } from "react";

import "./MainInfo.css";
import Button from "../Button/Button";
import { b64toBlob } from "../Utils/Utils";

import photo_test from "../../../assets/photo.jpg";
import Union from "../../../assets/Union.svg?react";
import Share from "../../../assets/Share.svg?react";
import Message from "../../../assets/Message.svg?react";

function MainInfo() {
  const [data, setData] = useState({
    name: "",
    tag: "",
    description: "",
    region: "",
    photo:
      "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  });
  const [img, setImg] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8080/user/840986267`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setData(data);
        const contentType = "image/png";
        const blob = b64toBlob(data.photo, contentType);
        const blobUrl = URL.createObjectURL(blob);
        setImg(blobUrl);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="main-info">
      <img src={img} alt="" />
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
            window.open(`http://t.me/${data.tag.slice(1)}`, "_blank").focus();
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
