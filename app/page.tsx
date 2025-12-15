import { AppHeader } from "@/components/AppHeader";

export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <AppHeader title="react-next-ts-web-aap-template" />
      <p style={{ marginTop: 12, lineHeight: 1.6 }}>
        This repository is a template for building production web apps with Next.js,
        React and TypeScript.
      </p>
    </main>
  );
}
