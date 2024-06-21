import { FaShirt } from "react-icons/fa6";
import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
import { GiShirtButton } from "react-icons/gi";
import { FaRobot, FaFileAlt, FaSwatchbook } from "react-icons/fa";
import { IconType } from 'react-icons';

export interface DecalTypes {
  logo: {
    stateProperty: string,
    filterTab: string,
  },
  full: {
    stateProperty: string,
    filterTab: string,
  },
}

// Define the type for each tab
export interface EditorTab {
  name: string;
  icon: IconType;
}

// Define the array of tabs with explicit types
export const EditorTabs: EditorTab[] = [
  {
    name: "colorpicker",
    icon: FaSwatchbook, // Replace with the appropriate icon
  },
  {
    name: "filepicker",
    icon: FaFileAlt, // Replace with the appropriate icon
  },
  {
    name: "aipicker",
    icon: FaRobot, // Replace with the appropriate icon
  },
];
export const FilterTabs = [
  {
    name: "logoShirt",
    icon: FaShirt,
  },
  {
    name: "stylishShirt",
    icon: GiShirtButton,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
} as const;

export type DecalType = keyof typeof DecalTypes;


