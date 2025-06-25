import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import ViewToggle from "./ViewToggle";

/**
 * TodoApp 컴포넌트
 * 
 * @description
 * Todo 앱의 메인 컴포넌트
 * 
 * 주요 기능:
 * - useState 훅 사용: 할 일 목록, 필터, 보기 모드 등 상태 관리
 * - useEffect 훅 사용: localStorage를 통한 데이터 유지, 화면 크기 감지
 * - 할 일 추가/삭제/완료 상태 변경 기능
 * - 목록형/카드형 보기 모드 전환 기능
 * - 반응형 디자인: 화면 크기에 따라 레이아웃 및 표시 정보 변경
 * - 드래그 앤 드롭: 할 일 항목의 순서 변경 기능
 */
function TodoApp() {
  // 할 일 목록 상태 (localStorage에서 불러오기)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // 필터 상태 (all, active, completed)
  const [filter, setFilter] = useState("all");
  
  // 보기 모드 상태 (list, card)
  const [viewMode, setViewMode] = useState("list");
  
  // 화면 크기 상태 (반응형 디자인용)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // localStorage에 todos 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * 새로운 할 일 추가 함수
   * @param {string} text - 추가할 할 일 텍스트
   */
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };

    setTodos([...todos, newTodo]);
  };

  /**
   * 할 일 완료 상태 토글 함수
   * @param {number} id - 토글할 할 일의 ID
   */
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date().toISOString() : null,
            }
          : todo
      )
    );
  };

  /**
   * 할 일 삭제 함수
   * @param {number} id - 삭제할 할 일의 ID
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * 완료된 할 일 모두 삭제 함수
   */
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  
  /**
   * 드래그 앤 드롭으로 할 일 순서 변경 함수
   * @param {number} fromIndex - 드래그한 할 일의 인덱스
   * @param {number} toIndex - 드롭한 위치의 인덱스
   */
  const reorderTodos = (fromIndex, toIndex) => {
    // 필터링된 목록에서의 인덱스를 전체 목록에서의 인덱스로 변환
    const fromId = filteredTodos[fromIndex].id;
    const toId = filteredTodos[toIndex].id;
    
    const allTodos = [...todos];
    const fromIndexInAll = allTodos.findIndex(todo => todo.id === fromId);
    const toIndexInAll = allTodos.findIndex(todo => todo.id === toId);
    
    // 항목 순서 변경
    const [movedItem] = allTodos.splice(fromIndexInAll, 1);
    allTodos.splice(toIndexInAll, 0, movedItem);
    
    setTodos(allTodos);
  };

  // 필터링된 할 일 목록
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // 완료되지 않은 할 일 개수
  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  
  // 완료된 할 일이 있는지 여부
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div className={`mx-auto bg-white rounded-lg shadow-lg p-6 ${isDesktop ? 'max-w-2xl' : 'max-w-md'}`}>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Todo List
      </h1>

      {/* 할 일 입력 폼 */}
      <TodoForm addTodo={addTodo} />

      {/* 보기 모드 토글 */}
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

      {/* 필터 버튼 */}
      <TodoFilter filter={filter} setFilter={setFilter} />

      {/* 할 일 목록 */}
      <div className="mb-4">
        <TodoList
          filteredTodos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          reorderTodos={reorderTodos}
          filter={filter}
          viewMode={viewMode}
          isDesktop={isDesktop}
        />
      </div>

      {/* 하단 정보 */}
      <TodoFooter
        activeTodosCount={activeTodosCount}
        hasCompletedTodos={hasCompletedTodos}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default TodoApp;