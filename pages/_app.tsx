import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  NotificationsProvider,
  notificationProvider,
  MantineProvider,
  Global,
  Layout,
  LightTheme,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mantine";
import routerProvider from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
      <NotificationsProvider position="top-right">
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(supabaseClient)}
          authProvider={authProvider}
          LoginPage={AuthPage}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
        >
          <Component {...pageProps} />
        </Refine>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
