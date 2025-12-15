export function AppHeader({ title }: { title: string }) {
  return (
    <header>
      <h1 style={{ fontSize: 28, margin: 0 }}>{title}</h1>
      <div
        style={{
          height: 2,
          marginTop: 12,
          width: 72,
          background: "currentColor",
          opacity: 0.15,
        }}
      />
    </header>
  );
}
