//Esse código é um componente em JavaScript escrito usando o framework React
//Em React, os componentes são reutilizáveis e podem ser importados para ser-
//em usados em outros componentes ou páginas.

import TutorialComp from './tutorial_comp.js';
//importa o componente "TutorialComp" do arquivo "tutorial_comp.js", que está no mesmo diretório

export default async function Page({params}) {

    return(<TutorialComp />)

};