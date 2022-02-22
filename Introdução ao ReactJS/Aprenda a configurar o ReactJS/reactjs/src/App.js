import Button from  './Button';

function soma(a, b){
    alert(a+b) 
}




function App() {
  return (
    <div className="App">
   <Button onClick={() => soma(10, 20)}  name="Kaique Santos"/>
    </div>
  );
}

export default App;
