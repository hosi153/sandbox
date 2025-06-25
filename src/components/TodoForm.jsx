import React, { useState, useRef, useEffect } from 'react';

/**
 * TodoForm 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {Function} props.addTodo - 새로운 할 일을 추가하는 함수
 * 
 * @description
 * 할 일을 입력받는 폼 컴포넌트
 * useState 훅 사용: 입력값 상태 관리
 * useRef 훅 사용: DOM 요소(input)에 직접 접근하여 포커스 관리
 * useEffect 훅 사용: 컴포넌트 마운트 시 input에 자동 포커스
 */
function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  
  // 컴포넌트 마운트 시 input에 포커스
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    // 새 할 일 추가 후 입력값 초기화 및 포커스
    addTodo(inputValue);
    setInputValue('');
    inputRef.current.focus();
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          추가
        </button>
      </div>
    </form>
  );
}

export default TodoForm;