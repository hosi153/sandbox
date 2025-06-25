import React from 'react';

/**
 * TodoFilter 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.filter - 현재 필터 상태 ('all', 'active', 'completed')
 * @param {Function} props.setFilter - 필터 상태를 변경하는 함수
 * 
 * @description
 * 할 일 목록을 필터링하는 버튼 컴포넌트
 * 전체/진행중/완료 상태에 따라 할 일을 필터링
 */
function TodoFilter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        전체
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          filter === 'active'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        진행중
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        완료
      </button>
    </div>
  );
}

export default TodoFilter;