import { Metadata } from 'next';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { ReactElement } from 'react';
import { CustomerField } from '@/app/lib/definitions';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page(): Promise<ReactElement> {
  const customers: CustomerField[] = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
