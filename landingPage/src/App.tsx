
// Style css
import './App.css'

import { Button } from "@/components/ui/button"

const App = () => {

  return (
    <div className="flex flex-col gap-2">
      <h1 className='text-3xl font-semibold underline'>
        Bem vindo a landing page do IAArena!
      </h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App;
