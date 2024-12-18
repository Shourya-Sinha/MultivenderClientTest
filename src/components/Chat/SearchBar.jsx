import { InputAdornment, TextField } from '@mui/material';
import { MagnifyingGlass } from 'phosphor-react';
import React from 'react'

const SearchBar = () => {
  return (
    <TextField
    fullWidth
    placeholder="Search"
    variant="outlined"
    InputProps={{
      sx: {
        backgroundColor: "white",
        borderRadius: "25px",
        padding: "0 6px",
        height:'44px'
      },
      endAdornment: (
        <InputAdornment position="end">
          <div
            style={{
              backgroundColor: "black",
              borderRadius: "20px",
              padding: "4px 15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MagnifyingGlass style={{ color: "white",fontSize:25 }} />
          </div>
        </InputAdornment>
      ),
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px",
      },
    }}
  />
  )
}

export default SearchBar;