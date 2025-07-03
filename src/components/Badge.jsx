function Badge({ isInverted, children }) {
  const className = isInverted
    ? 'bg-white text-blue-600 border border-blue-600'
    : 'bg-blue-600 text-white';

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
