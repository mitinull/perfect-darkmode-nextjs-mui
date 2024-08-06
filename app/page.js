import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { SwitchThemeButton } from "./components/SwitchThemeButton";
import Image from "next/image";

import bicycleLight from "./images/bicycle-light.jpg";
import bicycleDark from "./images/bicycle-dark.jpg";
import { BasketnullCard } from "./components/BasketnullCard";
import Link from "next/link";
import { GitHub, YouTube } from "@mui/icons-material";

function MyButtonGroup({ orientation }) {
  return (
    <ButtonGroup
      orientation={orientation}
      size="large"
      variant="outlined"
      color="secondary"
      fullWidth
    >
      <SwitchThemeButton />
      <Button
        LinkComponent={Link}
        href="https://github.com/mitinull/perfect-darkmode-nextjs-mui"
        target="_blank"
        startIcon={<GitHub />}
      >
        GitHub Repository
      </Button>
      <Button
        startIcon={<YouTube />}
        LinkComponent={Link}
        href="https://youtu.be/tWarkEhnfv0"
        target="_blank"
      >
        YouTube Tutorial
      </Button>
    </ButtonGroup>
  );
}

export default function Home() {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        minHeight: "101vh",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} direction="row" py={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                mx="auto"
                textAlign="center"
                color="secondary"
                fontWeight={500}
              >
                Perfect Dark Theme With Next.js and MUI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={8}>
          <Card
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "end",
            }}
          >
            <Box position={{ xs: "static", sm: "absolute" }}>
              <Image
                alt="bicycle day"
                placeholder="blur"
                src={bicycleLight}
                loading="eager"
                width={1024}
                height={1024}
                style={{
                  display: "flex",
                  width: "100%",
                  objectFit: "cover",
                  height: "auto",
                }}
                className="img-light"
              />
              <Image
                alt="bicycle day"
                placeholder="blur"
                src={bicycleDark}
                loading="eager"
                width={1024}
                height={1024}
                style={{
                  display: "flex",
                  width: "100%",
                  objectFit: "cover",
                  height: "auto",
                }}
                className="img-dark"
              />
            </Box>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <BasketnullCard />
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "none", sm: "inline-flex" } }}>
          <MyButtonGroup orientation={"horizontal"} />
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "inline-flex", sm: "none" } }}>
          <MyButtonGroup orientation={"vertical"} />
        </Grid>
      </Grid>
    </Container>
  );
}
