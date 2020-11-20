import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box, makeStyles } from '@material-ui/core';
import WithFormWrapper from 'components/Form/WithFormWrapper';
import { signIn } from 'services/auth';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'router/paths';
import { UNAUTHORIZED } from 'config/API_CODES';
import useNotification from 'hooks/useNotification';
import LoadingIndicator from 'components/LoadingIndicator';
import { useForm } from 'react-hook-form';

const SignInStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = SignInStyle();

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const notify = useNotification();

  const onSubmit = async (credential) => {
    setIsLoading(true);
    signIn(credential)
      .then(() => {
        history.push(PATHS.HOME_PAGE);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          const { data, status } = err.response;
          if (status === UNAUTHORIZED) {
            setErrorMessage(data.detail);
          }
          notify('fail', errorMessage);
        }
      });
  };

  const goSignUp = () => {
    history.push(PATHS.SIGN_UP_PAGE);
  };

  const { register } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });

  return (
    <Container component="main" maxWidth="xs">
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <WithFormWrapper>
              {({ onChange, currentValues }) => (
                <>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    inputRef={register({
                      required: 'Required',
                    })}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={onChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={onChange}
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() =>
                      onSubmit({ email: 'chi@gmail.com', password: 'aaaaaaaa' })
                    }
                  >
                    Sign In
                  </Button>
                </>
              )}
            </WithFormWrapper>
            <Grid container>
              <Grid item>
                <Box display="inline-block" ml={1}>
                  <Typography
                    color="primary"
                    style={{ cursor: 'pointer' }}
                    onClick={goSignUp}
                  >
                    Forgot password?
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display="inline-block" ml={1}>
                  <Typography
                    color="primary"
                    style={{ cursor: 'pointer' }}
                    onClick={goSignUp}
                  >
                    Don&apos; t have an account? Sign Up
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </>
      )}
    </Container>
  );
}
