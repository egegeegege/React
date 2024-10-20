import './App.css'
import SeerachEngine from './components/SeerachEngine'
import NewEngine from './components/NewEngine'
import reactResmi  from './assets/react.svg'

function App() {
var number1 =20
var number2 =86
var name ='Ege '
var ortalama = number1 + number2 /2

var name2 = 'Zeynep'
  return (
    <>
      <NewEngine name={name2} name2={name} />
        <p>Hello React {ortalama}</p>
        <p>Welcome To React {name}</p>
         <img src={reactResmi}className='logo' />
        <SeerachEngine message={name} fiat={ortalama} />
      
    </>
  )
}

export default App
