import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { SignUpBox } from './muistyles.homepagecomponents'

type Props = {}

const SignUp = ({}: Props) => {
  return (
    <SignUpBox component={'form'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '500px'
        }}
      >
        <h3>Sign Up</h3>
        <TextField required id='outlined-required' type={'email'} label='Email' color='secondary' fullWidth />
        <TextField required id='outlined-required' label='Username' color='secondary' fullWidth />
        <TextField
          id='outlined-password-input'
          required
          label='Password'
          type='password'
          autoComplete='current-password'
          color='secondary'
          fullWidth
        />
        <TextField
          id='outlined-password-input'
          required
          label='Confirm Password'
          type='password'
          autoComplete='current-password'
          color='secondary'
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox defaultChecked color='secondary' />}
          label='I Agree to all the terms and conditions*'
        />
      </Box>
      <Button
        variant='outlined'
        size='large'
        endIcon={<ArrowCircleRightOutlinedIcon />}
        color='secondary'
        type='submit'
      >
        Submit
      </Button>
    </SignUpBox>
  )
}

export default SignUp
