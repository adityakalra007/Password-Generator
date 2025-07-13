export const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-2 text-white">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span>{label}</span>
  </label>
);
