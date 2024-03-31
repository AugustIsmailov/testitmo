// 'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import { BASE_URL } from '@/utils/baseUrl';
import { formatDate, formatDateEng } from '@/utils/formDate';

import type NewsItem from '@/lib/types/NewsItem';

import '../app/globals.css';
import { Providers } from '@/lib/featurues/provider';

const SingleNews = (): JSX.Element => {
  const [news, setNews] = useState<NewsItem | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const load = async () => {
      const res = await axios(`${BASE_URL}&language_id=1`);
      const newsItem = res.data.news.find(
        (item: NewsItem) => item.id === Number(id)
      );
      if (newsItem) {
        setNews(newsItem);
      }
    };

    load();
  }, [id]);

  const language = news?.title.match(/[а-яА-Я]+/);
  return (
    <Providers>
      <div>
        {news ? (
          <div className="flex flex-row min-h-screen justify-center items-center">
            <div className=" bg-white border w-1/4 border-gray-200 rounded-lg shadow-lg">
              <Image
                className="rounded-lg"
                width={500}
                height={100}
                src={news.image_big}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-5 text-gray-900 dark:text-white">
                  <span className="text-xs font-semibold tracking-tight uppercase text-gray-600">
                    {language
                      ? formatDate(news.creation_date)
                      : formatDateEng(news.creation_date)}
                  </span>
                </h5>
                <p className="mb-3">
                  <span className="font-semibold text-base tracking-tight font-openSans text-black">
                    {news.lead.replace(/<[^>]+>/g, '')}
                  </span>
                </p>
              </div>
              <Link href={'/'}>
                <button className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                  Назад{' '}
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p>Loading...</p>
            <Link href={'/'}>
              <button className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Назад{' '}
              </button>
            </Link>
          </>
        )}
      </div>
    </Providers>
  );
};

export default SingleNews;
