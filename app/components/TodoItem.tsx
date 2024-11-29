"use client";

import { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { Todo } from "../types/todo";
import { Trash2, Check, Pencil, X, Save } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  return (
    <div
      className={`group flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm transition-all duration-200 hover:bg-gray-800/60 ${
        todo.completed ? "opacity-70" : ""
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-colors duration-200 flex items-center justify-center
          ${
            todo.completed
              ? "bg-blue-600 border-blue-600"
              : "border-gray-500 hover:border-blue-500"
          }`}
      >
        {todo.completed && <Check className="w-3 h-3 text-white" />}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-grow bg-gray-800/70 text-white px-3 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span
          className={`flex-grow text-gray-100 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="p-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Save className="w-4 h-4" />
            </button>
            <button
              onClick={handleCancel}
              className="p-1 text-gray-300 hover:text-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="p-1 text-gray-300 hover:text-gray-200 transition-colors"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 text-rose-400 hover:text-rose-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
