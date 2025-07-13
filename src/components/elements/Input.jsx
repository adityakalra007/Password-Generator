export const Input = ({ type = "text", value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 w-full"
  />
);
