import Link from "next/link";
import ProductCard from "./component/ProductCard";
import getServerSession from "next-auth";
import { authOptions } from "./auth";


// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <main>
//       <h1>Hello { session && <span>{session.user!.name}</span> } </h1>
//       <Link href="/users">Users</Link>
//       <ProductCard />
//     </main>
//   );
// }


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>
        Hello{" "}
        {session ? (
          <span>{session.user?.name}</span>
        ) : (
          <span>Guest</span>
        )}
      </h1>

      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
