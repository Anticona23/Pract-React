import FollowCard from './components/FollowCard';
import './App.css';


// ************* Este es el componente Padre App *************
// Las props que pasa a su componente hijo "FollowCard" son "userName, name, isFollowing"
function App() {

  // FollowCard es un elemento que rederiza react desde el componente "FollowCard.jsx"
  return (
    <div className="App">
      <FollowCard isFollowing userName="demo" name="Pepe " />
      <FollowCard isFollowing={false}  userName="dragon" name="Pablo Herrera" />
      <FollowCard isFollowing userName="dragon" name="Pablo Herrera" />
      <FollowCard isFollowing userName="dragon" name="Pablo Herrera" />


    </div>
  )
}
export default App;
