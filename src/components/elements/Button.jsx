export const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition w-full"
  >
    {label}
  </button>
);
