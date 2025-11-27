
export const generateRandomAvatar = () => {
  const shapes = ['circle', 'square', 'triangle'];
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
  const sizes = [80, 100, 120];
  
  return {
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)],
    hasEyes: Math.random() > 0.3,
    hasMouth: Math.random() > 0.2,
    accessories: Math.random() > 0.7
  };
};

export const generateMultipleAvatars = (count) => {
  return Array.from({ length: count }, generateRandomAvatar);
};