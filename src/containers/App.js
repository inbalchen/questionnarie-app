import { useEffect, useState } from "react";
import FormQuestionsComponent from "../components/FormQuestionsComponent";
import MainContent from "../components/MainContent";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomizedBox= styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export default function App() {
  const [questions, setQuestions] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [response, setResponse] = useState(false)

  useEffect(() => {
      fetch('http://localhost:3000/questionnaries/1')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setQuestions(data);
      }).catch(err => {
        console.log(err)
        setError(err)
      });
  }, [])

  return (
    <div className="main-container">
      {isLoading ? <CustomizedBox><CircularProgress /></CustomizedBox>
      : error ? <div>error</div> 
      : <div className="questions-container">
          <MainContent questions={questions} response={response} />
          {!response && <FormQuestionsComponent questions={questions.questions} setResponse={setResponse} />}
        </div>}
    </div>
  );
}
