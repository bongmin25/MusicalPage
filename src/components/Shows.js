import './Shows.css';
import Show from './Show';

function Shows () {
    const shows = [
        {
            id: 1,
            evento: 'Show N°1',
            ciudad: 'Buenos Aires, Argentina',
            fecha:  '03/01/2024',
        },
        {
            id: 2,
            evento: 'Show N°2',
            ciudad: 'Bariloche, Argentina',
            fecha: '06/01/2024',
        },
        {
            id: 3,
            evento: 'Show N°3',
            ciudad: 'Corrientes, Argentina',
            fecha: '10/01/2024',
        },
    ];
return (
    <div className="container">
        <h1>Show List</h1>
        <div className='item' key={shows.id}>
        {shows.map((show) => (
            <Show showData={show}/>  
))}   </div>
    </div>
    );
};

export default Shows;