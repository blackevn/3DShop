import React from 'react';
import Button from './Button';
import { Fa0 } from 'react-icons/fa6';

interface AIPickerProps {
  prompt?: string;
  setPrompt: (value: string) => void;
  generatingImg: boolean;
  handleSubmit: (type: 'logo' | 'full') => void;
}

const AIPicker: React.FC<AIPickerProps> = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Button
            text="Asking AI..."
            modifier="text-xs"
            clickEvent={() => { } } // Provide a no-op function since it's required
            icon={Fa0}          />
        ) : (
          <>
            <Button 
              text="AI Logo"
              clickEvent={() => handleSubmit('logo')}
              modifier="text-xs" 
              icon={Fa0}            />

            <Button 
              text="AI Full"
              clickEvent={() => handleSubmit('full')}
              modifier="text-xs" 
              icon={Fa0}            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
