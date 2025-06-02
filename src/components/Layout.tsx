
import { ReactNode } from 'react';
import Navigation from './Navigation';
import FloatingWhatsApp from './FloatingWhatsApp';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
