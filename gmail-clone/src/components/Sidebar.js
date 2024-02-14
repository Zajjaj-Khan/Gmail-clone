import React from 'react'
import '../Css/side-bar.css'
import { Button, Icon, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Inbox, Person} from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DuoIcon from '@mui/icons-material/Duo';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarOption from './SidebarOption';
import PhoneIcon from '@mui/icons-material/Phone';
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
         <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
         <SidebarOption Icon={LabelImportantIcon
        } title='Label Important' number={54} />
         <SidebarOption Icon={NearMeIcon
        } title='Near Me' number={54} />
         <SidebarOption Icon={NoteIcon
        } title='Note' number={54} />
         <SidebarOption Icon={ExpandMoreIcon
        } title='More' number={54} />
        <div className='sidebar-footer'>
          <div className='sidebar-footerIcons'>
            <IconButton>
              <Person/>
            </IconButton>
            <IconButton>
              <DuoIcon/>
            </IconButton>
            <IconButton>
              <PhoneIcon/>
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar