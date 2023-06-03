import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ShoppingList from './ShoppingList';
import Produit from './Produit';
import Paiement from './Paiement'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingList/>} />
        <Route path="/:id" element={<Produit/>} />
        <Route path="/paiement/:idCommande" element={<Paiement/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;