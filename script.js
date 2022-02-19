const dice = document.getElementById('dice');
const adviceEle = document.getElementById('advice');
const adviceId = document.getElementById('advice-id');

const API_URL = 'https://api.adviceslip.com/advice';

dice.addEventListener('click', getAdvice);

async function getAdvice() {
  dice.classList.add('spin');
  const fetchedAdvice = await fetchAdvice();
  setAdvice(fetchedAdvice);
  dice.classList.remove('spin');
}

async function fetchAdvice() {
  try {
    const {
      slip: { id, advice },
    } = await (await fetch(API_URL)).json();
    return { id, advice };
  } catch (err) {
    alert('Something went wrong!');
    console.log(err);
  }
}

function setAdvice({ id, advice }) {
  adviceId.innerText = id;
  adviceEle.innerText = advice;
}
