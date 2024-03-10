import type { Meta, StoryObj } from "@storybook/react";

import Header from "../app/_components/Header";

const meta = {
  title: "Components/Common/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

//로그인
export const LoggedOut: Story = {
  args: {
    userName: "devbit4",
  },
};

//로그아웃
export const LoggedIn: Story = {};
