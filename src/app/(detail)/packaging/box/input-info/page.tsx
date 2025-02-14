'use client';
import dynamic from 'next/dynamic';

import ClientLocalizationProvider from 'ClientLocalizationProvider';

const InputInfoNoSsr = dynamic(
  () => import('body/packaging/box/InputInfo').then((mod) => mod.InputInfo),
  {
    ssr: false,
  },
);
const Index = () => (
  <ClientLocalizationProvider>
    <InputInfoNoSsr />
  </ClientLocalizationProvider>
);

export default Index;
