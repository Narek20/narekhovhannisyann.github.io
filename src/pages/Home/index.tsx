import React from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import { Box, Link, Typography } from '@mui/material'
import CV from '../../assets/PDF/cv.pdf'
import { Button } from '../../components/shared/Button'
import { SpecialSkills } from '../SpecialSkills'

import styles from './styles.module.scss'
import CVButton from '../../components/features/CvButton'

export const Home = () => {
  return (
    <Box className={styles.home}>
      <Box className={styles.intro}>
        <Typography className={styles.fullName}>Narek Hovhannisyan</Typography>
        <Typography className={styles.position}>Software Engineer</Typography>
        <CVButton />
      </Box>
      <SpecialSkills />
    </Box>
  )
}