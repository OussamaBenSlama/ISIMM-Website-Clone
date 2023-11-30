import React from 'react'
import '../styles/about.css';  



export default function About() {
  return (
    <div className="about">
      <div className="content">
        <h2>About ISIMM</h2>
        <p>
        L'Institut Supérieur d'Informatique et de Mathématiques de l’Université de Monastir (ISIMM)
               

               est créé par le décret n° 1623 du 09 juillet 2002, est un établissement d’enseignement supérieur scientifique, public, placé sous la tutelle du Ministère de l'Enseignement Supérieur de la Recherche Scientifique.
           
           Dans un premier temps ses formations ont été axées sur les métiers de l'Informatique et de ses applications, des Mathématiques et ses applications (Modélisation, Statistique).
           
           Au fil du temps il s’est vu autorisé à diversifier ses formations pour arriver à en dispenser toute une panoplie de formations allant de la licence aux Mastères de recherche et professionnel en passant par une formation d’ingénieurs en électronique.
           
           Avec bien sure la multiplication des spécialités offertes.
           
                           En règle générale nos formations s’articulent autour de trois départements et d’une architecture LMD. Elles ont été enrichies ces dernières années par une formation spécifique du diplôme d’ingénieur en électronique.        
        </p>
        <button className="more-info-button">More Information</button>
      </div>
    </div>
  )
}
