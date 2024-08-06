import { GitHub, SportsEsports } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export function BasketnullCard() {
  return (
    <Card sx={{ textAlign: "left" }}>
      <CardMedia
        component="img"
        alt="basketnull game cover light"
        image="basketnull-light.jpg"
        className="img-light"
      />
      <CardMedia
        component="img"
        alt="basketnull game cover dark"
        image="basketnull-dark.jpg"
        className="img-dark"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Basketnull Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Basketnull is a 2D web game, made by LUA and LOVE2D. You can play this
          game on a desktop browser right now.{" "}
        </Typography>
        <Stack direction="row" mt={2}>
          <Chip label="Game" size="small" variant="outlined" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          LinkComponent={Link}
          href="https://basketnull.netlify.app/"
          target="_blank"
          startIcon={<SportsEsports />}
        >
          Play Basketnull
        </Button>
        <Button
          size="small"
          LinkComponent={Link}
          href="https://github.com/mitinull/basketnull"
          target="_blank"
          startIcon={<GitHub />}
        >
          GitHub Repo
        </Button>
      </CardActions>
    </Card>
  );
}
