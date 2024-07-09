import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "beige.600");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Skeleton
              isLoaded={loadedimage1}
              color="white"
              fadeDuration={1}
              height={"100%"}
            >
              <Image
                src={contactimg}
                onLoad={() => setloadedimage1(true)}
              ></Image>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton
              isLoaded={loadedimage2}
              color="white"
              fadeDuration={1}
              width={"100%"}
              height={"100%"}
            >
              <Image
                src={contactimg1}
                onLoad={() => setloadedimage2(true)}
              ></Image>
            </Skeleton>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 2, "2xl": 2 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={FaLocationDot}
                  width="30px"
                  height="30px"
                  color="navy.900"
                />
              </Box>
              <Text textAlign="center" color="navy.900">
                FIND ME @
              </Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                5050 E Garford St, Long Beach, California - 90815
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Flex
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Box textAlign="center">
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location.href =
                        "mailto:riya.chapatwala01@student.csulb.edu";
                      e.preventDefault();
                    }}
                  >
                    <Icon
                      as={AiOutlineMail}
                      width="30px"
                      height="30px"
                      color="navy.900"
                      cursor="pointer"
                    />
                  </Link>
                </Box>
                <Text textAlign="center" color="navy.900" ml={1}>
                  |
                </Text>
                <Box textAlign="center">
                  <Icon
                    as={AiFillPhone}
                    width="30px"
                    height="30px"
                    color="navy.900"
                  />
                </Box>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Text textAlign="center" color="navy.900">
                  EMAIL ME @ |
                </Text>
                <Text textAlign="center" color="navy.900" ml={1}>
                  CALL ME @
                </Text>
              </Flex>

              <Flex
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Text color={textColorPrimary} textAlign="center" mt="5px">
                  riya.chapatwala01@student.csulb.edu |
                </Text>
                <Text color={textColorPrimary} textAlign="center" mt="5px" ml={1}>
                  +1 (562) 235-3118
                </Text>
              </Flex>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
