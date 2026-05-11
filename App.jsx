
import './App.css'

function App() {
  const cars = [{'Volvo':'Toyota'},{'Tata':'Renault'}] 

  return (
    <>
      <div>
      {cars.map((i) =>( 
        <div>
          {i.Tata}{i.Volvo}
        </div>))}  
      </div> 
    </>
  )
}

export default App
