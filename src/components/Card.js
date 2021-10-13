import './card.css'


export function Card(props){
    let theme = '';

    if(props.theme == 'dark'){
      theme="dark-card";
    }else if(props.theme == 'light'){
      theme="light-card";
    }

    
    return <div className={theme}>
      <h1>{props.title}</h1>
      <CardParagraph para={props.paragraph} />
    </div>
  }

  function CardParagraph(props){
    return <div>
      <p>{props.para}</p>
    </div>
  }

 
