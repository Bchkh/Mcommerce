import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Paiement = () => {

    const { idCommande} = useParams();
    
    const [numeroCarte, setnumeroCarte] = useState(null);

    const [data, setData] = useState();
    const [dt, setDt] = useState();
    
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // eslint-disable-next-line no-template-curly-in-string
            const response = await axios.get(`http://localhost:5010/api/commandes/${idCommande}`);
            
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
          'montant':data.quantite * dt.prix,
        })
        .then((response) => {
          // Redirection vers la page de paiement
          document.write("Paiement Accépté")
        })
        .catch((error) => {
          console.error('Erreur lors de la paiement:', error);
        });
        
        
      };
      const id = data.idProduit;
      useEffect(()=>{
        const produitData= async ()=>{
          try{
            const res = axios.get(`http://localhost:5000/api/produits/${id}`)
         setDt(res.data);
          }
          catch(error){
            console.error(error);
          }
         }
         produitData();
      },[id]);
      

      
      return(
        <div>
        <div className='item'>
          <p className='p'>vous avez commander {data.quantite} du {dt.titre}</p>
          <p className='p'> du Prix: {data.quantite * dt.prix} DH</p>
          <form onSubmit={handleOrderSubmit} className='form'>
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