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
    <div>
      <h2>30세 미만 유저 목록</h2>
      <UserList />
    </div>
  );
}

export default App;
