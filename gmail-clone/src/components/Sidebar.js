import React from 'react'
import '../Css/side-bar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function Sidebar() {
  return (
    <div className='side-bar'>
        <Button startIcon={<AddIcon fontSize='large'/>}
        className='compose-btn'>
           Compose
        </Button>
    </div>
  )
}

export default Sidebar