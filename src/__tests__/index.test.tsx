/**
 * @jest-environment jsdom
 */
import { redirect } from "next/navigation";
import WelcomePage from "../app/page";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("WelcomePage", () => {
  it("should redirect to /learn?page=dashboard", () => {
    WelcomePage();
    expect(redirect).toHaveBeenCalledWith("/learn?page=dashboard");
  });
});
