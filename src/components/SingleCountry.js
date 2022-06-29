import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {fectSingleCountry} from '../services/ServicesFile';
import '../App.css';

function SingleCountry(props) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.name);
    const contryName = location.state.name;
    const [countryData, setCountryData] = useState([]);
    const [isLoading, setIsLOading] = useState(true);
   
    const context = {
        router: () => true, // replace with PropTypes.object if you use them
      }

    useEffect(()=>{
        singleCountryFn();
    },[])



    const singleCountryFn = async() =>{
        fectSingleCountry(contryName).then((res)=>{
          setCountryData(res.data);
          if(res.status === 200){
            setIsLOading(false)
        }
        })         
    }

    const singleCountryCodeFn = (code) =>{
      console.log(code)
      navigate('/singlecode', {state:{code: code}})
      
    }

  return (
    <>
    <br></br><br></br>
     <Container style={{minHeight : '100vh', maxHeight : 'auto'}}>
     {isLoading? "Loading......" : (countryData.map((res)=> <>
     <Button variant="outline-secondary" style={{width : '100px'}} onClick={() => navigate(-1)}>Go back</Button><br></br><br></br>
     <Row>
     
        <Col lg={6} md ={12} sm={12} >
            <Card className='center' md="auto">
            <Card.Img variant="top"   src={res.flags.svg} />
            </Card>
        </Col>
        <Col lg={6} md ={12} sm={12} >
            <h1>{res.name.common}</h1><br></br>
            <Row>
                <Col lg={6} md ={12} sm={12}>
                    <p><b>Native Name : </b>
                          {res.name?.nativeName.mkd? (res.name.nativeName.mkd.common) : 
                            res.name.nativeName.eng? (res.name.nativeName.eng.common) :
                            res.name.nativeName.ell? (res.name.nativeName.ell.common):
                            res.name.nativeName.spa?(res.name.nativeName.spa.common): 
                            (res.name.nativeName.mya?.common)   }</p>

                    
                    <p><b>Population : </b>{res.population}</p>
                    <p><b>Region : </b>{res.region}</p>
                    <p><b>Sub Region : </b>{res.subregion}</p>
                    <p><b>Capital : </b>{res.capital?.[0]}</p>
                </Col>
                <Col lg={6} md ={12} sm={12}>
                <p><b>Top Level Domain : </b>{res.tld[0]}</p>
                <p><b>Currencies : </b>{(Object.keys(res.currencies))}</p>
                <p><b>Languages : </b>{Object.values(res.languages)}</p>
                </Col>
                <b>Border Coutries</b>
                {res.borders?.map((bor)=> <Button  variant="outline-secondary"
                       style={{width : '100px', backgroundColor : "none"}}
                       onClick = {()=>singleCountryCodeFn(bor)}
                       >{bor}</Button>)}
            </Row>
        </Col>
      </Row></>
     
     ))}
      
    </Container>
    </>
  )
}

export default SingleCountry
