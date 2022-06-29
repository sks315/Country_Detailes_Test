import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {fectSingleCountryWithCode} from '../services/ServicesFile'
import '../App.css';

function SingleCountryCode(props) {
    const navigate = useNavigate();
    // console.log(props)
    const location = useLocation();
    console.log(location.state.code);
    const code = location.state.code;
    const [res, setCountryDataCode] = useState([]);
    const [isLoading, setIsLOading] = useState(true);
   
    const context = {
        router: () => true, // replace with PropTypes.object if you use them
      }

    useEffect(()=>{
        singleCountryFn();
    },[])


    const singleCountryFn = async() =>{
        const res = await fectSingleCountryWithCode(code);
        const finREs = await res.data;
        console.log(finREs)
        setCountryDataCode(finREs);
        if(res.status === 200){
                setIsLOading(false)
            }
    }



  return (
    <>
    <br></br><br></br>
     <Container style={{minHeight : '100vh', maxHeight : 'auto'}}>
     {isLoading? "Loading......" : ( <>
     <Button variant="outline-secondary" style={{width : '100px'}} onClick={() => navigate(-1)}>Go back</Button><br></br><br></br>
     <Row>
     
        <Col lg={6} md ={12} sm={12} >
            <Card className='center' md="auto">
            <Card.Img variant="top"   src={res.flags.svg} />
            </Card>
        </Col>
        <Col lg={6} md ={12} sm={12} >
            <h1>{res.name}</h1><br></br>
            <Row>
                <Col lg={6} md ={12} sm={12}>
                    <p><b>Native Name : </b> {res.nativeName} </p> 

                    
                    <p><b>Population : </b>{res.population}</p>
                    <p><b>Region : </b>{res.region}</p>
                    <p><b>Sub Region : </b>{res.subregion}</p>
                    <p><b>Capital : </b>{res.capital}</p>
                </Col>
                <Col lg={6} md ={12} sm={12}>
                <p><b>Top Level Domain : </b>{res.topLevelDomain[0]}</p>
                <p><b>Currencies : </b>{res.currencies[0].code}</p>
                <p><b>Languages : </b>{res.languages[0].name}</p> 
                </Col>
                <b>Border Coutries</b>
                {res.borders?.map((bor)=> <Button  variant="outline-secondary" style={{width : '100px', backgroundColor : "none"}}>{bor}</Button>)}
            </Row>
        </Col>
      </Row></>
     
     )}
      
    </Container>
    </>
  )
}

export default SingleCountryCode
