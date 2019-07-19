import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CalcInput = () => {

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
      <div className="calc-input-wrapper">
        <TextField
            id="standard-name"
            label="Enter value 1"
            className={classes.textField}
            value={values.value1}
            onChange={handleChange('value1')}
            margin="normal"
        />
        <TextField
            id="standard-name"
            label="Enter value 2"
            className={classes.textField}
            value={values.value2}
            onChange={handleChange('value2')}
            margin="normal"
        />
      </div>
    </div>
  )
}

export default CalcInput
