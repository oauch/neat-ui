export const KeySeparation = (key: string, name: string) => {
  switch (key) {
    case "docs":
      return `/docs/${name}`;
    case "components":
      return `/components/${name}`;
    case "hooks":
      return `/hooks/${name}`;
    default:
      return `/docs/${name}`;
  }
};
