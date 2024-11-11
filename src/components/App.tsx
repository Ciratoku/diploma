import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import Wrapper from "./Wrapper/Wrapper";
import MainInfo from "./MainInfo/MainInfo";
import Block from "./Block/Block";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <Wrapper>
        <MainInfo></MainInfo>
        <Block></Block>
      </Wrapper>
    </AppRoot>
  );
}
