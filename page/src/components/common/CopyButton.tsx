import styled from "@emotion/styled";

type CopyButtonProps = {
  types?: "import" | "code";
  onCopy?: () => void;
  isCopy?: boolean;
  fs?: number;
};

const CopyButton = ({
  types = "import",
  onCopy,
  isCopy,
  ...props
}: CopyButtonProps) => {
  return (
    <Button types={types} onClick={onCopy} {...props}>
      {isCopy ? "✅" : "📝"}
    </Button>
  );
};

export default CopyButton;

const Button = styled.button<CopyButtonProps>`
  ${({ types }) => {
    return (
      types === "code" &&
      `position: absolute;
       top: 8px;
       right: 8px;`
    );
  }}
  font-size: ${({ fs }) => fs ?? 2.5}rem;
`;
