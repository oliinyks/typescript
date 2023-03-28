import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import ToolsPage from "./pages/ToolsPage";
import UserItemPage from "./pages/UserItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/tools">Tools</NavLink>
      </div>

      <Routes>
        <Route path={"/users"} element={<UsersPage />}></Route>
        <Route path={"/users/:id"} element={<UserItemPage/>}></Route>
        <Route path={"/todos"} element={<TodoPage />}></Route>
        <Route path={"/tools"} element={<ToolsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
