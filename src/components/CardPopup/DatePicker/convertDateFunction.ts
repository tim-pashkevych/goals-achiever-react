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
  const currentDate: Date = new Date();

  const formattedDate = (date: Date): string => {
    const dayDiff: number = Math.round(
      (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (dayDiff === 0) return 'Today';
    else if (dayDiff === 1) return 'Tomorrow';
    else if (dayDiff > 1) return DayOfWeek[date.getDay()];
    else return 'Unknown Date';
  };

  return (
    formattedDate(date) + ', ' + Month[date.getMonth()] + ' ' + date.getDate()
  );
}

export { formatDate };
