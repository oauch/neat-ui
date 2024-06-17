export const StringCovert = (stringArray: string[]) => {
  return String(`import { ${stringArray.join(", ")} } from '@oauch/neat-ui';`);
};
