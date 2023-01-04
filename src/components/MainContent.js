import {Fragment} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {NavLink} from "react-router-dom";

const CustomizedTypography= styled(Typography)`
  color: #d32f2f;
  display: inline-block;
  
  @media and (max-width: 500px) {
    font-size: 21px;
  }
`;

export default function MainContent({questions, response}) {
    return (
        <Card>
            <div className='header'></div>
            <CardContent>
                <Typography variant="h3" gutterBottom>{questions.title}</Typography>
                {!response ? 
                <Fragment>
                    <Typography variant="subtitle2" gutterBottom>{questions.description}</Typography>
                    <CustomizedTypography variant="subtitle2" gutterBottom>{questions.required}</CustomizedTypography>
                </Fragment>
                :
                <Fragment>
                    <Typography variant="subtitle2" gutterBottom>Your request has been submitted</Typography>
                    <NavLink to="/" className="page-link">Send anorher request</NavLink>
                </Fragment> }
            </CardContent>
        </Card>
    )
}