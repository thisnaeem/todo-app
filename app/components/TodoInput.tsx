"use client";

import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { PlusCircle } from 'lucide-react';

export default function TodoInput() {
  const { addTodo } = useTodo();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="w-full px-4 py-3 pl-4 pr-12 bg-gray-800/30 rounded-lg backdrop-blur-sm 
                 border border-gray-700/50 outline-none transition-all duration-200
                 placeholder:text-gray-500 focus:border-blue-500/50 focus:bg-gray-800/50"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2
                 text-blue-400 hover:text-blue-300 disabled:text-gray-600
                 transition-colors duration-200"
      >
        <PlusCircle className="w-5 h-5" />
      </button>
    </form>
  );
}
