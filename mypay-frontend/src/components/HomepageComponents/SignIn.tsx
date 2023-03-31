/* eslint-disable @typescript-eslint/no-unused-vars */
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Button, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/router';

import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import NetworkRequest from 'src/NETWORK';
import { SignInBox } from './muistyles.homepagecomponents';

type Props = {};

const SignIn = ({}: Props) => {
  const navigate = useRouter();
  const [loading, setloading] = useState(false);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = async () => {
    setloading(true);
    const loginres: any = await NetworkRequest(
      'POST',
      '/auth',
      { username: username, password: password },
      false,
    );

    if (loginres.status < 250) {
      toast.success('Authenticated!');
      navigate.push('/dashboard');
      setloading(false);
    } else {
      toast.error(loginres.response.data.message);
      setloading(false);
    }
  };

  return (
    <SignInBox component="form">
      <h1>Log In</h1>
      <TextField
        required
        id="username"
        name="username"
        label="Username or Email"
        color="secondary"
        fullWidth
        onChange={(e) => setusername(e.target.value)}
      />

      <TextField
        id="password"
        name="password"
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        color="secondary"
        fullWidth
        onChange={(e) => setpassword(e.target.value)}
      />
      <Button
        variant="outlined"
        size="large"
        endIcon={loading ? null : <ArrowCircleRightOutlinedIcon />}
        color="success"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        {loading ? <CircularProgress size={25} color="success" /> : 'Log In'}
      </Button>
    </SignInBox>
  );
};

export default SignIn;
