import { Button } from './components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';

export function App() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <Card className='w-80'>
        <CardHeader>
          <CardTitle>Kanban</CardTitle>
          <CardDescription>The best Kanban app</CardDescription>
        </CardHeader>

        <CardFooter className='flex flex-row justify-between'>
          <Button variant='outline'>Hello World!</Button>
          <Button>Hello World!</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
