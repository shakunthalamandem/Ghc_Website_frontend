import React from 'react';

interface TextBlockProps {
  content: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ content }) => {
  return (
    <div className="p-4 text-lg leading-relaxed text-gray-100 bg-black/10 rounded-xl">
      {content}
    </div>
  );
};

export default TextBlock;
