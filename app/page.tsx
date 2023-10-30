import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  //gets session on the client
  // const { status, data: session } = useSession();

  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>hello world</h1>
      <Link href='/users' className='btn btn-primary'>
        Users
      </Link>
      {!session ? (
        <Link
          className='btn btn-primary bg-green-400 block max-w-sm text-xl px-10 py-2 mt-10'
          href='/api/auth/signin'
        >
          Sign In
        </Link>
      ) : (
        <div>
          Hello {session?.user!.name}{' '}
          <Link className='btn' href='/api/auth/signout'>
            {' '}
            Sign out
          </Link>
        </div>
      )}
      <ProductCard />
    </main>
  );
}
