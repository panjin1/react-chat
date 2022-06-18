import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  //'&:last-child td, &:last-child th': {
  //  border: 0,
  //},
}));

function createData(
  name: string,
  startTime: string,
  endTime: string,
) {
  return { name, startTime, endTime };
}

const rows = [
  createData('홍길동', '08:00 PM', '10:00 PM' ),
  createData('이순신', '08:00 PM', '10:00 PM'  ),
  createData('장보고', '08:00 PM', '10:00 PM'  ),
  createData('김장',  '08:00 PM', '10:00 PM' ),
  createData('이이',  '08:00 PM', '10:00 PM' ),
];

export default function DispItems() {
  return (
    <TableContainer component={Grid} sx={{ width: 350, height: 300 }} border= "5px solid lightgray" margin={5} padding={2}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>이름</StyledTableCell>
            <StyledTableCell align="right">시작시간</StyledTableCell>
            <StyledTableCell align="right">종료시간</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.startTime}</StyledTableCell>
              <StyledTableCell align="right">{row.endTime}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}