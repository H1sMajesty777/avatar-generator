import React from 'react';
import './AvatarDisplay.css';

const AvatarDisplay = ({ avatar }) => {
  const renderEyes = () => (
    <g>
      <circle cx={avatar.size * 0.3} cy={avatar.size * 0.4} r={avatar.size * 0.1} fill="#000" />
      <circle cx={avatar.size * 0.7} cy={avatar.size * 0.4} r={avatar.size * 0.1} fill="#000" />
    </g>
  );

  const renderMouth = () => (
    <path 
      d={`M ${avatar.size * 0.3} ${avatar.size * 0.7} Q ${avatar.size * 0.5} ${avatar.size * 0.8} ${avatar.size * 0.7} ${avatar.size * 0.7}`} 
      stroke="#000" 
      fill="none" 
      strokeWidth="2"
    />
  );

  const renderAccessories = () => (
    <g>
      <circle cx={avatar.size * 0.5} cy={avatar.size * 0.2} r={avatar.size * 0.15} fill="#FFD700" />
    </g>
  );

  const renderShape = () => {
    const center = avatar.size / 2;
    
    switch(avatar.shape) {
      case 'circle':
        return <circle cx={center} cy={center} r={center - 5} fill={avatar.color} />;
      case 'square':
        return <rect x="5" y="5" width={avatar.size - 10} height={avatar.size - 10} fill={avatar.color} />;
      case 'triangle':
        return <polygon 
          points={`${center},5 ${avatar.size - 5},${avatar.size - 5} 5,${avatar.size - 5}`} 
          fill={avatar.color} 
        />;
      default:
        return <circle cx={center} cy={center} r={center - 5} fill={avatar.color} />;
    }
  };

  return (
    <div className="avatar-container">
      <svg 
        width={avatar.size} 
        height={avatar.size} 
        viewBox={`0 0 ${avatar.size} ${avatar.size}`}
        className="avatar-svg"
      >
        {renderShape()}
        {avatar.hasEyes && renderEyes()}
        {avatar.hasMouth && renderMouth()}
        {avatar.accessories && renderAccessories()}
      </svg>
    </div>
  );
};

export default AvatarDisplay;