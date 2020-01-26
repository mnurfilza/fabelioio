import React, { useState, useEffect } from 'react'
import Header from './header.js';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
     
    },
    card: {
        minWidth: 300,
        padding:"15px",
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 20,
        width:"100%",
        fontWeight:"bold",
      },
      pos: {
        marginBottom: 12,
      },
  }));

export default function Body() {
    const [spacing, setSpacing] = React.useState(2);
    const [data , setData] = useState([])
    const classes = useStyles();
    useEffect(() => {
        fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
        .then(res =>{
            return res.json()
        })
        .then(response =>{
            setData(response.products)
        })
        }, [])


    const filterData = (newValue) => {
        console.log(newValue)
    }

    const product = data.map((item,index)=>{
        return (
            <div key={index}>
                <Container fixed>
                    <Grid container spacing={2}>    
                            <Grid item xs={3} sm={3}>
                                <Container maxWidth="sm">
                                    <Card className={classes.card}>
                                        <CardContent>
                                        <Grid container justify="center" spacing={2}>
                                            <Grid item xs={6} sm={6}>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom variant="h1" component="h2">
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Typography component="h5">
                                                    {"Rp"+ item.price}
                                                </Typography>
                                            </Grid>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    {item.description.substr(0,114)}
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    
                                                </Typography>
                                        </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Container>
                            </Grid>
                        
                    </Grid>
                </Container>
            </div>
        )
    })



    return (
        <div>
            <Header filterData={filterData}/>
            <div>
            
            </div>
            {product}
        </div>
    )
}
