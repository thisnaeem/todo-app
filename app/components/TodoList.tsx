"use client";

import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';
import { ListTodo } from 'lucide-react';

export default function TodoList() {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-800/30 rounded-lg backdrop-blur-sm">
        <ListTodo className="w-12 h-12 mb-4 text-gray-400" />
        <p className="text-gray-400 font-medium">
          No todos yet. Add one above!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 transition-all">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
} 