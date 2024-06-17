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
  font-size: ${({ fs }) => fs ?? 2.5}rem;
`;
