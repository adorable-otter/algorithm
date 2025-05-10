function solution(m = 'C#D', musicinfos = ['12:00,12:03,SONG1,C#DC', '12:00,12:03,SONG2,C#D']) {
  const answer = musicinfos
    .map((info) => {
      const [startTime, endTime, name, sheet] = info.split(',');
      const noteCount = getNoteCount(startTime, endTime);
      const note = getNote(sheet, noteCount);

      let index = 0;
      while (index < note.length) {
        index = note.indexOf(m, index);
        if (index < 0) break;
        const next = index + m.length;
        if (index + m.length === note.length || (next < note.length && note[next] !== '#')) {
          return { name, noteCount };
        }
        index = next;
      }
      return null;
    })
    .filter((value) => !!value)
    .sort((a, b) => b.noteCount - a.noteCount);
  return answer.length > 0 ? answer[0].name : '(None)';
}

const getNote = (sheet, count) => {
  const note = [];
  let index = 0;

  while (count > 0) {
    note.push(sheet[index]);
    index++;
    if (index < sheet.length && sheet[index] === '#') {
      note.push(sheet[index]);
      index++;
    }
    if (index >= sheet.length) {
      index = 0;
    }
    count--;
  }
  return note.join('');
};

const getNoteCount = (start, end) => {
  const [h1, m1] = start.split(':').map(Number);
  const [h2, m2] = end.split(':').map(Number);

  const minutes1 = h1 * 60 + m1;
  const minutes2 = h2 * 60 + m2;

  return Math.abs(minutes1 - minutes2);
};

console.log(solution());
