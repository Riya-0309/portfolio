import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const textColor = useColorModeValue("lightblue.100", "lightpeach.100");

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row"
      }}
      alignItems={{
        base: "center",
        xl: "start"
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "40px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start"
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={{
          base: "10px",
          md: "15px",
          xl: "20px"
        }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        {"</>"} with <AiFillHeart /> by Riya Chapatwala • All Rights Reserved
      </Text>
    </Flex>
  );
}
