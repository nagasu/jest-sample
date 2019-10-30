import greet from "@/greet";

describe('greet', (): void => {
  test('shoud say hello to Tom.', (): void => {
    const res: string = greet('Tom');
    expect(res).toBe('Hello Tom!');
  });

  test('shoud say hello to Nagasu.', (): void => {
    const res: string = greet('Nagasu');
    expect(res).toBe('Hello Nagasu!');
  });
})
