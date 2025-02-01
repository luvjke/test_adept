export interface MyCheckboxProps {
  name: string;
  text?: string;
  colorCheckbox: string;
  isSelected?: boolean;
  handleSelect?: () => void;
  handleSelectAll?: () => void;
}
