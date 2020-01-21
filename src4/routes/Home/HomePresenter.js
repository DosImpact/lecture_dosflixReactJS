import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  Link,
  Text,
  TextField,
  Image
} from "gestalt";
import "gestalt/dist/gestalt.css";

const Section = ({ children, title }) => (
  <Box padding={2}>
    <Box marginBottom={1}>
      <Heading size="xs">{title}</Heading>
    </Box>
    {children}
  </Box>
);
const SunSection = ({ children, title, subtitle }) => (
  <Box padding={2}>
    <Box marginBottom={1} display="flex">
      <Heading size="xs">{title}</Heading>
      <Heading size="xs"> {subtitle}</Heading>
    </Box>
    {children}
  </Box>
);
const HomePresenter = () => (
  <Box padding={2}>
    <Box padding={2} color="gray" height={120}></Box>
    <Box
      display="flex"
      direction="column"
      marginTop={2}
      color="green"
      height={120}
    >
      <Box> This is title</Box>
      <Box> wow!</Box>
    </Box>

    <SunSection title="Example" subtitle="EX">
      <Box>JI</Box>
    </SunSection>
    <Box column={6} paddingX={2}>
      <Image
        alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
        color="rgb(231, 186, 176)"
        naturalHeight={751}
        naturalWidth={564}
        src="https://i.pinimg.com/236x/ae/c9/ea/aec9eadd89aa51a9b753b221f3bcce12.jpg"
      >
        <Box padding={3}>
          <Text color="white">
            Tropic greens: The taste of Petrol and Porcelain
          </Text>
        </Box>
      </Image>
    </Box>
    <Section title="Avatar">
      <Box width={120}>
        <Avatar
          src="https://s.hdnux.com/photos/70/67/71/14909045/3/920x920.jpg"
          name="Jeanette Epps"
        />
      </Box>
    </Section>

    <Section title="Button">
      <Button text="Button" />
    </Section>

    <Section title="Box">
      <Box display="flex">
        <Box column={4} color="lightGray">
          <Box maxWidth={200} padding={2} column={12}>
            <Card>
              <Link href="https://pinterest.com">
                <Avatar
                  name="Ben Silbermann"
                  src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
                />
                <Box paddingX={3} paddingY={2}>
                  <Text align="center" bold>
                    {"Ben"}
                  </Text>
                </Box>
              </Link>
              <Button color="red" text="Follow" />
            </Card>
          </Box>
        </Box>
        <Box column={2} color="darkGray">
          <Box maxWidth={200} padding={2} column={12}>
            <Card>
              <Link href="https://pinterest.com">
                <Avatar
                  name="Ben Silbermann"
                  src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
                />
                <Box paddingX={3} paddingY={2}>
                  <Text align="center" bold>
                    {"Ben"}
                  </Text>
                </Box>
              </Link>
              <Button color="red" text="Follow" />
            </Card>
          </Box>
        </Box>
        <Box column={6} color="lightGray">
          <Box maxWidth={200} padding={2} column={12}>
            <Card>
              <Link href="https://pinterest.com">
                <Avatar
                  name="Ben Silbermann"
                  src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
                />
                <Box paddingX={3} paddingY={2}>
                  <Text align="center" bold>
                    {"Ben"}
                  </Text>
                </Box>
              </Link>
              <Button color="red" text="Follow" />
            </Card>
          </Box>
        </Box>
      </Box>
    </Section>

    <Section title="Card">
      <Box maxWidth={200} padding={2} column={12}>
        <Card>
          <Link href="https://pinterest.com">
            <Avatar
              name="Ben Silbermann"
              src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
            />
            <Box paddingX={3} paddingY={2}>
              <Text align="center" bold>
                {"Ben"}
              </Text>
            </Box>
          </Link>
          <Button color="red" text="Follow" />
        </Card>
      </Box>
    </Section>

    <Section title="Text">
      <Text>Text</Text>
    </Section>

    <Section title="TextField">
      <TextField onChange={() => {}} id="textfield" placeholder="Placeholder" />
    </Section>
  </Box>
);

export default HomePresenter;
