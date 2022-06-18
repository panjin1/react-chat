import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { useEffect } from "react"
import { useState } from "react";


const MyStack = styled(Stack)(( ) => ({
  /*backgroundColor: 'white',*/
  padding: 40,
  margin: 30,
  // border: '1px solid grey',
  maxWidth: '1000px',
  overflow: 'auto'
}));


function NotiCard({msg}) {
  return (
    <Box  >
      <Paper sx={{ width: 200, height: 120, padding: 2 }} elevation={8}>
        <Typography variant="h5" component="div" noWrap='true' align='center'>
          {msg}
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} noWrap='true' color="text.secondary" align='center'>
          {msg}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button   size="Large">CHATTING</Button>
          <Divider orientation="vertical" variant="middle" flexItem/>
          <Button   size="Large">DELETE</Button>
        </Stack>
      </Paper>
    </Box>
  )
}



const data = "홍길동: john ";

export default function NotiCards() {
  const [msgs, setMsgs] = useState([])
  

  const pushMsg = () => {
    let m = msgs.slice();
    m.push(data);
    setMsgs(m);
    console.log(msgs);
    
  };
  
  const shiftMsg = () => {
    let m = msgs.slice();
    m.shift();
    setMsgs(m);
    console.log(msgs);
  };
  
  return (
    <>
      <MyStack direction="row" spacing={2}>
        {
          msgs.map((m,index) => (<NotiCard index msg={m} /> ))
        }      
      </MyStack>
      
      <Button variant='outlined'  size="Large" onClick= {pushMsg}>+</Button>
      <Button  variant='outlined'  size="Large" onClick= {shiftMsg}>-</Button>
    </>
  );
    
}
