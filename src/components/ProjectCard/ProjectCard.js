import { React, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Link,
  useColorModeValue,
  useStyleConfig,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HoverVideo from "./HoverVideo";

export default function ProjectCard(props) {
  const {
    projectImage,
    aboutProject,
    techStack,
    projectName,
    projectLiveLink,
    projectLink,
    videoSrc,
  } = props;
  const [loadedprojectimg, setloadedprojectimg] = useState(false);
  const textColor = useColorModeValue("navy.700", "navy.900");
  const styles = useStyleConfig("Card");

  return (
    <Box
      __css={styles}
      h={{ base: "100%" }}
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        base: "none",
        xl: { transform: "scale(1.03)", boxShadow: "md", border: "1px solid" },
      }}
    >
      <>
        {videoSrc ? (
          <HoverVideo videoSrc={videoSrc} />
        ) : (
          <Box mb={{ base: "10px", "2xl": "10px" }}>
            <Skeleton
              isLoaded={loadedprojectimg}
              color="white"
              fadeDuration={1}
              height={"100%"}
            >
              <LazyLoadImage
                src={projectImage}
                w={{ base: "100%", "3xl": "100%" }}
                h={{ base: "100%", "3xl": "250px" }}
                borderRadius="10px"
                p="20px"
                effect="blur"
                cursor="pointer"
                onLoad={() => setloadedprojectimg(true)}
                // border="2px solid"
                // borderColor={textColor}
              />
            </Skeleton>
          </Box>
        )}

        <Flex flexDirection="column" justify="center" h="100%">
          <Flex direction="row" align="center" justify="Center">
            <Text
              color={textColor}
              fontSize={{
                base: "xl",
                md: "lg",
                lg: "lg",
                xl: "lg",
                "2xl": "md",
                "3xl": "lg",
              }}
              mb="5px"
              me="14px"
              textAlign="center"
              cursor="default"
            >
              {techStack ? (
                <Text
                  as="button"
                  onClick={() =>
                    window.open("https://sandbox.paid.com/sign-in", "_blank")
                  }
                  sx={{
                    textDecoration: "underline",  
                    cursor: "pointer",
                  }}
                >
                  {projectName}
                </Text>
              ) : (
                projectName
              )}
            </Text>
          </Flex>
          <Flex direction="row" align="center" justify="Center">
            <Text
              color="beige.600"
              fontSize={{
                base: "sm",
              }}
              mb="5px"
              me="14px"
              textAlign="center"
            >
              {aboutProject}
            </Text>
          </Flex>
          {techStack && (
            <Flex direction="row" align="center" justify="Center">
              <Text
                color={textColor}
                fontSize={{
                  base: "sm",
                }}
                mb="5px"
                me="14px"
                textAlign="center"
              >
                {techStack}
              </Text>
            </Flex>
          )}
          {projectLink && (
            <Flex
              align="center"
              justify="center"
              direction={{
                base: "column",
                md: "column",
                lg: "column",
                xl: "column",
                "2xl": "row",
              }}
              gap={{
                base: "20px",
              }}
              p="20px"
            >
              {projectLiveLink ? (
                <>
                  <Link
                    href={projectLiveLink}
                    target="blank"
                    mt={{
                      base: "0px",
                      md: "10px",
                      lg: "0px",
                      xl: "10px",
                      "2xl": "0px",
                    }}
                  >
                    <Button
                      variant="darkBrand"
                      fontSize="sm"
                      fontFamily="DM Sans"
                      borderRadius="70px"
                      px="24px"
                      py="5px"
                    >
                      View Website
                    </Button>
                  </Link>
                </>
              ) : (
                <></>
              )}
              <Link
                href={projectLink}
                target="blank"
                mt={{
                  base: "0px",
                  md: "10px",
                  lg: "0px",
                  xl: "10px",
                  "2xl": "0px",
                }}
              >
                <Button
                  variant="darkBrand"
                  fontSize="sm"
                  fontFamily="DM Sans"
                  borderRadius="70px"
                  px="24px"
                  py="5px"
                >
                  {techStack ? "View Project" : "View Blog"}
                </Button>
              </Link>
            </Flex>
          )}
        </Flex>
      </>
    </Box>
  );
}
