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
import dataProvider from "@pankod/refine-simple-rest";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
      <NotificationsProvider position="top-right">
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(
            "https://jsonplaceholder.typicode.com/users"
          )}
          resources={[
            {
              name: "users",
              list: () => <div>Product Detail Page</div>,
            },
          ]}
          notificationProvider={notificationProvider}
          Layout={Layout}
          catchAll={<ErrorComponent />}
        >
          <Component {...pageProps} />
        </Refine>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
