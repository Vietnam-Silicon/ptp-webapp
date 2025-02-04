import * as React from 'react';
import { extendTheme } from '@mui/material/styles';

import {
  Dashboard as DashboardIcon,
  ShoppingCart,
  QrCodeScanner
} from '@mui/icons-material';

import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

import Dashboard from 'body/Dashboard';
import Tracking from 'body/Tracking';
import Scan from 'body/Scan';
import Flow from 'body/Flow';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: 'dashboard',
    title: 'Package tracking',
    icon: <DashboardIcon />,
  },
  {
    segment: 'tracking',
    title: 'Create tracking',
    icon: <ShoppingCart />,
  },
  {
    segment: 'scan',
    title: 'Scan code',
    icon: <QrCodeScanner />,
  },
  {
    segment: 'flow',
    title: 'Flow',
    icon: <QrCodeScanner />,
  },
  {
    kind: 'divider',
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
};

const Index = () => {
  const router = useDemoRouter('/flow');

  return (
    <AppProvider
      branding={{ title: 'PTP' }}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <PageContainer>
          {{
            '/dashboard': <Dashboard />,
            '/tracking': <Tracking />,
            '/scan': <Scan />,
            '/flow': <Flow />,
          }[router.pathname]}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
};

export default Index;
