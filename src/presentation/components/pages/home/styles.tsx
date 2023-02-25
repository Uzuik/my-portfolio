import { FC, ReactNode } from "react";

import { Box, Container, Heading } from "presentation/components";

type Props = {
  children: ReactNode;
};

export const Section: FC<Props> = ({ children }) => (
  <Box paddingTop="6" paddingBottom="6">
    <Container maxW="container.lg">{children}</Container>
  </Box>
);

export const SectionTitle: FC<Props> = ({ children }) => (
  <Heading as="h2" size="md" marginBottom="4" fontWeight="medium">
    {children}
  </Heading>
);
