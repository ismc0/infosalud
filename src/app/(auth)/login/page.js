import { Suspense } from 'react';
import LoginView from './LoginView';

export const dynamic = 'force-dynamic'; // opcional, evita prerender rígido

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginView />
    </Suspense>
  );
}
