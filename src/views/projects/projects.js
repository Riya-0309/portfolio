import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import wp1 from "../../assets/wp1.jpeg";
import wp2 from "../../assets/wp2.jpeg";
import wp3 from "../../assets/wp3.jpeg";
import paid from "../../assets/paid1.png";
import sampleVideo from "../../assets/video1.mp4";
import sampleVideo2 from "../../assets/video3.mp4";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            videoSrc={sampleVideo}
            projectName={"Ganesh Chaturthi"}
            aboutProject={
              "A video of the grand celebration of an Indian festival"
            }
          />
          <ProjectCard
            videoSrc={sampleVideo2}
            projectName={"Rainy Season"}
            aboutProject={"The beauty of the earth when it's raining"}
          />
          <ProjectCard
            projectImage={wp3}
            projectName={"Cafe Advertising"}
            aboutProject={"A poster for the newly opened cafe"}
          />
          <ProjectCard
            projectImage={wp1}
            projectName={"Freestyle photography"}
            aboutProject={
              "An old, rusty barge rests on the dry shore, embodying the passage of time."
            }
          />
          <ProjectCard
            projectImage={wp2}
            projectName={"Banner of College Festival"}
            aboutProject={
              "Representation of the whole cultural fest into a single picture"
            }
          />
          <ProjectCard
            projectImage={paid}
            projectName={"PAID Inc."}
            aboutProject={"The application to make the payments, cart, and shipping services on a single platform"}
            techStack={"HTML, CSS, React JS, Material UI, Framer Motion"}
          />
        </SimpleGrid>
        {/* <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 1"}
            aboutProject={"This blog is about hiding text inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-6c9af950cbb3"
          />
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 2"}
            aboutProject={"This Blog is about hiding an Image inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-part-2-ad7452a3ff1"
          />
        </SimpleGrid> */}
      </Box>
    </Box>
  );
}
