import {useState} from 'react';
import {Container,Screen,Prevoius,Current,Button} from '../styles/Main';
const Calculator = () => { 
  const [current,setCurrent]=useState("");
  const [prevoius,setPrevious]=useState("");
  const [operations,setOperations]=useState("");


  const appendValueHandler=(el)=>{
    const value=el.target.getAttribute('data');
    if(value==='.' && current.includes('.'))return
    setCurrent(current+value);
  };

  const deleteHandler=()=>{
    setCurrent(String(current).slice(0,-1));
  }

  const clearHandler=()=>{
    setCurrent('');
    setOperations('');
    setPrevious('');
  }

  const chooseOperationHandler=(el)=>{
    if(current==='')return;
    if(prevoius!==''){
      let value=compute()
      setPrevious(value)
    }else{
      setPrevious(current)
    }
    setCurrent(' ');
    setOperations(el.target.getAttribute('data'));
  }

  const equalHandler=()=>{
    let value=compute()
    if(value===undefined || value==null)return;
    setCurrent(value);
    setPrevious('');
    setOperations('');
  };

  const compute=()=>{
    let result;
    let previousNumber=parseFloat(prevoius)
    let CurrentNumber=parseFloat(current)
    if(isNaN(previousNumber)||isNaN(CurrentNumber)) return
    switch(operations){
      case '/':
        result=previousNumber/CurrentNumber;
        break;
      case '*':
        result=previousNumber*CurrentNumber;
        break;
      case '-':
        result=previousNumber-CurrentNumber;
        break;
      case '+':
        result=previousNumber+CurrentNumber;
        break;
      default:return  
    }
    return result;
  }



  return (
    <>
      <Container>
        <Screen>
          <Prevoius>{prevoius}{operations}</Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} onClick={clearHandler}>AC</Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button data={'/'} onClick={chooseOperationHandler} operation>/</Button>
        <Button data={7} onClick={appendValueHandler}>7</Button>
        <Button data={8} onClick={appendValueHandler}>8</Button>
        <Button data={9} onClick={appendValueHandler}>9</Button>
        <Button data={'*'} onClick={chooseOperationHandler} operation>*</Button>
        <Button data={4} onClick={appendValueHandler}>4</Button>
        <Button data={5} onClick={appendValueHandler}>5</Button>
        <Button data={6} onClick={appendValueHandler}>6</Button>
        <Button data={'-'} onClick={chooseOperationHandler} operation>-</Button>
        <Button data={1} onClick={appendValueHandler}>1</Button>
        <Button data={2} onClick={appendValueHandler}>2</Button>
        <Button data={3} onClick={appendValueHandler}>3</Button>
        <Button data={'+'} onClick={chooseOperationHandler} operation>+</Button>
        <Button data={'.'} onClick={appendValueHandler}>.</Button>
        <Button data={0} onClick={appendValueHandler}>0</Button>
        <Button gridSpan={2}onClick={equalHandler} equals>=</Button>
      </Container>
    </>
  )
}

export default Calculator
