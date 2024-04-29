import { isToday, isTomorrow, getDay } from 'date-fns';

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function formatDate(date: Date): string {
  const formattedDate = (date: Date): string => {
    const isDateToday = isToday(date);
    const isDateTomorrow = isTomorrow(date);

    if (isDateToday) return 'Today';
    else if (isDateTomorrow) return 'Tomorrow';
    else return DayOfWeek[getDay(date)];
  };

  return (
    formattedDate(date) + ', ' + Month[date.getMonth()] + ' ' + date.getDate()
  );
}

export { formatDate };
