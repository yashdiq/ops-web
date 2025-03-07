import { redirect } from "next/navigation";

export default function WelcomePage() {
  redirect("/learn?page=dashboard");
}
