import React, { useEffect, useState } from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

function FlagCard(props) {

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const navigate = useNavigate();
    const [getRegion, setGetRegion] = useState([]);
    var listItems;

    // console.log(props)
    useEffect(()=>{
        storeData();
    },[])

    const storeData = ()=>{
        //setGetRegion(props.data.capital[0])
        //const listItems = props.data.capital.map((d) => <li key={d}>{d}</li>);
    }

    const singleCountryFn = (name) =>{
      console.log("click");
      // <navi to='\single' />
     // const contName = props.data.name.common
      console.log(name)
      navigate('/single', {state:{name: name}})
      
    }

    
     
     const well = {
        boxShadow: '0.5px 0.5px 0.5px #9E9E9E',
      }
 
  return (
    <div>
     

    <Col style={well}>
          <Card onClick={()=>singleCountryFn(props.data.name.common) } style={{backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Card.Img variant="top" src={props.data.flags.svg} />
            <Card.Body>
              <Card.Title>{props.data.name.common}</Card.Title><br></br>
              <Card.Text>
                <p><b>Population : </b>{props.data.population}</p>
                <p><b>Region : </b>{props.data.region}</p>
                {/* <p><b>Population : </b>{getRegion.map(res => <span>res</span>)}</p> */}
                <p>{getRegion}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </div>
  )
}

export default FlagCard
