import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LocaleSwitch } from "../index";
import { useLocale } from "presentation/hooks";
import { UITestWrapper } from 'presentation/libtest';

jest.mock("presentation/hooks", () => ({
  useLocale: jest.fn(),
}));

describe("Locale is en", () => {
  test("EN Button is active", () => {
    (useLocale as jest.Mock).mockReturnValueOnce({ locale: "en" });
    render(<LocaleSwitch />, { wrapper: UITestWrapper });
    const buttonEn = screen.getByText("EN");
    expect(buttonEn).toHaveStyle({ border: "" });
  });

  test("日 Button is passive", () => {
    (useLocale as jest.Mock).mockReturnValueOnce({ locale: "en" });
    render(<LocaleSwitch />, { wrapper: UITestWrapper });
    const buttonJa = screen.getByText("日");
    expect(buttonJa).toHaveStyle({ border: "1px solid" });
  });
});

describe("Locale is ja", () => {
  test("EN Button is passive", () => {
    (useLocale as jest.Mock).mockReturnValueOnce({ locale: "ja" });
    render(<LocaleSwitch />, { wrapper: UITestWrapper });
    const buttonEn = screen.getByText("EN");
    expect(buttonEn).toHaveStyle({ border: "1px solid" });
  });

  test("日 Button is active", () => {
    (useLocale as jest.Mock).mockReturnValueOnce({ locale: "ja" });
    render(<LocaleSwitch />, { wrapper: UITestWrapper });
    const buttonJa = screen.getByText("日");
    expect(buttonJa).toHaveStyle({ border: "" });
  });
});
