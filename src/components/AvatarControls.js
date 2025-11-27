import React from 'react';
import './AvatarControls.css';

const AvatarControls = ({ onGenerateSingle, onGenerateMultiple, avatarCount, setAvatarCount }) => {
  return (
    <div className="controls-container">
      <div className="control-group">
        <button 
          className="btn btn-primary" 
          onClick={onGenerateSingle}
        >
          Сгенерировать один аватар
        </button>
        
        <div className="multiple-controls">
          <input 
            type="number" 
            value={avatarCount}
            onChange={(e) => setAvatarCount(parseInt(e.target.value) || 1)}
            min="1"
            max="20"
            className="count-input"
          />
          <button 
            className="btn btn-secondary" 
            onClick={onGenerateMultiple}
          >
            Сгенерировать несколько
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarControls;