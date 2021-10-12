import './EmailRow.css';
import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  return (
    <div className="email-row" onClick={() => history.push('/email')}>
      <div className="email-rowOption">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="email-rowTitle">{title}</h3>
      <div className="email-rowMessage">
        <h4>
          {subject}
          <span className="email-rowDescription">--{description}</span>
        </h4>
      </div>

      <p className="email-rowTime">{time}</p>
    </div>
  );
};

export default EmailRow;
