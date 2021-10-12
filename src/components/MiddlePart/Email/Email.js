import { IconButton } from '@material-ui/core';
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from '@material-ui/icons';
import { useHistory } from 'react-router';
import './Email.css';

const Email = () => {
  const history = useHistory();
  return (
    <div className="email">
      <div className="email-icons">
        <div className="email-iconsLeft">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email-iconsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="email-body">
        <div className="email-bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="email-important" />
          <p>Title</p>
          <p className="email-time">10pm</p>
        </div>
        <div className="email-message">
         <p> This is message</p>
        </div>
      </div>
    </div>
  );
};

export default Email;
