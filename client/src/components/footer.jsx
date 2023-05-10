import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Ruchi Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function PageFooter() {


  return (
    <div >
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <footer >
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}