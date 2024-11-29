import { TodoProvider } from './context/TodoContext';
import { ThemeProvider } from './context/ThemeContext';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import ThemeSelector from './components/ThemeSelector';

export default function Home() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-foreground">
                Todo App
              </h1>
              <ThemeSelector />
            </div>
            <div className="space-y-4">
              <TodoInput />
              <TodoList />
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}
