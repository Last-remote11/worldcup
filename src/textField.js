import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  
  export default function BasicTextFields() {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="항목 이름"  variant="filled"/>
        <TextField id="filled-basic" label="이미지 링크" variant="filled" />
      </form>
    );
  }
