import { ModeToggle } from '@/components/global/model-toggle';
import { UserButton } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src="/assets/plura-logo.svg" alt="Tiny" width={40} height={40} />
        <span className="text-xl font-bold">Tiny</span>
      </aside>
      <nav className="hidden xl:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Feature</Link>
          <Link href={'#'}>Abouts</Link>
        </ul>
      </nav>
      {user ? (
        <div className="z-50 absolute right-[4rem]">
          <UserButton />
        </div>
      ) : (
        <aside className="flex gap-2 items-center absolute right-[4rem]">
          <Link
            href={'/agency'}
            className="px-4 rounded-md hover:bg-primary/80 text-white bg-primary p-2 z-10"
          >
            Login
          </Link>
        </aside>
      )}
      <ModeToggle />
    </div>
  );
};

export default Navigation;
