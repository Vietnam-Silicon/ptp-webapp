'use-client';

import { InputInfo } from 'body/packaging/box/InputInfo';
import ClientLocalizationProvider from 'ClientLocalizationProvider';

const Index = () => (
  <ClientLocalizationProvider>
    <InputInfo />
  </ClientLocalizationProvider>
);

export default Index;
