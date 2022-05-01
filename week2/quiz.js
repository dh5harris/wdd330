const quiz = [
  ["What is the real name of Superman", "Clark Kent"],
  ["What is the real name of Wonderwoman?", "Diana Prince"],
  ["What is the real name of Batman?", "Bruce Wayne"]
];

function heroQuiz(quiz) {
  let score = 0;
  for (let [question, answer] of quiz){ 
    const response = ask(question);
    check(response, answer);
  } 
  gameOver();

  function ask(question) {
    return prompt(question);
  }

  function check(response, answer) {
    if (response === answer) {
      alert('Correct!');
      score++;
    } else {
      alert(`That is wrong. The answer was ${answer}`);
      // score--;
    }
  }

  function gameOver() {
    alert(`Game over, you scored ${score} point${score !== 1 ? 's':''}`);
  }
}
 

