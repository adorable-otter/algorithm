function solution(scoville, K) {
  let answer = 0;
  const heap = [];

  /**
   * 루트와 마지막 값을 교환한 후,배열의 마지막 요소(원래 루트)를 제거한다.
   * 새로 루트에 올라온 값을 왼쪽과 오른쪽 자식과 비교해 그 중 더 작은 자식과 자리를 바꾼다.
   * 자신이 자식보다 작거나 더 이상 자식이 없을 때까지 반복한다.
   */
  const push = (number) => {
    heap.push(number);
    let i = heap.length - 1;
    const elem = heap[i];
    /**
     * 부모 노드의 위치를 찾고 비교 후 필요하면 위치를 바꿈
     * 부모 노드가 루트가 되거나 대상의 값이 부모보다 클 때까지 반복
     *  */

    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      const parent = heap[parentIdx];
      if (elem >= parent) break;
      heap[i] = parent;
      i = parentIdx;
    }
    heap[i] = elem;
  };

  const pop = () => {
    const root = heap[0];
    const end = heap.pop();
    if (heap.length === 0) return root;

    heap[0] = end;
    let i = 0;
    const length = heap.length;

    while (true) {
      const leftIdx = 2 * i + 1;
      const rightIdx = 2 * i + 2;
      let smallest = i;

      if (leftIdx < length && heap[leftIdx] < heap[smallest]) {
        smallest = leftIdx;
      }
      if (rightIdx < length && heap[rightIdx] < heap[smallest]) {
        smallest = rightIdx;
      }
      if (smallest === i) break;

      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }

    return root;
  };

  scoville.forEach((s) => push(s));

  while (heap.length > 1 && heap[0] < K) {
    const min = pop();
    const min2 = pop();

    push(min + min2 * 2);
    answer++;
  }

  return heap[0] >= K ? answer : -1;
}

const scoville = [1, 2, 3, 9, 10, 12];
const K = 7;

console.log(solution(scoville, K));
