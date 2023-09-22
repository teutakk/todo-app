import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Users from './Users/Users';
import UserTodo from './Todo/UserTodo';
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Users />} />
            <Route path="/user/:id" element={<UserTodo />} />
        </Routes>
    </Router>
  );
}

export default App;
