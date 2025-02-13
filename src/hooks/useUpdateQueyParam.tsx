'use client';

import { useRouter } from 'next/navigation';

const useUpdateQueryParam = () => {
  const router = useRouter();

  return (key: string, value?: string | null, initialPath?: string) => {
    const currentPath = initialPath || window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key); // Remove param if value is null/undefined
    }

    router.push(`${currentPath}?${params.toString()}`);
  };
};

export default useUpdateQueryParam;
