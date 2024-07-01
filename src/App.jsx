import './App.css';
import { useEffect } from 'react';

function App() {
  const OpenDiv = () => {
    const openDivElement = document.querySelector('.OpenDiv');
    const changeButtonElement = document.querySelector('.change');

    if (openDivElement.style.display === 'none' && changeButtonElement.innerHTML === 'Show My Cards') {
      openDivElement.style.display = 'flex';
      changeButtonElement.innerHTML = 'Close Cards';
    } else {
      openDivElement.style.display = 'none';
      changeButtonElement.innerHTML = 'Show My Cards';
    }
  };

  const OpenCreator = () => {
    document.querySelector('.Hide').style.display = 'flex';
  };

  const createCard = () => {
    const image = document.querySelector('.i1').value;
    const title = document.querySelector('.i2').value;
    const description = document.querySelector('.i3').value;

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `
      <img src="${image}" alt=""/>
      <h1>${title}</h1>
      <p>${description}</p>
      <button class='delete'>Delete</button>
      <button class='edit'>Edit</button>
    `;

    cardDiv.querySelector('.delete').addEventListener('click', () => {
      cardDiv.remove();
    });

    cardDiv.querySelector('.edit').addEventListener('click', () => {
      document.querySelector('.i1').value = image;
      document.querySelector('.i2').value = title;
      document.querySelector('.i3').value = description;
      document.querySelector('.Hide').style.display = 'flex';
      cardDiv.remove();
    });

    document.querySelector('.OpenDiv').appendChild(cardDiv);

    document.querySelector('.i1').value = '';
    document.querySelector('.i2').value = '';
    document.querySelector('.i3').value = '';
    document.querySelector('.Hide').style.display = 'none';
    document.querySelector('.change').innerHTML = 'Show My Cards';
    alert('New Card Created');
  };

  useEffect(() => {
    const createButton = document.querySelector('.create');
    createButton.addEventListener('click', createCard);

    return () => {
      createButton.removeEventListener('click', createCard);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="btns">
          <button className='btn' onClick={OpenCreator}>
            + Add card
          </button>
          <button className='change' onClick={OpenDiv}>
            Show My Cards
          </button>
        </div>
        <div className='Hide' style={{ display: 'none' }}>
          <input className='i1' type="text" placeholder='Enter card image...' />
          <input className='i2' type="text" placeholder='Enter card title...' />
          <input className='i3' type="text" placeholder='Enter card description...' />
          <button className='create'>Create</button>
        </div>
        <div className="OpenDiv" style={{ display: 'none' }}></div>
      </div>
    </>
  );
}

export default App;
