import './App.css';
import axios from "axios";
import React, { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import {AiFillInstagram} from 'react-icons/ai'

import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function App() {  
  const[data,setData]=useState([]);
  const[search,setSearch]=useState('');
  const[query,setQuery]=useState('programmer')
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=ffaLrlTReMWM5VSD8LmA7DLrtsaKLfeoDMhVqqhBU2k`);

  setData(response.data.results)
    };
    getData();
  },[query]);
  const searchdata=(e)=>{
setSearch(e.target.value);
  }

  const submit=(e)=>{
e.preventDefault();
setQuery(search);
  }

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick=()=>{

    }
  return <div> 
<span style={{marginTop:'-7em',position:'absolute'}}>

<a  href='https://www.instagram.com/neerajrajpratapsingh/'><AiFillInstagram className='insta'/></a>
<a  href='https://github.com/neeraj965'><AiFillGithub className='git'/></a>
</span>

<div>
<Grid container  style={{margin:"6em 4.5em"}}>
{
data.map((value,index)=>{
  <Grid item xs={3}/>
return(

<div key={index} >


  <Card sx={{ maxWidth: 345 }}>

  <CardHeader
   
    
   
  />
  <CardMedia
    component="img"
    height="194"
    image={value.urls.thumb}
    alt="Paella dish"
  /> 
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
  
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Method:</Typography>
     
      
    </CardContent>
  </Collapse>
</Card>
</div>
)
})
}

</Grid>

</div>



  <Paper style={{display:'flex',p: '2px 4px', width: 400,padding:'10px',justifyContent:'center',position:'absolute',marginTop:'-84em',marginLeft:'35em '}}
  onSubmit={submit}
      component="form"
      // sx={{  }}
    >
    
      <InputBase
      type='text' onChange={searchdata} value={search}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
 
    </Paper>
 
 
  </div>;
}
