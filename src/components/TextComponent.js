import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CustomizedFormLabel = styled(FormLabel)`
  color: #000;
  margin-bottom: 15px;
`;

const CustomizedCard = styled(Card)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CustomizedTypography= styled(Typography)`
  color: #d32f2f;
  display: inline-block;
`;

const CustomizedCardContent= styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export default function TextComponent({question, values, register, errors}) {
    const isVisible = question.visibleIf ? question.visibleIf.split('-') : '';

    return (
        (isVisible && values[isVisible[0]] === isVisible[1]) ? 
        <CustomizedCard>
            <CustomizedCardContent>
                <CustomizedFormLabel error={errors[question.id]?.message ? true : false}>
                    {question.title.replace('{value}', values[isVisible[0]])}
                    {question.isRequired ? <CustomizedTypography>*</CustomizedTypography> : ''}
                </CustomizedFormLabel>
                <TextField id={question.id} 
                        name={question.id} 
                        placeholder="Your answer"
                        defaultValue="" 
                        {...register(question.id, { required: question.isRequired ? 'This field is required' : '' })}
                        variant="standard" />
                {errors[question.id]?.message && 
                    <CustomizedTypography variant="caption" display="block" gutterBottom>
                                            {errors[question.id]?.message}
                    </CustomizedTypography>}
            </CustomizedCardContent>
        </CustomizedCard> 
        : !isVisible &&
        <CustomizedCard>
            <CustomizedCardContent>
                <CustomizedFormLabel error={errors[question.id]?.message ? true : false}>
                        {question.title} {question.isRequired ? <CustomizedTypography>*</CustomizedTypography> : ''}
                </CustomizedFormLabel>
                <TextField id={question.id} 
                    name={question.id}
                    placeholder="Your answer"
                    defaultValue="" 
                    {...register(question.id, { required: question.isRequired ? 'This field is required' : '' })}
                    variant="standard" />
                {errors[question.id]?.message && 
                    <CustomizedTypography variant="caption" display="block" gutterBottom>
                                            {errors[question.id]?.message}
                    </CustomizedTypography>}
            </CustomizedCardContent>
        </CustomizedCard>
    )
}