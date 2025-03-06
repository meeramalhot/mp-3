import {useState} from 'react';
import styled from "styled-components";

const StyledLabel = styled.label`
    padding-right: 1vh;
    font-size: calc(3vh);
    text-align: center;
`;

const StyledCalc = styled.div`
    background-color: rgb(255, 233, 236);
    border-radius: 10vh;
    padding: 15vh;
    border-style: solid;
    border-color: pink;
    border-width: thick;
    width: 60%;
    margin: 0 auto;
`;

const ButtonDiv = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 2vh;
    padding-right: 2vh;
    padding-top: 5vh;
    padding-bottom: 3vh;
`;

const StyledButton = styled.button`
    border-radius: 2.5vh;
    background-color: pink;
    margin: 1.5vh;
    margin-bottom: 3vh;
    font-size: 2.3vh;
`;

const Output = styled.p`
    background-color: pink;
    border: .2vh solid rgb(0, 0, 0);
    padding: 1vh;
    border-radius: 2vh;
    text-align: center;
    height: 6vh;
`;

const StyledInput = styled.input`
    width: 12vh;
    margin-right: 4vh;
    margin-left: 2vh;
`

const CenterDiv = styled.div`
    width: 100%;
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

function Calculator() {

    //can be null or a string
    const [result, setResult] = useState<string | number>('');

    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');


    const calc = (operation: String) => {
        const firstNum = Number(one);
        const twoNum = Number(two);
        let res = 0;

        if (operation === '+') {
            res = firstNum + twoNum;
        } else if (operation === '-') {
            res = firstNum - twoNum;
        } else if (operation === 'x') {
            res = firstNum * twoNum;
        } else if (operation === '/') {
            res = firstNum / twoNum;
        } else if (operation === '^') {
            let exponent = 1;
            for (let i = 0; i < twoNum; i++) {
                exponent *= firstNum;
            }
            res = exponent;
        } else {
            res = 0
        }
        setResult(res);
    };

    const clear = () => {
        setOne('');
        setResult('');

        setTwo('');
    };

    const resultNegative = (result: string | number): boolean => {
        return Number(result) < 0;
    };

    return (
        <StyledCalc>
            <CenterDiv>
                <InputDiv>
                    <StyledLabel htmlFor="num1"></StyledLabel>
                    <StyledInput
                        type="text"
                        id="num1" value={one} onChange={(e) => setOne(e.target.value)}
                        placeholder=""/>
                    <StyledLabel htmlFor="num2"></StyledLabel>
                    <StyledInput
                        type="text"
                        id="num2" value={two} onChange={(e) => setTwo(e.target.value)}
                        placeholder=""/>
                </InputDiv>
                <ButtonDiv>
                    <StyledButton onClick={() => calc('+')}>+</StyledButton>
                    <StyledButton onClick={() => calc('-')}>-</StyledButton>
                    <StyledButton onClick={() => calc('x')}>x</StyledButton>
                    <StyledButton onClick={() => calc('/')}>/</StyledButton>
                    <StyledButton onClick={() => calc('^')}>^</StyledButton>
                    <StyledButton onClick={clear}>Clear</StyledButton>
                </ButtonDiv>
            </CenterDiv>
            {/* adapted from: https://www.w3schools.com/react/react_css.asp*/}
            <Output><p style={{ color: resultNegative(result) ? 'red' : 'black' }}>{result}</p></Output>
        </StyledCalc>
    );
}

export default Calculator;
