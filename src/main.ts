export const delayMillis = (delayMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delayMs));

export const greet = (name: string): string => `Hello ${name}`;

export const foo = async (): Promise<boolean> => {
  // eslint-disable-next-line no-console
  console.log(greet('World'));

  await delayMillis(1000);

  // eslint-disable-next-line no-console
  console.log('done');
  return true;
};
