import React from 'react';

const Bibliotheque = () => {
  const containerStyle = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    lineHeight: 2.5,
  };


  const linkStyle = {
    color: '#003366',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <ol>
        <li>Accéder au portail de BIRUNI et précisément à l’adresse suivante : <a href="http://www.bu.turen.tn/accueil.php" target="_blank" rel="noopener noreferrer" style={linkStyle}>http://www.bu.turen.tn/accueil.php</a></li>
        <li>Cliquer sur espace lecteurs</li>
        <li>Sélectionner la bibliothèque «institut superieur d'informatique et des mathématiques de monastir » dans la liste des institutions universitaires indiquées.</li>
        <li>Vérifier si un compte existe avec votre numéro de la carte d'identité en cliquant sur le lien "<a href="#" style={linkStyle}>Vérifier mon inscription</a>"</li>
        <li>
          Au cas où il n'existe aucun compte associé au numéro de la carte d'identité indiqué:
          <ul>
            <li>Cliquer sur le lien "<a href="#" style={linkStyle}>M'inscrire à la bibliothèque</a>"</li>
            <li>Remplir les différents champs de la grille qui apparaissent</li>
            <li>Cliquer sur envoyer pour confirmer l’inscription.</li>
            <li>L’activation et la validation finale du compte seront réalisées par le personnel de la bibliothèque après vérification des données saisies.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Bibliotheque;
