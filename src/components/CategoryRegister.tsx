import { Card, CardContent, Button, TextField } from '@mui/material';
import React, { FC } from 'react';
import axios from 'axios';

interface CategoryRegisterProps {
  text: string;
}

const CategoryRegister: FC<CategoryRegisterProps> = ({ text }) => {
  const [name, setName] = React.useState('');

  function registerProduct() {
    axios
      .post('', {
        name: name,
      })
      .then((r) => {
        alert('Categoria foi cadastrada!');
      });
  }

  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: '16px' }}>{text}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '60%', marginTop: '14px' }}>
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              fullWidth
              id="outlined-basic"
              label="Nome"
              variant="outlined"
            />
          </div>
          <div
            style={{
              width: '60%',
              display: 'flex',
              marginTop: '14px',
              justifyContent: 'right',
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                registerProduct();
              }}
            >
              Salvar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryRegister;
