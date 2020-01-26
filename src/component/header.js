import React, { useState, useEffect } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';    
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    container : {
        background: 'blue',
        paddingRight: '40px',
        paddingBottom: '10px',
    },
    formControl:{
        width:'calc(90vw - 850px)',
        marginTop:'25px',
        
    },

    search:{
        color:'white',
    },
    filter:{
        background:'white'
    },

    label:{
        color:'black',
        zIndex:'10',
    },
    
    outlined :{
        color:'white',
    }
})




export default function Header({filterData}) {
    const classes = useStyles()
    const [deliv, setDelivery] = useState()
    const [data, setData] = useState([]);
    const [choose, setChoose] = useState([])

    useEffect(() => {
        fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
        .then(res =>{
            return res.json()
        })
        .then(response =>{
            setData(response.furniture_styles)
        })
        }, [])


        const optionSelect = data.map(item =>{
            return(
                <MenuItem key={item} value={item}>
                <ListItemText primary={item} />
                    <Checkbox value="uncontrolled" checked={choose.indexOf(item) > -1} />
        
                </MenuItem>
            )
        })


        const deliveryChange = event => {
            setDelivery(event.target.value)
        }
        console.log(deliv)
        const handleChange = event => {
            setChoose(event.target.value)
        }
        filterData(choose)

    return (
    <div className={classes.container}>
        <Container fixed>
              <TextField className={classes.search}          
                label="Search Furniture" />
        </Container>
            <Container fixed >
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                 <FormControl  className={classes.formControl}>
                     <InputLabel className={classes.label}>
                     Furtniture Style
                    </InputLabel>
                        <Select 
                            id="demo-mutiple-checkbox"
                            placeholder="Furniture Style"
                            native
                            value ={choose}
                            input={<Input />}
                            onChange={handleChange}   
                            renderValue={selected => selected.join(', ')}
                            className={classes.filter}
                            >
                            {optionSelect}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                 <FormControl  className={classes.formControl}>
                     <InputLabel className={classes.label}>
                     Delivery Time
                    </InputLabel>
                        <Select 
                            id="demo-mutiple-checkbox"
                            placeholder="Furniture Style"
                            multiple
                            value ={choose}
                            input={<Input />}
                            onChange={deliveryChange}   
                            className={classes.filter}
                            >
                                <option value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}
