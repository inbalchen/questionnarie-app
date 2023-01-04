import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

const CustomizedFormLabel = styled(FormLabel)`
  color: #000;
  display: flex;
`;

const CustomizedTypography= styled(Typography)`
  color: #d32f2f;
  display: inline-block;
`;

const CustomizedCard = styled(Card)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default function RadioGroupComponent({question, handleChange, register, errors}) {
    return (
        <CustomizedCard>
            <CardContent>
                <FormControl fullWidth>
                    <CustomizedFormLabel error={errors[question.id]?.message ? true : false}>
                        {question.title} {question.isRequired ? <CustomizedTypography>*</CustomizedTypography> : ''}
                    </CustomizedFormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="radio-buttons-group"
                        defaultValue=""
                        onChange={handleChange}>
                        {question.choices.map(choice => {
                                return (
                                <CustomizedFormLabel key={choice.value}>
                                    <FormControlLabel 
                                        value={choice.label} 
                                        name={question.id} 
                                        {...register(question.id, { required: question.isRequired ? 'This field is required' : '' })}
                                        control={<Radio />} 
                                        label={choice.label} />
                                        
                                    {choice.isTextField && 
                                    <TextField fullWidth id="standard-basic" label="" variant="standard" />}
                                    
                                </CustomizedFormLabel>
                                )
                        })}
                    </RadioGroup>
                    {errors[question.id]?.message && 
                    <CustomizedTypography variant="caption" display="block" gutterBottom>
                                            {errors[question.id]?.message}
                    </CustomizedTypography>}
                </FormControl>
            </CardContent>
        </CustomizedCard>
    )
}