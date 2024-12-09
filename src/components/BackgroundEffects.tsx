export function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 grid-bg opacity-30" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl float"
          style={{ animationDelay: "-2s" }}
        />
      </div>
    </>
  );
}
