import React from 'react';

/**
 * TodoFooter 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {number} props.activeTodosCount - 완료되지 않은 할 일 개수
 * @param {boolean} props.hasCompletedTodos - 완료된 할 일이 있는지 여부
 * @param {Function} props.clearCompleted - 완료된 할 일을 모두 삭제하는 함수
 * 
 * @description
 * 할 일 목록의 하단 정보를 표시하는 컴포넌트
 * 남은 할 일 개수와 완료된 항목 삭제 버튼 제공
 */
function TodoFooter({ activeTodosCount, hasCompletedTodos, clearCompleted }) {
  return (
    <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
      <span>{activeTodosCount}개 남음</span>
      {hasCompletedTodos && (
        <button
          onClick={clearCompleted}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          완료된 항목 삭제
        </button>
      )}
    </div>
  );
}

export default TodoFooter;