import { ArrayProps } from "@/types/Array";

const sortArray = (array: ArrayProps[]) => {
  return array.sort(({ key: key1 }, { key: key2 }) => key1.localeCompare(key2));
};

export const DOCS_LIST = [
  {
    key: "docs",
    name: "Docs",
    list: sortArray([
      { key: "description", name: "Description" },
      { key: "install", name: "Install" },
    ]),
  },
  {
    key: "components",
    name: "Components",
    list: sortArray([
      { key: "alert", name: "Alert", createdAt: "2024-04-17" },
      { key: "autoComplete", name: "AutoComplete", createdAt: "2024-05-14" },
      { key: "avatar", name: "Avatar", createdAt: "2024-04-20" },
      { key: "button", name: "Button", createdAt: "2024-04-04" },
      { key: "chip", name: "Chip", createdAt: "2024-04-13" },
      { key: "flex", name: "Flex", createdAt: "2024-05-03" },
      { key: "spinner", name: "Spinner", createdAt: "2024-04-17" },
      { key: "switch", name: "Switch", createdAt: "2024-04-11" },
      { key: "code", name: "Code", createdAt: "2024-06-25" },
      // { key: "tooltip", name: "Tooltip", createdAt: "2024-06-12" },
    ]),
  },
  {
    key: "hooks",
    name: "Hooks",
    list: sortArray([
      { key: "useBoolean", name: "useBoolean", createdAt: "2024-04-07" },
      { key: "useClipBoard", name: "useClipBoard", createdAt: "2024-04-20" },
      { key: "useDeviceType", name: "useDeviceType", createdAt: "2024-04-20" },
      // {
      //   key: "useEventListener",
      //   name: "useEventListener",
      //   createdAt: "2024-06-07",
      // },
      { key: "useHover", name: "useHover", createdAt: "2024-06-07" },
      { key: "useMediaQuery", name: "useMediaQuery", createdAt: "2024-05-13" },
      // { key: "useTooltip", name: "useTooltip", createdAt: "2024-05-07" },
      // { key: "useWindowSize", name: "useWindowSize", createdAt: "2024-04-20" },
    ]),
  },
];
