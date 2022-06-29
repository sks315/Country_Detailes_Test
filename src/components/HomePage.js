import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Navbar, Nav, Form} from 'react-bootstrap'
import FlagCard from './FlagCard'
import {getAll, searchCountry, fectRegionCountry, fectSingleCountry} from '../services/ServicesFile'

function HomePage() {

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLOading] = useState(true);
    const [searchInput, setsearchInput] = useState();
    const [searchData, setsearchData] = useState([]);
    const [isSearching, setIsSeraching] = useState(false);
    const [regsionInput, setRegionInput] = useState();
    const [isRegionSearch, setIsRegsionSearch] = useState();
    const [regionSearchData, setRegionSearchData] = useState();

    useEffect(()=>{
        fectData();
    },[])

    useEffect(()=>{
        searchDataFn();
    },[searchInput])

      useEffect(()=>{
        regionSerachFn();
    },[regsionInput])


    const fectData = () =>{
        getAll().then((res)=>{
          console.log(res.data)
          setAllData(res.data);
          if(res.status === 200){
            setIsLOading(false)
           }
        }) 
    }

    const searchDataFn = async()=>{    
        searchCountry(searchInput).then((res)=>{
          console.log(res.data)
          setsearchData(res.data);
          if(res.status == 200){
            setIsSeraching(true)
        }
        }) 
    }

    const regionSerachFn = async()=>{  
      fectRegionCountry(regsionInput).then((res)=>{
        console.log(res.data)
        setRegionSearchData(res.data);
        if(res.status == 200){
          setIsRegsionSearch(true)
      }
      }) 
  }
    

  return (
    <div>
        <Container style={{minHeight : '100vh', maxHeight : 'auto'}}>
        <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand sm ={12}>
        <Form.Control
              type="search"
              placeholder="Search"              
              value={searchInput}
              onChange = {(e)=>setsearchInput(e.target.value)}
            />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" sm ={12}>
          <Navbar.Text>
          <Form.Select aria-label="Default select example" value={regsionInput} onChange ={(e)=>setRegionInput(e.target.value)}>
              <option>Selecte Regions</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceans">Oceans</option>
        </Form.Select>
      
          </Navbar.Text>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>

    <Container fluid>
    
      {isLoading? "Loading...." : isSearching? 
      (<Row xs={1} md={3} className="g-4">
      {searchData.map((res)=> <FlagCard data = {res} />)}      
       </Row>) : isRegionSearch? (<Row xs={1} md={3} className="g-4">
      {regionSearchData.map((res)=> <FlagCard data = {res} />)}      
       </Row>) : (<Row xs={1} md={3} className="g-4">
      {allData.map((res)=> <FlagCard data = {res} />)}      
       </Row>)}
               
    </Container>
      
    </Container>
    </div>
  )
}

export default HomePage
