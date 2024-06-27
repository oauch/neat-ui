import Text from "@/components/common/Text";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import { Button } from "@oauch/neat-ui";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Text fs={4} fw={800} color={COLORS.SeaGreen}>
        {t("IntroTitle")}
      </Text>
      <Text fs={2} fw={600}>
        {t("SubTitle")}
      </Text>
      <Link href={"/docs"}>
        <Button
          size="lg"
          fs={15}
          style={{
            marginTop: "50px",
            backgroundColor: COLORS.SeaGreen,
            color: COLORS.White,
          }}
        >
          {t("StartButton")}
        </Button>
      </Link>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
