import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import { Link } from 'react-router-dom'

const Empform = () => {
  return (
    <div>
 <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%',width:'50%',marginLeft:'20%'}}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField fullWidth id="name" label="name" variant='outlined'/>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth id="designation" label="designation" variant='outlined'/>
        </Grid>
    
        <Grid size={6}>
        <TextField fullWidth id="location" label="location" variant='outlined'/>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth id="salary" label="salary" variant='outlined'/>
        </Grid>
        <Grid size={12}>
        <Button variant='contained' >Add</Button>
       </Grid>
       <Grid size={12}>
       <Typography style={{color:'darkblue'}}>
       <Link to={'/'}> Already Registered? Please click here </Link></Typography>
       </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Empform
