import { AppHeader } from './components/layout/app-header';

export function App() {
  return (
    <div className='flex flex-col items-center w-full h-screen bg-zinc-100'>
      <AppHeader />
      <div className='flex flex-row items-start flex-1 gap-6 p-12'></div>
    </div>
  );
}
