import { Card } from './components/Card'

function App() {

  const cardsData = [
    { title: 'Título 1', description: 'Description blablabla', assignedTo: 'pepito', startDate: '10/02/2004', endDate: '11/09/2024' },
    { title: 'Título 2', description: 'Description blablabla2', assignedTo: 'pepito2', startDate: '10/02/2005', endDate: '11/09/2024' },
    { title: 'Título 3', description: 'Description blablabla3', assignedTo: 'pepito3', startDate: '10/02/2006', endDate: '11/09/2024' }
  ]

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} assignedTo={card.assignedTo} startDate={card.startDate} endDate={card.endDate} />
      ))}
    </div>
  )
}

export default App
