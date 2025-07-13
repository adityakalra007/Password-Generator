import { useState } from "react";
import { LengthSlider } from "../compounds/LengthSlider";
import { OptionSelector } from "../compounds/OptionSelector";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";

const generatePassword = (length, options) => {
  let chars = "";
  if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (options.numbers) chars += "0123456789";
  if (options.symbols) chars += "!@#$%^&*()-_=+[]{};:,.<>?";

  if (!chars) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export const PasswordGeneratorForm = () => {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  const toggleOption = (key) =>
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl w-full max-w-md space-y-6">
      <h2 className="text-white text-2xl text-center">Password Generator</h2>
      <Input value={password} readOnly placeholder="Generated password" />
      <LengthSlider length={length} onChange={(e) => setLength(e.target.value)} />
      <OptionSelector
        options={[
          { label: "Uppercase", checked: options.uppercase, onChange: () => toggleOption("uppercase") },
          { label: "Lowercase", checked: options.lowercase, onChange: () => toggleOption("lowercase") },
          { label: "Numbers", checked: options.numbers, onChange: () => toggleOption("numbers") },
          { label: "Symbols", checked: options.symbols, onChange: () => toggleOption("symbols") },
        ]}
      />
      <Button label="Generate Password" onClick={handleGenerate} />
      {password && <Button label="Copy to Clipboard" onClick={handleCopy} />}
    </div>
  );
};
