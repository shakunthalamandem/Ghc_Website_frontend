import React from 'react';

interface Slide {
  title: string;
  content: string;
  image?: string | null;
}

interface SlidesBlockProps {
  title: string;
  slides: Slide[];
}

const SlidesBlock: React.FC<SlidesBlockProps> = ({ title, slides }) => {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/10 shadow text-white">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-6">
        {slides.map((slide, index) => (
          <div key={index} className="p-4 bg-black/10 rounded-lg">
            <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
            <p className="mb-2">{slide.content}</p>
            {slide.image && (
              <img src={slide.image} alt={`Slide ${index + 1}`} className="rounded-lg max-w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidesBlock;
