import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

const NewDocs = () => {
  return <Wrapper>New</Wrapper>;
};

export default NewDocs;

const Wrapper = styled.div`
  width: fit-content;
  padding: 5px;
  background-color: ${COLORS.MediumSeaGreen};
  color: ${COLORS.White};
  font-size: 1.2rem;
  border-radius: 10px;
`;
