'use server';

import ManagerRepository from '@/app/entities/ManagerRepository';

export default async function Home() {
  const { userMgr } = ManagerRepository.getInstance();
  const users = await userMgr.getAll();

  return <div>{JSON.stringify(users)}</div>;
}
