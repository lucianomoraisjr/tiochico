import React from 'react';
import CountDown from './components/CountDown'
import './App.css';

const App = (props) => {

  const { Title, Subtitle, TimeData } = props;

  return (
    <div className="App">
      <GitHubIcon />

      <CountDown 
        Title = { Title } 
        Subtitle = { Subtitle } 
        TimeData = { TimeData }
      />
      
    </div>
  );
}

App.defaultProps = {
  Title: 'A Volta do Mestre ',
  Subtitle: "Contagem Regressiva",
  TimeData: [
    {className: 'day', timeType: 'Dias' },
    {className: 'hour', timeType: 'Horas' },
    {className: 'minute', timeType: 'Minutos' },
    {className: 'second', timeType: 'Segundos' }
  ]
}

function GitHubIcon(){
  return(

<h1></h1>
  )
}
export default App;
