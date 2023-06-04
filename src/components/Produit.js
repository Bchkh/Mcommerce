// ProductDetail.js
import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Produit = () => {


  const { id } = useParams();

  

    const [data, setData] = useState(null);
    const [orderQuantity, setOrderQuantity] = useState(1);

    useEffect(() => {
      const fetchData = async () => {
        try {
          
          const response = await axios.get(`http://localhost:5000/api/produits/${id}`); 
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [id]);

    const handleOrderQuantityChange = (event) => {
      setOrderQuantity(parseInt(event.target.value));
    };
  
    const handleOrderSubmit = (event) => {
      event.preventDefault();

      
      axios.post('http://localhost:5010/api/commandes', {
        'quantite':orderQuantity,
        'idProduit': id,
        'commandePayee':false,
      })
      .then((response) => {
        
        window.location.href = `/paiement/${response.data.id}`;
      })
      .catch((error) => {
        console.error('Erreur lors de la création de la commande:', error);
      });
      
      
    };
    

  if (!data) {
    return <div>Product not found</div>;
  }

  

  return (
    <div>
     
          <div key={data._id} className='item'>
          <img src={data.img} alt='img' className='img1'/>
          <p className='p'>{data.titre}</p>
          <p className='p'>{data.description}</p>
          <p className='p'>Prix: {data.prix} DH</p>
          <form onSubmit={handleOrderSubmit} className='form'>
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={orderQuantity}
            onChange={handleOrderQuantityChange}
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
          
          </div>

            
    </div>
  );
};

export default Produit;
