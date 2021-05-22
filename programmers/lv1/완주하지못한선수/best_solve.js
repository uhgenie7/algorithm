var solution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );

var solution = (participant, completion) => {
  completion.map((name) => (completion[name] = (completion[name] | 0) + 1));
  return participant.find((name) => !completion[name]--);
};
