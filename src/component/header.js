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

import './css/header.css'




export default function Header(props) {
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

        const handleChange = event => {
            setChoose(event.target.value)  
        }

        
    return (
        <div className="container">
            <Container fixed>
              <TextField id="search" label="Search Furniture" />
            </Container>
        

            <Container fixed >
                <FormControl className="form-container" >
                <InputLabel id="demo-mutiple-checkbox-label">Furtniture Style</InputLabel>
                    <Select 
                        id="demo-mutiple-checkbox"
                        placeholder="Furniture Style"
                        multiple
                        value ={choose}
                        input={<Input />}
                        onChange={handleChange}   
                        renderValue={selected => selected.join(', ')}
                        variant="outlined"
                        >
                        {optionSelect}
                    </Select>
                </FormControl>
            </Container>
        </div>
    )
}
