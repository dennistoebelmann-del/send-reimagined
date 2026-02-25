const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Large floating orb - warm accent */}
      <div className="ambient-orb ambient-orb-1" />
      {/* Medium drifting orb - neutral */}
      <div className="ambient-orb ambient-orb-2" />
      {/* Small subtle orb - warm */}
      <div className="ambient-orb ambient-orb-3" />
      {/* Extra large deep orb */}
      <div className="ambient-orb ambient-orb-4" />
    </div>
  );
};

export default AmbientBackground;
