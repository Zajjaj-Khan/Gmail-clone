import React from 'react'
import '../Css/side-bar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Inbox} from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='side-bar'>
        <Button startIcon={<AddIcon fontSize='large'/>}
        className='compose-btn' >
           Compose
        </Button>

        <SidebarOption Icon={Inbox
        } title='Inbox' number={54} selected={true} />
        <SidebarOption Icon={StarIcon
        } title='Starred' number={54} />
    </div>
  )
}

export default Sidebar