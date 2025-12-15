import { render, within } from "@testing-library/react";
import Page from "@/app/page";
import { describe, expect, it } from "vitest";

describe("Page", () => {
  it("renders the title", () => {
    const { container } = render(<Page />);

    // Scope the query to this render only
    expect(
      within(container).getByRole("heading", { name: /react-next-ts-web-aap-template/i })
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    const { container } = render(<Page />);

    const expected =
      "This repository is a template for building production web apps with Next.js, React and TypeScript.";

    // Scope the query to this render only and normalize whitespace
    expect(
      within(container).getByText((content) => content.replace(/\s+/g, " ").trim() === expected)
    ).toBeInTheDocument();
  });
});
