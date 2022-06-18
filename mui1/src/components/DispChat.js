import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { autocompleteClasses, getAppBarUtilityClass } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Button)(( ) => ({
  backgroundColor: 'gray',
  padding: 7,
  textAlign: 'right',
  color: 'white',
  borderRadius: 20,
  /*display: 'flex'*/
}));

const Items = styled(Stack)(( ) => ({
  /*backgroundColor: 'white',*/
  padding: 10,
  margin: 20,
  border: '4px solid grey',
  maxHeight: '150px',
  overflow: 'auto'
}));

export default function DispChat() {
  return (
    <Box sx={{ width: '25%' }}>
      <Items  spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Box >
          <Item align='center'>Typo</Item>
        </Box>
        <Button variant="contained" width='20'>Contained</Button>
        <p float='left'>pppp</p>
      </Items>
    </Box>
  );
}
