import {
  Tag,
  Flex,
  Grid,
  GridItem,
  Header,
  Link,
  Text,
} from "presentation/components";
import { useLocale } from "presentation/hooks";

import * as S from "./styles";

export const Home = () => {
  const { t } = useLocale();

  const experiences = t.EXPERIENCES;

  return (
    <>
      <Header />

      <S.Section>
        <S.SectionTitle>{t.INTRO_HEADING}</S.SectionTitle>
        <Text whiteSpace="pre-wrap">{t.INTRO_CONTENT}</Text>
      </S.Section>

      <S.Section>
        <S.SectionTitle>{t.EXPERIENCE_HEADING}</S.SectionTitle>

        {experiences.map((e) => (
          <Grid
            key={`${e.PERIOD}-${e.HEADING}`}
            templateColumns={["1fr", "150px auto"]}
            marginBottom="6"
          >
            <GridItem fontWeight="medium">{e.PERIOD}</GridItem>
            <GridItem>
              <Text fontWeight="medium" marginBottom={1}>
                {e.HEADING}
              </Text>
              <Text marginBottom={2}>{e.DESCRIPTION}</Text>
              <Flex flexWrap="wrap">
                {(e.KEYWORDS || []).map((_e, idx) => (
                  <Tag key={idx} marginRight={2} marginBottom={2}>{_e}</Tag>
                ))}
              </Flex>
            </GridItem>
          </Grid>
        ))}
      </S.Section>

      <S.Section>
        <S.SectionTitle>{t.LINK_HEADING}</S.SectionTitle>
        <Grid templateColumns="80px auto" marginBottom="2">
          <GridItem>GitHub</GridItem>
          <GridItem>
            <Link color="blue.500" href="https://github.com/Uzuik/my-portfolio" isExternal>
              @Uzuik
            </Link>
          </GridItem>
        </Grid>
        <Grid templateColumns="80px auto">
          <GridItem>Email</GridItem>
          <GridItem>22q221q@gmail.com</GridItem>
        </Grid>
      </S.Section>
    </>
  );
};
