import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/edit/:id" component={EditExercise} />
      </div>
    </Router>
  );
}

export default App;
