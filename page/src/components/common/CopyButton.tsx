import styled from "@emotion/styled";

type CopyButtonProps = {
  onCopy?: () => void;
  isCopy?: boolean;
  top?: number;
  right?: number;
  fs?: number;
};

const CopyButton = ({ onCopy, isCopy, ...props }: CopyButtonProps) => {
  return (
    <Button onClick={onCopy} {...props}>
      {isCopy ? "✅" : "📝"}
    </Button>
  );
};

export default CopyButton;

const Button = styled.button<CopyButtonProps>`
  position: absolute;
  top: ${({ top }) => top ?? 5}px;
  right: ${({ right }) => right ?? 10}px;
  font-size: ${({ fs }) => fs ?? 2.5}rem;
`;
