import AddProductForm from '@/components/addproducts'
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {
  const user = await getCurrentUser();
    if (!user || !user.isAdmin) {
      console.log("no user found");
      redirect("/login");
    }
    
  return (
    <div><AddProductForm/>
    </div>
  )
}

export default Page