import { FC } from "react";
import NextLink from "next/link";

import { useLocale } from "presentation/hooks";
import { Box, Button, ButtonGroup } from "../../atoms";

export const LocaleSwitch: FC = () => {
  const { locale } = useLocale();

  return (
    <Box>
      <ButtonGroup size="sm" spacing={[2, 4]}>
        <Button
          as={NextLink}
          href="/"
          locale="en"
          width={["45px", "60px"]}
          variant={locale === "en" ? "solid" : "outline"}
          size={["xs", "sm"]}
        >
          EN
        </Button>
        <Button
          as={NextLink}
          href="/"
          locale="ja"
          width={["45px", "60px"]}
          variant={locale === "ja" ? "solid" : "outline"}
          size={["xs", "sm"]}
        >
          日
        </Button>
      </ButtonGroup>
    </Box>
  );
};
