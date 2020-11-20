import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Helmet } from 'react-helmet-async';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import { signUp } from 'services/auth';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import { getLang } from 'utils/storage';
import Divider from '@material-ui/core/Divider';
import { EMAIL_REGEX } from 'config';
import useNotification from 'hooks/useNotification';
import { PATHS } from 'router/paths';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    width: 600,
  },
});

const RegisterPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const notify = useNotification();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false,
  });

  const handleClickShowPassword = (name) => () => {
    setShowPassword({ ...showPassword, [name]: !showPassword[name] });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data) => {
    const credential = {
      username: data.username.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };
    setIsLoading(true);
    signUp(credential)
      .then(() => {
        setIsLoading(false);
        notify('success', 'Account Created Successfully');
        notify('success', 'Please Sign In Using Your NewAccount');
        history.push(PATHS.SIGN_IN_PAGE);
      })
      .catch((error) => {
        setIsLoading(false);
        const message = error.response.data.message[0];
        if (Array.isArray(message)) {
          notify('error', message[0]);
        } else {
          notify('error', 'Error');
        }
      });
  };
  const goSignIn = () => {
    history.push(PATHS.SIGN_IN_PAGE);
  };
  return (
    <>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <Card className={classes.root} variant="outlined">
        <Box
          height={48}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderColor="grey.300"
          border={1}
          borderTop={0}
          borderLeft={0}
          borderRight={0}
        >
          <Typography variant="button" color="primary">
            SignUp
          </Typography>
        </Box>
        <Box>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Box p={2}>
              <Box mb={2}>
                <TextField
                  name="username"
                  inputRef={register({
                    required: 'Required',
                  })}
                  fullWidth
                  autoFocus
                  label="Username *"
                  variant="outlined"
                  error={!!errors.username}
                />
                {errors.username && (
                  <Typography variant="caption" color="error">
                    {errors.username.message}
                  </Typography>
                )}
              </Box>
              <Box mb={2}>
                <TextField
                  label="Email *"
                  variant="outlined"
                  fullWidth
                  inputRef={register({
                    required: 'Required',
                    maxLength: {
                      value: 254,
                      message: t('validate.maxLength', { length: 254 }),
                    },
                    pattern: {
                      value: EMAIL_REGEX,
                      message: t('validate.emailFormat'),
                    },
                  })}
                  name="email"
                  error={!!errors.email}
                />
                {errors.email && (
                  <Typography variant="caption" color="error" display="block">
                    {errors.email.message}
                  </Typography>
                )}
              </Box>
              <Box mb={2}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="new-password" error={!!errors.password}>
                    Password *
                  </InputLabel>
                  <OutlinedInput
                    id="new-password"
                    type={showPassword.new ? 'text' : 'password'}
                    name="password"
                    autoComplete="new-password"
                    inputRef={register({
                      required: 'Required',
                      minLength: 8,
                      maxLength: 32,
                      // pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                    })}
                    error={!!errors.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip
                          title={
                            showPassword.new ? 'hidePassword' : 'showPassword'
                          }
                        >
                          <IconButton
                            onClick={handleClickShowPassword('new')}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword.new ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    }
                    labelWidth={getLang() === 'en' ? 90 : 140}
                  />
                </FormControl>
                <Typography variant="caption" color="error">
                  {errors.password?.types?.required && errors.password.message}
                </Typography>
              </Box>

              <Box mt={2} display="flex" justifyContent="flex-end">
                <Button
                  fullWidth
                  disabled={isLoading}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isLoading ? 'pleaseWait' : 'signUp'}
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
        <Divider />
        <Box p={2} display="flex" alignItems="center" justifyContent="center">
          <Typography>Already Have An Account</Typography>
          <Box display="inline-block" ml={1}>
            <Typography
              color="primary"
              style={{ cursor: 'pointer' }}
              onClick={goSignIn}
            >
              Sign In
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default RegisterPage;
