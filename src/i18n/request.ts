import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const Index = getRequestConfig(async () => {
  const cookieStore = await cookies()
  const locale = await cookieStore.get('locale')?.value || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

export default Index;
