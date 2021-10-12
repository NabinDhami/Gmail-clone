import { Checkbox, IconButton } from '@material-ui/core';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from '@material-ui/icons';
import './EmailList.css';
import EmailRow from './EmailRow';
import Section from './Section';

const EmailList = () => {
  return (
    <div className="email-list">
      <div className="email-listIcons">
        <div className="emmail-listIconsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email-listIconsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList-sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Socail" color="#1A73EB" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList-list">
        <EmailRow
          title="Twitch"
          subject="Hey Fellow Streamers"
          description="This is test"
          time="10pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey FellowYoutubers"
          description="This is test"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
