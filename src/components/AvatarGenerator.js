import React, { useState, useEffect } from 'react';
import AvatarDisplay from './AvatarDisplay';
import AvatarControls from './AvatarControls';
import { generateRandomAvatar, generateMultipleAvatars } from '../utils/avatarUtils';
import './AvatarGenerator.css';

const AvatarGenerator = () => {
  const [currentAvatar, setCurrentAvatar] = useState(null);
  const [multipleAvatars, setMultipleAvatars] = useState([]);
  const [avatarCount, setAvatarCount] = useState(4);

  useEffect(() => {
    setCurrentAvatar(generateRandomAvatar());
  }, []);

  const handleGenerateSingle = () => {
    setCurrentAvatar(generateRandomAvatar());
    setMultipleAvatars([]);
  };

  const handleGenerateMultiple = () => {
    const avatars = generateMultipleAvatars(avatarCount);
    setMultipleAvatars(avatars);
    setCurrentAvatar(null);
  };

  return (
    <div className="generator-container">
      <header className="generator-header">
        <h1>Генератор случайных аватаров</h1>
        <p>Создавайте уникальные аватары одним кликом!</p>
      </header>

      <AvatarControls 
        onGenerateSingle={handleGenerateSingle}
        onGenerateMultiple={handleGenerateMultiple}
        avatarCount={avatarCount}
        setAvatarCount={setAvatarCount}
      />

      <div className="avatars-display">
        {currentAvatar && (
          <div className="single-avatar">
            <h3>Ваш аватар:</h3>
            <AvatarDisplay avatar={currentAvatar} />
          </div>
        )}

        {multipleAvatars.length > 0 && (
          <div className="multiple-avatars">
            <h3>Коллекция аватаров ({multipleAvatars.length} шт.):</h3>
            <div className="avatars-grid">
              {multipleAvatars.map((avatar, index) => (
                <div key={index} className="avatar-item">
                  <AvatarDisplay avatar={avatar} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarGenerator;