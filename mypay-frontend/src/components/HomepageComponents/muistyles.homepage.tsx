import { Box, BoxProps, Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HomepageBox = styled(Box)<BoxProps>(() => ({
  height: '90vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '40px'
}))

export const HomepageHeading = styled(Typography)<TypographyProps>(() => ({
  backgroundcolor: 'primary',
  backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}))
