import React, { FC } from 'react';
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
  name: string;
  id: string;
  price: string;
  category: string;
}

interface ProductListProps {
  text: string;
}

const ProductList: FC<ProductListProps> = ({ text }) => {
  const [rows, setRows] = React.useState<Rows[]>([]);

  React.useEffect(() => {
    axios.get('').then((r) => {
      setRows(r.data.response);
    });
  }, []);

  return (
    <div>
      <h4>{text}</h4>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">R$ {row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
