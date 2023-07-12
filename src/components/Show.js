function Show(props) {

    const { evento, ciudad, fecha } = props.showData;
  return (
    <div>
        <div>
          <h2>Evento: {evento}</h2>
          <h1>Ciudad: {ciudad}</h1>
          <h1>Fecha: {fecha}</h1>
          <button className="button">Tickets</button>
        </div>
      
    </div>
  );
}

export default Show;

