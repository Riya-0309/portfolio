import React from "react";
import { Box, useColorModeValue, useStyleConfig, Text } from "@chakra-ui/react";

export default function AboutMeInfo(props) {
  const { title, value } = props;
  const textColorPrimary = useColorModeValue("lightblue.100", "beige.600");
  const textColorSecondary = useColorModeValue("secondaryGray.900", "navy.900");
  const styles = useStyleConfig("Card");
  return (
    <Box
      __css={styles}
      paddingLeft="5px"
      paddingRight="5px"
      border="none"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="5px"
      >
        <Text color={textColorSecondary} fontSize="15px" textAlign="center">
          {title}
        </Text>
        <Text color={textColorPrimary} fontSize="16px" textAlign="center">
          {value}
        </Text>
      </Box>
    </Box>
  );
}
