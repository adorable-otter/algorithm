function solution(
  cards1 = ['i', 'water', 'drink'],
  cards2 = ['want', 'to'],
  goal = ['i', 'want', 'to', 'drink', 'water']
) {
  const deck1 = cards1.reverse();
  const deck2 = cards2.reverse();

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === deck1.at(-1)) {
      deck1.pop();
    } else if (goal[i] === deck2.at(-1)) {
      deck2.pop();
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
