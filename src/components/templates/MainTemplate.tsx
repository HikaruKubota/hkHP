import { ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

export default function MainTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}
