import React from 'react';

/**
 * TodoItem 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {Object} props.todo - 할 일 객체
 * @param {Function} props.toggleTodo - 할 일 완료 상태를 토글하는 함수
 * @param {Function} props.deleteTodo - 할 일을 삭제하는 함수
 * @param {string} props.viewMode - 현재 보기 모드 ('list' 또는 'card')
 * @param {boolean} props.isDesktop - 현재 화면이 데스크톱 크기인지 여부
 * 
 * @description
 * 개별 할 일 항목을 표시하는 컴포넌트
 * 목록형과 카드형 두 가지 보기 모드 지원
 * 반응형으로 화면 크기에 따라 표시되는 정보가 달라짐
 * 부모 컴포넌트에서 드래그 앤 드롭으로 순서 변경 가능
 */
function TodoItem({ todo, toggleTodo, deleteTodo, viewMode, isDesktop }) {
  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  // 목록형 보기 모드
  if (viewMode === 'list') {
    return (
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-300">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span
          className={`flex-1 ${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
        
        {/* 데스크톱에서만 날짜 정보 표시 */}
        {isDesktop && (
          <div className="text-xs text-gray-500 mr-2">
            {todo.completed && todo.completedAt ? (
              <span>완료: {formatDate(todo.completedAt)}</span>
            ) : (
              <span>생성: {formatDate(todo.createdAt)}</span>
            )}
          </div>
        )}
        
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    );
  }
  
  // 카드형 보기 모드
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow hover:border-blue-300">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
            />
            <h3
              className={`font-medium ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </h3>
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        
        {/* 날짜 정보 표시 */}
        <div className="text-xs text-gray-500">
          <div>생성: {formatDate(todo.createdAt)}</div>
          {todo.completed && todo.completedAt && (
            <div>완료: {formatDate(todo.completedAt)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;