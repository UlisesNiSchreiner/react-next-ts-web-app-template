import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("RootLayout", () => {
  it("renders children", () => {
    const children = <div>Test children</div>;
    render(<RootLayout>{children}</RootLayout>);
    expect(screen.getByText("Test children")).toBeInTheDocument();
  });
});