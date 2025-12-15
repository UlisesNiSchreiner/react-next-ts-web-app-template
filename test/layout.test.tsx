import RootLayout from "@/app/layout";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("RootLayout", () => {
  it("renders children", () => {
    const children = <div>Test children</div>;
    render(<RootLayout>{children}</RootLayout>);
    expect(screen.getByText("Test children")).toBeInTheDocument();
  });
});