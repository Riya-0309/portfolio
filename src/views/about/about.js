import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { GiPaintBrush  } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import trelloSvg from "../../assets/icons/trelloSvg.svg";
import canva from "../../assets/icons/canva.svg";
import adobe from "../../assets/icons/adobe.svg";
import figma from "../../assets/icons/figma.svg";
import illustrate from "../../assets/icons/illustrate.svg";
import vn from "../../assets/icons/vn.jpg";
import imovie from "../../assets/icons/imovie.jpg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import myphoto from "../../assets/Riya.jpeg";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "beige.600");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr",
            }}
            templateRows={{
              lg: "1fr",
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
                // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Education"
                    value="California State University - Long Beach"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Masters in Computer Science"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Experience (1)"
                    value="Managerial Assistant - Taste Of Bhagwati"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Experience (2)"
                    value="Marketing Assistant - WebOsmotic Pvt. Ltd."
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Experience (3)"
                    value="Software Developer - WebOsmotic Pvt. Ltd."
                  />

                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi, Gujarati"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={adobe} />
          <TechStackCard imagepath={illustrate} />
          <TechStackCard imagepath={vn} />
          <TechStackCard imagepath={imovie} />
          <TechStackCard imagepath={figma} />
          <TechStackCard imagepath={trelloSvg} />
          <TechStackCard imagepath={canva} />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={react} />
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiPaintBrush}
                width="30px"
                height="30px"
                color="navy.900"
              />
            </Box>
            <Text textAlign="center" color={"navy.900"}>
              Painting
            </Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I have a deep admiration for art and am an amateur mandala artist
              myself. I began creating mandalas at the age of 18, and over time,
              my interest grew as I learned from various sources. This art form
              has significantly improved my focus, determination, and patience,
              positively impacting both my personal and professional growth.
              Engaging in mandala art has also enhanced my creativity.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="navy.900"
              />
            </Box>
            <Text textAlign="center" color={"navy.900"}>
              Travelling
            </Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I am passionate about traveling and exploring new places. Whether
              it's uncovering hidden gems or embarking on exciting adventures, I
              thrive on the thrill of discovering new cultures, cuisines, and
              landscapes. Traveling not only broadens my horizons but also
              provides me with valuable life experiences and a deep appreciation
              for the diversity of our world!!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiMusicalNotes}
                width="30px"
                height="30px"
                color="navy.900"
              />
            </Box>
            <Text textAlign="center" color={"navy.900"}>
              Singing
            </Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I have a deep admiration for music and sometimes I sing, too.
              Singing has improved my breathing techniques, reduced stress, and
              increased my confidence. It has provided a sense of emotional
              release and connected me with a community of fellow music
              enthusiasts. Overall, singing has enriched my life in numerous
              ways, fostering both mental and physical well-being.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
