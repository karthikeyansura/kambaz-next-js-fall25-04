"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useSelector } from "react-redux";

export default function AccountPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    redirect("/Account/Profile");
  } else {
    redirect("/Account/Signin");
  }
}
