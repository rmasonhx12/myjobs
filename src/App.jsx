// changed -- use code snippet for rafce 

const App = () => {

  // add variables 
  const name = "Jacqueline Taylor";
  const x = 20;
  const y = 105;
  const names = ['Robert', 'Jackie', 'Danny', 'Sammy', 'Monee'];

  return (

    <>
    <div className="text-3xl bg-blue-700 text-center text-yellow-500 py-5">
      Bujisoft LLC
    </div>
    {/* create new div */}
    <div className="text-left text-2xl px-3 py-2">
    <h1 className="text-center text-blue-600">Welcome to Bujisoft</h1>
    <p>Hello {name}</p>
    <p>The sum of {x} and {y} is { x + y }. </p>
    </div>
    <ul className="text-red-800 px-12">
      {/* jsx requires key = id or key = index */}
      {names.map((name, index) => (
        <li key={index}>{ name }</li>
      ))}
    </ul>
    
    </>
    
  )
}

export default App
