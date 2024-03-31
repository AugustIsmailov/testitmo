'use client';
import { type RootState } from '@/lib/featurues/store';

import NewPage from '@/components/NewsPage/NewsPage';
import { useSelector } from 'react-redux';

function Home(): JSX.Element {
  const {
    news: { list },
  } = useSelector((state: RootState) => state);

  return (
    <>
      <main className="flex flex-col items-start p-24">
        <h1 className="mb-6 text-3xl font-bold text-gray-800 ml-28">
          Новости и события
        </h1>

        <div>
          <NewPage news={list} />
        </div>
      </main>
    </>
  );
}
export default Home;
