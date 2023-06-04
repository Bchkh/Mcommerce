import React , {useState, useEffect} from 'react';
import{ ListGroup, ListGroupItem} from 'reactstrap' ; 
import axios from "axios";

import { Link } from 'react-router-dom';



const ShoppingList =()=> {
 

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/produits'); 
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className='items'>
      {data.map((item) => (
        <ListGroup className='items' >
          <ListGroupItem key={item._id} className='item'>
          <img src={item.img} alt='img' className='img'/>
          <Link to={`/${item._id}`}><p className='p'>{item.titre}</p></Link>
          </ListGroupItem>
          
        </ListGroup>
        
      ))}
    </div>
  );





};

export default ShoppingList ;