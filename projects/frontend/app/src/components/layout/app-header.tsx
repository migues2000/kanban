import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { KanbanIcon } from 'lucide-react';

export function AppHeader() {
  return (
    <header className='sticky top-0 z-20 flex items-center justify-between w-full h-16 px-4 border-b bg-background sm:px-6'>
      <div className='flex items-center gap-4'>
        <a href='/' className='flex items-center gap-2 text-lg font-semibold sm:text-base'>
          <KanbanIcon className='w-6 h-6' />
          <span>Kanban App</span>
        </a>
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
