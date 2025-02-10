'use client';

import { useParams, useRouter } from 'next/navigation';

import { Home } from 'body/home';
import { UserRoleEnum } from 'body/login/constants';

const Index = () => {
  const params = useParams<{ userRole?: string }>();

  const router = useRouter();

  if (!params.userRole) {
    router.push('/');
    return null;
  }

  const userRole = params.userRole as unknown as UserRoleEnum;

  return (
    <>
      <Home userRole={userRole} />
    </>
  );
};

export default Index;
