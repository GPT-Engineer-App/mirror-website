import { Container, Box, VStack, HStack, Text, Image, IconButton, Link } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="black" color="white" py={10} px={5}>
        <VStack spacing={8} align="start">
          <Text fontSize="4xl" fontWeight="bold">
            About
          </Text>
          <Text fontSize="xl" maxW="2xl">
            We are a creative studio that believes in the power of design to transform businesses. Our team of designers, developers, and strategists work together to create beautiful and effective solutions for our clients.
          </Text>
        </VStack>
      </Box>

      <Box py={10} px={5}>
        <VStack spacing={8} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Our Team
          </Text>
          <HStack spacing={8}>
            <Box>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjA0NDQ2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 1" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                John Doe
              </Text>
              <Text fontSize="md">Designer</Text>
            </Box>
            <Box>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjA0NDQ2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 2" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Jane Smith
              </Text>
              <Text fontSize="md">Developer</Text>
            </Box>
            <Box>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjA0NDQ2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 3" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Alice Johnson
              </Text>
              <Text fontSize="md">Strategist</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      <Box bg="black" color="white" py={10} px={5}>
        <VStack spacing={8} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Follow Us
          </Text>
          <HStack spacing={4}>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
