import React, { useState } from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {Array} props.filteredTodos - 필터링된 할 일 목록
 * @param {Function} props.toggleTodo - 할 일 완료 상태를 토글하는 함수
 * @param {Function} props.deleteTodo - 할 일을 삭제하는 함수
 * @param {Function} props.reorderTodos - 할 일 순서를 변경하는 함수
 * @param {string} props.filter - 현재 필터 상태 ('all', 'active', 'completed')
 * @param {string} props.viewMode - 현재 보기 모드 ('list' 또는 'card')
 * @param {boolean} props.isDesktop - 현재 화면이 데스크톱 크기인지 여부
 * 
 * @description
 * 할 일 목록을 표시하는 컴포넌트
 * 목록형과 카드형 두 가지 보기 모드 지원
 * 반응형으로 화면 크기에 따라 레이아웃 변경
 * 드래그 앤 드롭으로 할 일 순서 변경 기능 제공
 */
function TodoList({ filteredTodos, toggleTodo, deleteTodo, reorderTodos, filter, viewMode, isDesktop }) {
  // 드래그 중인 항목의 인덱스 상태
  const [draggedIndex, setDraggedIndex] = useState(null);
  
  // 할 일이 없는 경우 메시지 표시
  if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">
        {filter === 'all'
          ? '할 일이 없습니다.'
          : filter === 'active'
          ? '진행중인 할 일이 없습니다.'
          : '완료된 할 일이 없습니다.'}
      </p>
    );
  }

  /**
   * 드래그 시작 핸들러
   * @param {number} index - 드래그 시작한 항목의 인덱스
   */
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  /**
   * 드래그 오버 핸들러 (기본 동작 방지)
   */
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /**
   * 드롭 핸들러
   * @param {number} dropIndex - 드롭한 위치의 인덱스
   */
  const handleDrop = (dropIndex) => {
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      reorderTodos(draggedIndex, dropIndex);
    }
    setDraggedIndex(null);
  };

  /**
   * 드래그 종료 핸들러
   */
  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // 카드형 보기 모드
  if (viewMode === 'card') {
    return (
      <div className={`grid gap-4 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {filteredTodos.map((todo, index) => (
          <div
            key={todo.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            className="cursor-move"
          >
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              viewMode={viewMode}
              isDesktop={isDesktop}
            />
          </div>
        ))}
      </div>
    );
  }

  // 목록형 보기 모드
  return (
    <div className="space-y-2">
      {filteredTodos.map((todo, index) => (
        <div
          key={todo.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`cursor-move ${draggedIndex === index ? 'opacity-50' : ''}`}
        >
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            viewMode={viewMode}
            isDesktop={isDesktop}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;