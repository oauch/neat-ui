interface ExampleComponent {
  (): JSX.Element;
  code: string;
}

interface ExampleListItem {
  title?: string;
  component: ExampleComponent;
}

interface ComponentProps {
  name: string;
  type: string[];
  description: string;
}

interface DocsContentProps {
  name: string;
  description?: string;
  imports?: string[];
  src?: string;
  examples?: ExampleListItem[];
  props?: ComponentProps[];
}

export type {
  ComponentProps,
  DocsContentProps,
  ExampleComponent,
  ExampleListItem,
};
