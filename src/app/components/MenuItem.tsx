import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

export default function MenuItem({
  title,
  address,
  Icon
}: {
  title: string;
  address: string;
  Icon: IconType;
}) {
  return (
    <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
      <Icon className='text-2xl sm:hidden' />
      <p className='hidden sm:inline my-2 text-sm'>{title}</p>
    </Link>
  );
}
