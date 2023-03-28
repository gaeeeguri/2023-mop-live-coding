import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import React from 'react';
import { TechNames } from './techStack';

export interface TechIconProps {
  name: TechNames;
  size: number;
}

const TechIcon = ({ name, size }: TechIconProps) => {
  switch (name) {
    case 'react':
      return <SiReact size={size} />;
    case 'javascript':
      return <SiJavascript size={size} />;
    case 'html':
      return <SiHtml5 size={size} />;
    case 'css':
      return <SiCss3 size={size} />;
  }
};

export default TechIcon;
