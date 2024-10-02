import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState(0)
  const [isWeight, setIsWeight] = useState(true)
  const [isHeight, setIsHeight] = useState(true)

  const validate = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    //regular expression-used to check the pattern of a given string
    //1) start with ^
    //2) end with $
    //3) n pattern inside the square bracket
    console.log(!!e.target.value.match('^[0-9]\.*$'));
    if (!!e.target.value.match('^[0-9]\.*$')) {
      if (e.target.name == 'weight') {
        setWeight(e.target.value)
        setIsWeight(true)
      }
      else {
        setHeight(e.target.value)
        setIsHeight(true)
      }
    }
    else {
      if (e.target.name == 'weight') {
        setWeight(e.target.value)
        setIsWeight(false)
      }
      else {
        setHeight(e.target.value)
        setIsHeight(false)
      }
    }


  }

  const reset = () => {
    setWeight("")
    setHeight("")
    setIsWeight(true)
    setIsHeight(true)
    setBmi("")
  }
  const op = () => {

    setBmi((weight / ((height / 100) * (height / 100))).toFixed(2))

    //   if ({setBmi}<18.5) {
    //     setOutput("UNDER WEIGHT")
    //     }
    //      else if(18.5<{setBmi}<24.9) {
    //       setOutput("NORMAL")
    //     }
    //     else if({setBmi}>24.9){
    //       setOutput("OVER WEIGHT")
    //     }
  }


  return (
    <>
      <div style={{ height: '100vh' }} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{ width: '800px' }} className='p-5 bg-light rounded' >
          <h1 className='text-center'>BMI CALCULATOR</h1>

          <div className='row d-flex justify-content-center align-items-center'>
            <div className="col-md-6 col-xs-12 ">
              <TextField name='weight' id="outlined-basic" value={weight} label="Weight in kg" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
              {!isWeight && <span className='text-danger'>*invalid input</span>}
            </div>
            <div className="col-md-6 col-xs-12 mt-3 mt-md-0">
              <TextField name='height' id="outlined-basic" value={height} label="Height in cm" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
              {!isHeight && <span className='text-danger'>*invalid input</span>}
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center mt-5 ">
            <div style={{ height: '130px', width: '300px' }} className="col-md-6 col-xs-12  bg-warning rounded d-flex justify-content-center align-items-center flex-column ms-5">
              <p>BMI Value</p>
              <h1>{bmi}</h1>
            </div>
            <div style={{ height: '130px', width: '300px' }} className="me-5 col-md-6 col-xs-12 mt-3 ms-5 ms-md-0 mt-md-0 bg-dark  rounded  text-center">
              <div><p className='text-warning mt-2'>Under Weight=&lt;18.5</p></div>
              <div><p className='text-warning'>18.5&lt;Normal=&lt;24.9</p></div>
              <div><p className='text-warning'>24.9&gt;Over Weight</p></div>
            </div>
          </div>

          {/* <h1 onClick={op} className='text-success'>{output}</h1> */}


          {/* <div className="row w-100  mt-5">
            <div className='col-md-6 col-xs-12 '>
              <Button onClick={op} style={{ width: '190px', height: '60px' }} variant="contained" color="success" disabled={isWeight && isHeight ? false : true}>Calculate</Button>
            </div>
            <div className='col-md-6 col-xs-12'>
              <Button onClick={reset} style={{ width: '190px', height: '60px' }} variant="outlined">Reset</Button>
            </div>
          </div> */}
          <div className="row w-100 d-flex justify-content-between align-items-center ms-5  ">
            <div className="col-md-6 col-xs-12 mt-4 ">
              <Button onClick={op} style={{ width: '190px', height: '60px' }} variant="contained" color="success" 
              disabled={isWeight && isHeight?false : true}>Calculate</Button>
            </div>
            <div className="col-md-6 col-xs-12 mt-4">
              <Button onClick={reset} style={{ width: '190px', height: '60px' }} variant="outlined">Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
