import { Button, IconButton } from '@material-ui/core';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar-compose" startIcon={<Add fontSize="large" />}>
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={45} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={45} />
      <SidebarOption Icon={LabelImportant} title="Important" number={45} />
      <SidebarOption Icon={NearMe} title="Sent" number={45} />
      <SidebarOption Icon={Note} title="Draft" number={45} />
      <SidebarOption Icon={ExpandMore} title="More" number={45} />
      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
