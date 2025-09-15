import React, { Suspense } from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string }
}

async function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn'>New User</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
}

export default UsersPage