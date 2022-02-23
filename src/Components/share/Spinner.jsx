import spinnerImg from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinnerImg}
      alt='Loading'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
