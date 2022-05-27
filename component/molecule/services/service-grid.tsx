import React from 'react';

const ServiceGrid = ({
  children,
  title,
  content,
}: {
  children: React.ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <div className="text-white bg-dark-blue-bright">
      <div className="px-8 pt-12">{children}</div>
      <div className="font-bold text-2xl py-4 px-8">{title}</div>
      <div className="font-medium text-sm px-8 pb-8 text-justify leading-relaxed ">
        {content}
      </div>
    </div>
  );
};

export default ServiceGrid;
