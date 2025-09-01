import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

interface ListBoxProps {
  text: string;
  icon?: React.ReactNode;
}

const ListBox: React.FC<ListBoxProps> = ({ text, icon }) => (
  <div className="list-box">
    {icon || <CheckCircleOutlined className="list-box-icon" />}
    <p className="list-box-text">{text}</p>
  </div>
);

export { ListBox };
