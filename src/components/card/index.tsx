import React from "react";
import { Card as AntdCard } from "antd";
import { CardProps } from "antd/lib/card";

export const Card: React.FC<CardProps> = ({ title, children, ...rest }) => {
  return (
    <AntdCard title={title} bordered={false}>
      {children}
    </AntdCard>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h4 className={`text-lg font-semibold ${className || ""}`}>{children}</h4>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`flex flex-col flex-1 ${className || ""}`}>{children}</div>
);

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={`text-gray-700 ${className || ""}`}>{children}</p>
);