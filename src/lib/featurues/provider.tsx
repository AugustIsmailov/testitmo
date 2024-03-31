'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from '@/components/Header/Header';

export function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
}
