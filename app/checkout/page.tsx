
import { redirect } from "next/navigation";
import CheckoutPageClient from "./CheckoutPageClient";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
  const user = await getCurrentUser();
  if (!user || user.isAdmin) {
    console.log("no user found");
    redirect("/login");
  }
  return <CheckoutPageClient />;
}
