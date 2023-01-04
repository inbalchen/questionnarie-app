import { useState } from "react";
import RadioGroupComponent from "./RadioGroupComponent";
import TextComponent from "./TextComponent";
import Button from '@mui/material/Button';
import {useForm} from "react-hook-form";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomizedButton= styled(Button)`
  background: #01bcd7;
`;
const CustomizedBox= styled(Box)`
  display: flex;
  justify-content: end;
`;

export default function FormQuestionsComponent({questions, setResponse}) {
    const [values, setValues] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const onSubmit = (data) => {
        setResponse(true);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {questions.map(question => {
              if(question.type === 'radio') {
                return <RadioGroupComponent 
                        key={question.id} 
                        question={question} 
                        handleChange={handleChange}
                        values={values}
                        register={register}
                        errors={errors} />
              }
              return <TextComponent 
                        key={question.id} 
                        question={question} 
                        handleChange={handleChange}
                        values={values}
                        register={register}
                        errors={errors} />
          })}
          <CustomizedBox>
            <CustomizedButton type="submit" variant="contained">Submit</CustomizedButton>
          </CustomizedBox>
        </form>
    )
}