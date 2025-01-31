export const formatTime = (n: number): string => {
  const hours = Math.floor(n / 60); // Получаем целое количество часов
  const minutes = n % 60; // Остаток - количество минут
  const hoursPart = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minutesPart =
    minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';

  return [hoursPart, minutesPart].filter(Boolean).join(' ');
};

export const changeCourseIndexToZero = (arr: ICourse[], value: string) => {
  const arrayCopy = [...arr];
  const index = arrayCopy.findIndex((item) => item.title === value);

  if (index !== -1) {
    const [foundItem] = arrayCopy.splice(index, 1);
    arrayCopy.unshift(foundItem);
  }

  return arrayCopy;
};
