import TodoApp from "./components/TodoApp";

/**
 * App 컴포넌트
 *
 * @description
 * 애플리케이션의 루트 컴포넌트
 * TodoApp 컴포넌트를 렌더링
 */
function App() {
  return (
    <main className="p-4 md:p-8 min-h-screen bg-gray-100">
      <TodoApp />
    </main>
  );
}

export default App;
