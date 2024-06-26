import AutoComplete from "@/components/AutoComplete";
import React, { useState } from "react";
import Top100Films from "../public/top100Films.json";

const meta = {
  title: "AutoComplete",
  component: AutoComplete,
};

export default meta;

function Component() {
  const [value, setValue] = useState("");
  return (
    <AutoComplete options={Top100Films} value={value} onChange={setValue} />
  );
}

export const AutoComplete_ = {
  render: Component,
};
