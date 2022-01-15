'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = ' UaaaU Correct !! 😉')
// );
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.guess').value);
// console.log((document.querySelector('.guess').value = 29));

let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
console.log((document.querySelector('.number').textContent = number));
document.querySelector('.check').addEventListener('click', function () {
  const guest = Number(document.querySelector('.guess').value);
  console.log(guest, typeof guest);

  //When no number
  if (!guest) {
    console.log(
      (document.querySelector('.message').textContent = 'No number!!')
    );

    //when number is correct
  } else if (guest == number) {
    console.log(
      (document.querySelector('.message').textContent =
        'UaaaU ! Correct Number!😨😨')
    );
    console.log((document.querySelector('.number').textContent = number));
    document.querySelector('body').style.backgroundColor = '#48e5c2';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.background = '#B30362';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when number is not correct
  else if (guest !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guest > number ? 'high ! Guess again !😂😂' : 'low ! Guess again !😅😅'; //turnery operator
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent =
        ' You Lose! Buahahaha!😈';
    }
  }
});

//when number is high
// } else if (guest > number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'high ! Guess again !😂😂';
//     score--;
//     console.log((document.querySelector('.score').textContent = score));
//   } else {
//     document.querySelector('.message').textContent =
//       ' You Lose! Buahahaha!😈';
//   }

//   //when numnber is low
// } else if (guest < number) {
//   // document.querySelector('.message').textContent = 'low ! Guess again !😅😅';
//   // score--;
//   // console.log((document.querySelector('.score').textContent = score));
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'low ! Guess again !😅😅';
//     score--;
//     console.log((document.querySelector('.score').textContent = score));
//   } else {
//     document.querySelector('.message').textContent =
//       ' You Lose! Buahahaha!😈';
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  let again = Number((document.querySelector('.guess').value = ''));
  //document.querySelector('score').reset();
  let rScore = (document.querySelector('.score').textContent = score);
  //console.log(document.querySelector('right').);
  let rNumber = (document.querySelector('.number').textContent = number);
  console.log(
    (document.querySelector('.message').textContent = 'Start guessing...')
  );
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.background = '#49e02b';
});
