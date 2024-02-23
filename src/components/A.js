import React, { useState } from 'react';
import {isYouTubeUrl, isTikTokUrl, isInstagramUrl} from '../constants/checkURL';

function A({ onAddLink }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Kiểm tra tính hợp lệ của link ở đây
    // Nếu hợp lệ, gọi hàm onAddLink để thêm vào danh sách
    if(isTikTokUrl(inputValue) || isInstagramUrl(inputValue) || isYouTubeUrl(inputValue)){
      onAddLink(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Link</button>
    </div>
  );
}

export default A;
