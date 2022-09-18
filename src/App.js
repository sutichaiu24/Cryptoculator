import { useState,useEffect } from 'react';
import './App.css';

function App() {

	const [result, setResult] = useState("")
	const [data, setData] = useState(null);

	const handleClick = (e) =>{
		setResult(result.concat(e.target.name));
	}
	const handleBTC = (e) => {
		setResult(eval(result.concat(e.target.name)));
	}
	const clear =()=> {
		setResult("")
	}

	const calculate =()=> {
		try{
            setResult(eval(result).toString())
		}catch(err){
			setResult("Error")
		}
	}	
	
    useEffect(() => {
      fetch('https://rest.coinapi.io/v1/quotes/current?apikey=E031CE64-3190-4D6D-B374-EDBF4D9183A0&filter_symbol_id=GEMINI_SPOT_BTC_USD')
	  
         .then((response) => response.json())
         .then((data) => {
            console.log(data[0].ask_price);
            setData(data[0].ask_price);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
	
	const backspace = ()=>{
		setResult("0")
	}
		return (
		<div className='container'>
			<form>
				<input type='text' value={result}></input>
			</form>
			<div className="keypad">
			<button id="clear" className="highlight"onClick={clear}>Clear</button>
			<button name="*"onClick={handleClick}className='highlight'>&times;</button>
			<button name="7"onClick={handleClick}>7</button>
			
			<button name="8"onClick={handleClick}>8</button>
			<button name="9"onClick={handleClick}>9</button>
			<button name="-"onClick={handleClick}className='highlight'>&minus;</button>
			<button name="4"onClick={handleClick}>4</button>	
			
			<button name="5"onClick={handleClick}>5</button>
			<button name="6"onClick={handleClick}>6</button>		
			<button name=""onClick={handleClick} className='highlight'>&divide;</button>
			<button name="1"onClick={handleClick}>1</button>
			
			<button name="2"onClick={handleClick}>2</button>
			<button name="3"onClick={handleClick}>3</button>
			<button name="+"onClick={handleClick} className='highlight' >+</button>
			<button name="0"onClick={handleClick}>0</button>
			
			
			<button name={data} onClick={handleBTC}>BTC</button>
			<button id="equal" onClick={calculate}  className='highlight' name="="
			>=</button>
			</div>
		</div>
	);
}

export default App;
