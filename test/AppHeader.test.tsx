import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppHeader } from "@/components/AppHeader";

describe("AppHeader", () => {
  it("renders the provided title", () => {
    render(<AppHeader title="Hello" />);
    expect(screen.getByRole("heading", { name: "Hello" })).toBeInTheDocument();
  });
});
