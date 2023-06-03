import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Paiement = () => {

    const { idCommande } = useParams();
    
    const [numeroCarte, setnumeroCarte] = useState(null);

    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // eslint-disable-next-line no-template-curly-in-string
            const response = await axios.get(`http://localhost:5010/api/commandes/${idCommande}`); // Replace with your backend endpoint URL
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [idCommande]);
      

      const handleOrderQuantityChange = (event) => {
        setnumeroCarte(parseInt(event.target.value));
      };  
      const handleOrderSubmit = (event) => {
        event.preventDefault();
  
        // Envoyer les données de commande à votre backend
        axios.post('http://localhost:5001/api/paiements', {
          'numeroCarte':numeroCarte,
          'idCommande': idCommande,
          'montant':240,
        })
        .then((response) => {
          // Redirection vers la page de paiement
          document.write("Paiement Accépté")
        })
        .catch((error) => {
          console.error('Erreur lors de la paiement:', error);
        });
        
        
      };
      
      return(
        <div>
        <div key={data._id} className='item'>
          <p className='p'>vous avez commander {data.quantite}  du </p>
          <p className='p'> du Prix:  DH</p>
          <form onSubmit={handleOrderSubmit}>
        <label>
          Numero de Carte:
          <input
            type="number"
            min=""
            value={numeroCarte}
            onChange={handleOrderQuantityChange}
          />
        </label>
        <button type="submit">Payer</button>
      </form>
          
          </div>


        </div>
      );
}
    
export default Paiement;