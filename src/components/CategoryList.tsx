import React, { FC, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from '@mui/material';
import axios from 'axios';

interface Rows {
  id: string;
  name: string;
}

interface CategoryListProps {
  text: string;
}

const CategoryList: FC<CategoryListProps> = ({ text }) => {
  const [rows, setRows] = React.useState<Rows[]>([]);

  useEffect(() => {
    axios.get('').then((r) => {
      setRows(r.data.response);
    });
  }, []);

  return (
    <>
      <div>
        <h4>{text}</h4>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CategoryList;
