import FollowCard from './components/FollowCard';
import './App.css';


// ************* Este es el componente Padre App *************
// Las props que pasa a su componente hijo "FollowCard" son "userName, name, initialIsFollowing"
function App() {

  // FollowCard es un elemento que rederiza react desde el componente "FollowCard.jsx"
  return (
    <div className="App">
      <FollowCard initialIsFollowing userName="demo" name="Pepe " />
      <FollowCard initialIsFollowing userName="dragon" name="Pablo Herrera" />
      <FollowCard initialIsFollowing userName="fish" name="Hugo Herrera" />
      <FollowCard initialIsFollowing userName="break" name="Juan Herrera" />


    </div>
  )
}
export default App;
