import { Suspense } from 'react';
import './App.css'
import { ApiPush } from './componets/api.plants';
import { Header } from './componets/header';


const plantsAPIPermision = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/plants');
  const data = await res.json();
  return data.plants 
}


function App() {
  

  return (
    <>
    <div>
      <Header></Header>
    <Suspense fallback = {<h1> Wait trees gonna eating 😅😅 ............ </h1>} >
    
    <ApiPush plantsAPIPermision={plantsAPIPermision()}></ApiPush>
    
    </Suspense>

    </div>
    </>
  )
}

export default App
