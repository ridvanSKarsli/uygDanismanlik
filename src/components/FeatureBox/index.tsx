import React from 'react';
import { BulbOutlined } from '@ant-design/icons';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description, icon }) => {
  return (
    <div className="feature-box">
      {icon || <BulbOutlined style={{ fontSize: '40px', color: 'var(--color-accent)' }} />}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export { FeatureBox };
