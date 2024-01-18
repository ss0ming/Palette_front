//eslint-disable-next-line
import * as React from 'react';
import { TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import styles from "./Search.module.css";

function Search() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <><div>
            <TextField className={styles.std} label="Search" variant="standard"></TextField>
            <Button className={styles.button} label="Searchbtn" variant="contained">검색</Button>
            <Button className={styles.button2} label="프로젝트 등록하기" variant="contained">프로젝트 등록하기</Button>
        </div>
        <div>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-label" >지역</InputLabel>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">직무</InputLabel>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">세부 직무</InputLabel>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">조회수</InputLabel>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div></>
    );
}

export default Search;