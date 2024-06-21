import React from 'react';
import Button from './Button';
import { IconBaseProps } from 'react-icons';
import { Fa0 } from 'react-icons/fa6';
import { FaIcons } from 'react-icons/fa';
import { State } from '$/types/interfaces';

interface FilePickerProps {
  file?: File | null;
  setFile: (file: File | null) => void;
  readFile: any
}

const FilePicker: React.FC<FilePickerProps> = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file ? file?.name : "No file selected"}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button   
          text="Logo"
          clickEvent={() => readFile('logo')}
          modifier="text-xs" 
          icon={FaIcons}        
          />
        <Button   
          clickEvent={() => readFile('full')}
          modifier="text-xs" 
          icon={Fa0}        
          />
      </div>
    </div>
  );
}

export default FilePicker;
