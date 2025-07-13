import { Input } from "../elements/Input";

export const LengthSlider = ({ length, onChange }) => (
  <div className="text-white mb-4">
    <label>Password Length: {length}</label>
    <input
      type="range"
      min="4"
      max="32"
      value={length}
      onChange={onChange}
      className="w-full mt-2"
    />
  </div>
);
