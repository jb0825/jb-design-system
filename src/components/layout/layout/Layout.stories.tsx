import type { Meta } from "@storybook/react";
import React, { CSSProperties } from "react";
import { Content, Footer, Header, Layout, Sider } from "./Layout";
import { css } from "@emotion/react";
import { Menu } from "@components/navigation/menu/Menu";
import { MenuItem } from "@types";
import { search } from "@icons";

const meta = {
  title: "Design System/Layout/Layout",
  component: Layout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Layout>;

export default meta;

export const Default = () => {
  const layoutStyle: CSSProperties = {
    color: "#fff",
    borderRadius: 8,
    width: "calc(50% - 1rem)",
    height: "calc(50% - 1rem)",
  };

  const flexStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headerStyle: CSSProperties = {
    backgroundColor: "#4096ff",
    height: "80px",
    ...flexStyle,
  };

  const contentStyle: CSSProperties = {
    backgroundColor: "#0958d9",
    ...flexStyle,
  };

  const siderStyle: CSSProperties = {
    width: "30%",
    backgroundColor: "#1677ff",
    ...flexStyle,
  };

  return (
    <div
      css={css`
        width: calc(100vw - 2rem);
        height: calc(100vh - 2rem);
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      `}
    >
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={headerStyle}>Footer</Footer>
      </Layout>

      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={headerStyle}>Footer</Footer>
      </Layout>

      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Content style={contentStyle}>Content</Content>
          <Sider style={siderStyle}>Sider</Sider>
        </Layout>
        <Footer style={headerStyle}>Footer</Footer>
      </Layout>

      <Layout style={layoutStyle}>
        <Sider style={siderStyle}>Sider</Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={headerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export const Example = () => {
  const menu: MenuItem[] = [
    {
      key: "1",
      label: "Navigation One",
    },
    {
      key: "2",
      label: "Navigation Two",
    },
    {
      key: "3",
      label: "Navigation Three - Submenu",
      children: [
        {
          key: "3-1",
          label: "Item 1",
        },
        { key: "3-2", label: "Item 2" },
        { key: "3-3", label: "Item 3" },
        { key: "3-4", label: "Item 4" },
      ],
    },
    {
      key: "4",
      label: "Navigation Four - Submenu",
      children: [
        {
          key: "4-1",
          label: "Item 1",
          children: [
            { key: "4-1-1", label: "Option 1" },
            {
              key: "4-1-2",
              label: "Option 2",
            },
          ],
        },
        { key: "4-2", label: "Item 2" },
        { key: "4-3", label: "Item 3" },
        { key: "4-4", label: "Item 4" },
      ],
    },
  ];

  return (
    <div
      css={css`
        width: calc(100vw - 2rem);
        height: calc(100vh - 2rem);
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0px 0px 8px 0px #60606075;
      `}
    >
      <Layout style={{ backgroundColor: "#f6f6f6", color: "#000000E0" }}>
        <Header
          style={{
            height: "70px",
            backgroundColor: "#001529",
            color: "#c4c4c4",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 3rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#334454",
              borderRadius: 8,
              width: "160px",
              height: "40px",
            }}
          />
          <Menu items={menu} direction="horizontal" />
        </Header>
        <Layout
          style={{
            margin: "3rem",
            borderRadius: 8,
            width: "calc(100% - 6rem)",
          }}
        >
          <Sider style={{ width: "25%", borderRight: "1px solid #e8e8e8" }}>
            <Menu items={menu.map((i) => ({ ...i, icon: search }))} />
          </Sider>
          <Content style={{ backgroundColor: "#fff", padding: "1rem" }}>
            Content
          </Content>
        </Layout>
        <Footer
          style={{
            display: "flex",
            justifyContent: "center",
            height: "70px",
          }}
        >
          JB-DESIGN-SYSTEM ©2024 Created by jb0825
        </Footer>
      </Layout>
    </div>
  );
};
