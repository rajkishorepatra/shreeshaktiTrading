import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// css from emotion
import { css } from "@emotion/react";

// icons
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FolderIcon from "@mui/icons-material/Folder";

export default function NumbersSection() {
  return (
    <Box sx={{ backgroundColor: "black", padding: "2rem 0" }}>
      <Container
        maxWidth="lg"
        sx={css`
          padding: 2rem 0.5rem;
        `}
      >
        <Grid container spacing={{ xs: 5, sm: 6, md: 2 }}>
          {numbersData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <NumberCard
                icon={item.icon}
                number={item.number}
                title={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const numbersData = [
  {
    icon: <FolderIcon />,
    number: 578,
    title: "Projects Done",
  },
  {
    icon: <PeopleIcon />,
    number: 347,
    title: "Permanent Clients",
  },
  {
    icon: <PersonIcon />,
    number: 67,
    title: "Employees",
  },
  {
    icon: <LocalShippingIcon />,
    number: 128,
    title: "Owned Vehicles",
  },
];

function NumberCard({ icon, number, title }) {
  const styles = {
    iconBox: css`
      position: absolute;
      top: -1.5rem;
      left: 1rem;
      background: #5c9bd6;
      padding: 0.5rem 1.25rem;
      color: white;
      border-radius: 0.25rem;

      svg {
        font-size: 3rem;
      }
    `,
    detailsBox: css`
      padding-top: 2rem;
      display: flex;
      align-items: center;
    `,
  };
  return (
    <Paper
      sx={{
        background: "white",
        position: "relative",
        padding: "1rem",
      }}
    >
      <Box sx={styles.iconBox}>{icon}</Box>

      <Box sx={styles.detailsBox}>
        <Typography
          // variant={{ xs: "h6", sm: "h5", md: "h4" }}
          component="div"
          color={"red"}
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            paddingRight: "1rem",
            fontWeight: "bold",
          }}
        >
          {number}
        </Typography>
        <Typography
          // variant depending upon screen size
          variant={{ xs: "h6", sm: "h5", md: "h4" }}
          component="div"
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
