import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'


const rows = [
  {
      name:"Frozen",
      poster:"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_FMjpg_UY2048_.jpg",
      director:"Jennifer Lee",
      category:"Animation, Family, Adventure, Fantasy",
      relyr:"2013"
    

  },

  {
    name:"Ford v Ferrari",
    poster:"https://image.tmdb.org/t/p/original/lX6tGUoceY7Z6jGEoTuTwFwQ5r9.jpg",
    director:"James Mangold",
    category:"Drama, Action, History",
    relyr:"2019"
  

},

{
  name:"Tangled",
  poster:"https://image.tmdb.org/t/p/original/ynSfyLpOIOWVKXqMTphXQrix1Fx.jpg",
  director:"Nathan Greno",
  category:"Animation, Family",
  relyr:"2010"
},

{
  name:"Gran Turismo",
  poster:"https://image.tmdb.org/t/p/original/b47syIl3wreScfUSrCKb0D2d1Gg.jpg",
  director:"Neill Blomkamp",
  category:"Adventure, Action, Drama",
  relyr:"2023"
},

{
  name:"Frozen II",
  poster:"https://image.tmdb.org/t/p/original/qXsndsv3WOoxszmdlvTWeY688eK.jpg",
  director:"Jennifer Lee",
  category:"Family, Animation, Adventure, Comedy, Fantasy",
  relyr:"2019"
}

];

const View = () => {
return (
  <>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Name</TableCell>
              <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Poster</TableCell>
              <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Release Year</TableCell>
              <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Category</TableCell>
              <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Director</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
              {row.name}
            </TableCell>
            <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}><img src={row.poster} alt={`${row.name} poster`} style={{ maxWidth: '100px' }} /></TableCell>
            <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.relyr}</TableCell>
            <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.category}</TableCell>
            <TableCell align="right" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.director}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
)
}



export default View