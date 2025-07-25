import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import GhcMain from './components/Main/GhcMain.tsx';
import LLMModelsMain from './components/Main/LLMModelsMain.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GhcMain />
    <LLMModelsMain />
  </StrictMode>
);
