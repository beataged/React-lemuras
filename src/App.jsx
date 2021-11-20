
import Hello from './Components/Start/Hello';
const element = <h1>Hello world</h1>
const data = [
  {to: 'Europe', color:'blue', size: '44px'},
  {to: 'America', color:'red', size: '14px'},
  {to: 'Antarctica', color:'green', size: '54px'},
  
]
function App() {


  return (
    <>
    <div className="App">
    <Hello element= {element} to={'Madagascar'} color={'blue'} size={'15px'}/>

    <Hello element= {element} to={'Africa'} color={'yellow'} size={'35px'}/>

    <Hello element= {element} to={6*9} color={'pink'} size={'25px'}/>
    {
      data.map(d => <Hello key={d.to} element= {element} to={d.to} color={d.color} size={d.size}></Hello>)
    }
   </div>
  </>
  );
}

export default App;
