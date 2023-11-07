import clsx from "clsx";
import React from "react";
import Select, { Props } from "react-select";

const controlStyles = {
  base: "border rounded-lg hover:cursor-pointer text-sm",
  focus: "border-primary",
  nonFocus: "border-muted-foreground-300 hover:border-muted-foreground-400",
};
const placeholderStyles = "text-muted-foreground pl-1 py-0.5 text-sm";
const selectInputStyles = "pl-1 py-0.5 text-sm";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
  "bg-primary text-white rounded items-center py-0.5 pl-2 pr-1 gap-1.5 text-sm";
const multiValueLabelStyles = "leading-6 py-0.5 text-sm";
const multiValueRemoveStyles = "";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles = "text-gray-500 p-1 rounded-md hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 text-gray-500 rounded-md hover:text-foreground";
const menuStyles = "p-1 mt-2 border bg-background rounded-lg text-sm";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded text-sm",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

const sampleOptions = [
  {
    label: "Great Hotel 1 ",
    value: "Great Hotel 1",
  },
  {
    label: "Great Hotel 2",
    value: "Great Hotel 2",
  },
  {
    label: "Great Hotel 3",
    value: "Great Hotel 3",
  },
  {
    label: "Great Hotel 4",
    value: "Great Hotel 4",
  },
  {
    label: "Great Hotel 5",
    value: "Great Hotel 5",
  },
  {
    label: "Great Hotel 6",
    value: "Great Hotel 6",
  },
];

const CustomSelect = ({ value, options = sampleOptions, ...props }: Props) => (
  <Select
    value={value}
    options={options}
    isMulti
    closeMenuOnSelect={false}
    hideSelectedOptions={true}
    unstyled
    styles={{
      input: (base) => ({
        ...base,
        "input:focus": {
          boxShadow: "none",
        },
      }),
      // On mobile, the label will truncate automatically, so we want to
      // override that behaviour.
      multiValueLabel: (base) => ({
        ...base,
        foregroundSpace: "normal",
        overflow: "visible",
      }),
      control: (base) => ({
        ...base,
        transition: "none",
      }),
    }}
    classNames={{
      control: ({ isFocused }) =>
        clsx(
          isFocused ? controlStyles.focus : controlStyles.nonFocus,
          controlStyles.base
        ),
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      option: ({ isFocused, isSelected }) =>
        clsx(
          isFocused && optionStyles.focus,
          isSelected && optionStyles.selected,
          optionStyles.base
        ),
      noOptionsMessage: () => noOptionsMessageStyles,
    }}
    {...props}
  />
);

export default CustomSelect;
