import { ReactElement } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page(): ReactElement {
  return <p>Customers Page</p>;
}
