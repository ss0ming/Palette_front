//eslint-disable-next-line
import * as React from 'react';
import { Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import jsondata from "../api/mock.json";

function Search() {

    const data = jsondata;
    const s = data.projects;
    const [region, setRegion] = React.useState('');
    const [job, setJob] = React.useState('');
    const [detail, setDetail] = React.useState('');
    const [views, setViews] = React.useState('');
    const [search, setSearch] = React.useState('');
    const searching = (e) => {
        setSearch(e.target.value);
    };

    const handleChange1 = (event) => {
        setRegion(event.target.value);
    };
    const handleChange2 = (event) => {
        setJob(event.target.value);
    };
    const handleChange3 = (event) => {
        setDetail(event.target.value);
    };
    const handleChange4 = (event) => {
        setViews(event.target.value);
    };

    const result =
        s.filter((project) => {
            if (search === "") {
                return project;
            }
            else if (project.title.toLowerCase().includes(search.toLowerCase())) {
                return project;
            }
        })
            .map(project => (
                <Link to="/ProjectInformation">
                    <div key={project.projectId} style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <div style={{ width: 680, height: 150, left: 0, top: 0, position: 'relative', background: 'white', borderRadius: 20, border: '0.20px rgba(0, 0, 0, 0.50) solid' }} />
                        <div style={{ width: 100, height: 100, left: 25, top: 12, position: 'absolute' }}>
                            <img
                                className={styles.photo}
                                alt="img"
                                src={require(`../assets/${project.image}`)}
                            />
                        </div>
                        <div style={{ width: 470, height: 25, left: 150, top: 11, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{project.title}</div>
                        <div style={{ width: 470, height: 69, left: 150, top: 43, position: 'absolute', color: 'rgba(0, 0, 0, 0.50)', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{project.introduction}</div>
                        <div style={{ width: 20, height: 20, left: 25, top: 124, position: 'absolute', background: '#CCCCCC' }}></div>
                        <div style={{ width: 20, height: 20, left: 86, top: 124, position: 'absolute' }}>
                            <div style={{ width: 20, height: 20, left: 0, top: 0, position: 'absolute' }}>
                                <div style={{ width: 20, height: 20, left: 0, top: 0, position: 'absolute' }}></div>
                                <div style={{ width: 18, height: 13, left: 0, top: 0, position: 'absolute', background: '#CCCCCC' }}></div>
                            </div>
                        </div>
                        <div style={{ width: 180, height: 20, left: 150, top: 123, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>작성자 : {project.publisher}</div>
                        <div style={{ width: 250, height: 20, left: 430, top: 123, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>최근 업데이트 날짜 : {project.date}</div>
                    </div>
                </Link >
            ));

    return (
        <>
            <div>
                <input type='text' onChange={searching} />
                <Button className={styles.button} label="Searchbtn" variant="contained">검색</Button>
                <Button className={styles.button2} label="프로젝트 등록하기" variant="contained">프로젝트 등록하기</Button>
            </div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label" >지역</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={region}
                        label="지역"
                        onChange={handleChange1}>
                        <MenuItem value={'None'}></MenuItem>
                        <MenuItem value={`서울`}>서울</MenuItem>
                        <MenuItem value={`경기`}>경기</MenuItem>
                        <MenuItem value={`강원`}>강원</MenuItem>
                        <MenuItem value={`충북`}>충북</MenuItem>
                        <MenuItem value={`충남`}>충남</MenuItem>
                        <MenuItem value={`전북`}>전북</MenuItem>
                        <MenuItem value={`전남`}>전남</MenuItem>
                        <MenuItem value={`경북`}>경북</MenuItem>
                        <MenuItem value={`경남`}>경남</MenuItem>
                        <MenuItem value={`제주`}>제주</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">직무</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={job}
                        label="직무"
                        onChange={handleChange2}>
                        <MenuItem value={'None'}></MenuItem>
                        <MenuItem value={`프론트엔드`}>프론트엔드</MenuItem>
                        <MenuItem value={`백엔드`}>백엔드</MenuItem>
                        <MenuItem value={`디자인`}>디자인</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">세부 직무</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={detail}
                        label="세부 직무"
                        onChange={handleChange3}>
                        <MenuItem value={'None'}></MenuItem>
                        <MenuItem value={`디자인`}>디자인</MenuItem>
                        <MenuItem value={`디자인`}>디자인</MenuItem>
                        <MenuItem value={`디자인`}>디자인</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">조회수</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={views}
                        label="조회 수"
                        onChange={handleChange4}>
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{display: `flex` }}>{result}</div>
           
        </>
    );
}

export default Search;