'use client';

import Link from 'next/link'
import React from 'react'
import { useSession } from "next-auth/react";


const NavBar = () => {
  const { status, data: session} = useSession();



  return (
    <div className="flex bg-slate-400 p-5 space-x-3">
        <Link href="/" className='mr-5'>Home</Link>
        <Link href="/users">Users</Link>
        { status === 'loading' && <div>Loading...</div> }
        { status === 'authenticated' && <div>{session.user!.name}</div> }
        { status === 'unauthenticated' && <Link href="/api/auth/signin" className='ml-5'>Sign In</Link>}
        <Link href='/api/auth/signout' className='ml-5'>Sign Out</Link>
    </div>
  )
}

export default NavBar;

// const NavBar = () => {
//   const { status, data: session } = useSession();

//   return (
//     <div className="flex bg-slate-400 p-5 space-x-3">
//       <Link href="/" className="mr-5">Home</Link>
//       <Link href="/users">Users</Link>

//       {status === "loading" && <div>Loading...</div>}

//       {status === "authenticated" && (
//         <div className="ml-5">Welcome, {session.user?.name}</div>
//       )}

//       {status === "unauthenticated" && (
//         <button onClick={() => signIn("google")} className="ml-5">
//           Sign In
//         </button>
//       )}

//       {status === "authenticated" && (
//         <button onClick={() => signOut()} className="ml-5">
//           Sign Out
//         </button>
//       )}
//     </div>
//   );
// };

// export default NavBar;
