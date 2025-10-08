import { getUserWithId, logout, verifyUser } from "@/lib/user-action"
import { redirect } from "next/navigation"

const Page = async () => {
  const auth = await verifyUser()
  if (!auth.success) {
    redirect("/login")
  }

  const user = await getUserWithId(auth.id as string)
  if (!user) redirect("/login")

  return (
    <div>
      User profile
       <div>ProfileImage: {user.profileImage}</div>
      <div>Name: {user.firstName + user.lastName}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phoneNumber}</div>
      <div>Account number: {user.accountNumber}</div>

      <form action={logout}>
        <button className="w-30 h-15 bg-amber-300  text-2xl text-amber-50 rounded-2xl">Logout</button>
      </form>
    </div>
  )
}

export default Page
