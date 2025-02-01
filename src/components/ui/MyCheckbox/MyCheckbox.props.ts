export interface MyCheckboxProps {
  name: string;
  text?: string;
  isSelected?: boolean;
  handleSelect?: () => void;
  handleSelectAll?: () => void;
}
