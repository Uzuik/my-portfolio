import { Container, Flex, Heading, Spacer } from "../../atoms";
import { LocaleSwitch } from "../../molecules";
import { useLocale } from "presentation/hooks";

export const Header = () => {
  const { t } = useLocale();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingTop="4"
      paddingBottom="4"
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.200"
    >
      <Container maxWidth="container.lg">
        <Flex alignItems="center">
          <Heading as="h1" size="md">
            {t.SITE_TITLE}
          </Heading>
          <Spacer />
          <LocaleSwitch />
        </Flex>
      </Container>
    </Flex>
  );
};
