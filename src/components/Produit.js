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
          // eslint-disable-next-line no-template-curly-in-string
          const response = await axios.get(`http://localhost:5000/api/produits/${id}`); // Replace with your backend endpoint URL
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

      // Envoyer les données de commande à votre backend
      axios.post('http://localhost:5010/api/commandes', {
        'quantite':orderQuantity,
        'idProduit': id,
        'commandePayee':false,
      })
      .then((response) => {
        // Redirection vers la page de paiement
        window.location.href = `/paiement/647b26f1a7a2e90b72de7ee9`;
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
          <form onSubmit={handleOrderSubmit}>
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
