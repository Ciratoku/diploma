import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import Wrapper from "./Wrapper/Wrapper";
import MainInfo from "./MainInfo/MainInfo";
import Block from "./Block/Block";
import { useEffect, useState } from "react";
import { b64toBlob } from "./Utils/Utils";
import Links from "./Links/Links";
import Description from "./Description/Description";
import { retrieveLaunchParams } from "@telegram-apps/sdk";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const [data, setData] = useState({
    name: "Dima",
    tag: "@Ciratoku",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus eaque nesciunt a perspiciatis eum odio quaerat ducimus? Earum distinctio fuga minima rerum odit quaerat voluptate! Illum at quasi debitis.",
    info: "some info about me",
    region: "USA, Pskov",
    photo:
      "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    links: [
      { link: "amelnik.com", type: "web" },
      { link: "art@amelnik.com", type: "email" },
      { link: "@ania._.melnik", type: "instagram" },
      { link: "@ania._.melnik", type: "vk" },
      { link: "@ania._.melnik", type: "youtube" },
      { link: "@ania._.melnik", type: "in" },
    ],
  });
  const { initDataRaw } = retrieveLaunchParams();
  console.log(initDataRaw);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API || "";
    fetch(apiUrl)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((response) => {
        const contentType = "image/png";
        const blob = b64toBlob(response.photo, contentType);
        const blobUrl = URL.createObjectURL(blob);
        response.photo = blobUrl;
        setData(response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <Wrapper>
        <MainInfo data={data}></MainInfo>
        <Block title="описание">
          <Description description={data.description} />
        </Block>
        <Links links={data.links} />
      </Wrapper>
    </AppRoot>
  );
}
