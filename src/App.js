import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { components } from "react-select";
import "./styles/select.scss";

const initialOptions = [
  {
    label: "",
    options: [
      { value: "education", label: "Education 🎓" },
      { value: "art", label: "Art 🎭" },
      { value: "sport", label: "Sport ⚽" },
      { value: "games", label: "Games 🎮" },
      { value: "health", label: "Health 🏥" },
    ],
  },
];

const Option = (props) => (
  <components.Option {...props}>
    <span className="ms__option-label">{props.label}</span>
    {props.isSelected && <span className="ms__check">✓</span>}
  </components.Option>
);

export default function App() {
  const [options, setOptions] = useState(initialOptions);
  const [value, setValue] = useState([]);

  const onCreateOption = (input) => {
    const label = input.trim();
    if (!label) return;
    const newOption = { value: label.toLowerCase().replace(/\s+/g, "-"), label };

    setOptions((prev) => {
      const next = [...prev];
      next[0] = { ...next[0], options: [...(next[0].options || []), newOption] };
      return next;
    });

    setValue((prev) => [...prev, newOption]);
  };

  return (
    <div className="app-shell">
      <div className="select-wrap">
        <CreatableSelect
          className="ms"
          classNamePrefix="ms"
          components={{ Option }}
          options={options}
          value={value}
          onChange={(vals) => setValue(vals || [])}
          onCreateOption={onCreateOption}
          placeholder="Science"
          isSearchable
          isMulti                        
          closeMenuOnSelect={false}      
          hideSelectedOptions={false} 
        />
      </div>
    </div>
  );
}
