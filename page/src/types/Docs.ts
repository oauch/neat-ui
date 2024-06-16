interface ExampleComponent {
  (): JSX.Element;
  code: string;
}

interface ExampleListItem {
  title?: string;
  component: ExampleComponent;
}

interface DocsContentProps {
  name: string;
  description: string;
  imports: string[];
  src: string;
  examples: ExampleListItem[];
  // apis: ComponentAPI[];
  // typesData?: ComponentPropsType[];
}

export type { DocsContentProps, ExampleComponent, ExampleListItem };
