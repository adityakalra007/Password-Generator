import { Checkbox } from "../elements/Checkbox";

export const OptionSelector = ({ options }) => (
  <div className="space-y-2">
    {options.map((opt, i) => (  
      <Checkbox key={i} label={opt.label} checked={opt.checked} onChange={opt.onChange} />
    ))}
  </div>
);
