import Text from "@/components/common/Text";
import { COLORS } from "@/styles/colors";
import { ComponentProps } from "@/types/Docs";
import styled from "@emotion/styled";

const TITLE = ["PropsName", "Type", "DefaultVal"];

const Props = ({ props }: { props: ComponentProps[] }) => {
  return (
    <Table>
      <thead>
        <tr>
          {TITLE.map((val, index) => (
            <Th key={index}>
              <Text fs={1.5} fw={600}>
                {val}
              </Text>
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.map(({ name, type, defaultVal }) => (
          <tr key={name}>
            <Td>
              <Text fs={1.4} fw={400}>
                {name}
              </Text>
            </Td>
            <Td>
              <Text fs={1.4} fw={400}>
                {type.join(" | ")}
              </Text>
            </Td>
            <Td>
              <Text fs={1.4} fw={400}>
                {defaultVal}
              </Text>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Props;

const Table = styled.table`
  width: 100%;
  margin-top: 50px;
  border: 1px solid ${COLORS.LightGray};
  border-collapse: collapse;
  border-radius: 3px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${COLORS.LightGray};
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid ${COLORS.LightGray};
  border-radius: 3px;
  color: ${COLORS.White};
  background-color: ${COLORS.SeaGreen};
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid ${COLORS.LightGray};
`;
