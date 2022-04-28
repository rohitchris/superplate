import React from "react";
import { AppProps } from "next/app";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
  LoginPage,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";

import "@pankod/refine-antd/dist/styles.min.css";
import dataProvider from "@pankod/refine-simple-rest";
const API_URL = "https://api.fake-rest.refine.dev";

import { authProvider } from "src/authProvider";
import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";
import { UserList } from "@components/users";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";
import { CategoryList } from "@components/products/category";
import { TagList } from "@components/products/tags";
import { UserEdit } from "@components/users/edit";
import { UserShow } from "@components/users/show";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      dataProvider={dataProvider(API_URL)}
      authProvider={authProvider}
      LoginPage={LoginPage}
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
        {
          name: "users",
          list: UserList,
          edit: UserEdit,
          show: UserShow,
        },
        {
          name: "categories",
          list: CategoryList,
        },
        {
          name: "tags",
          list: TagList,
        },
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
