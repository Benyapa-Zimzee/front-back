import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import{Routes,Route} from 'react-router-dom';
import Menubar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';

class App extends Component {
  render(){
    return (
      <>
        <Menubar/>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/create-student' element={<CreateStudent/>} />
            <Route path='/student-list' element={<StudentList/>} />
          </Routes>
        </div>
      </>
    );
  }

}

export default App;
