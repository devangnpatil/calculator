import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CalcInput = (props) => {
    console.log(props);
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            width: '92.5%',
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
      value1: '',
      value2:''
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

  return (
    <div>
        <TextField
            id="standard-name"
            label="Enter value 2"
            className={classes.textField}
            value={props.value}
            onChange={handleChange(props.name)}
            margin="normal"
            name= {props.name}
        />
    </div>
  )
}

export default CalcInput
