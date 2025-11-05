/** Calculation time difference  Unit / MS
 * @param startTime
 * @param endTime
 */
export function getTimeRemainingString(startTime, endTime) {
  const total = endTime - startTime;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(total / (1000 * 60 * 60));
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days: `0${days}`.slice(-2),
    hours: `0${hours}`.slice(-2),
    minutes: `0${minutes}`.slice(-2),
    seconds: `${`0${seconds}`}`.slice(-2),
  };
}

const ONE_DAY = 24 * 60 * 60 * 1000;
const ONE_HOUR = 1000 * 60 * 60;
export function getTimeRemaining(startTime, endTime) {
  let t = endTime - startTime;
  if (t < 0) {
    t = 0;
  }
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / ONE_HOUR) % 24);
  const days = Math.floor(t / ONE_DAY);
  const ceilDays = Math.ceil(t / ONE_DAY);
  return {
    total: t,
    days,
    ceilDays,
    hours,
    minutes,
    seconds,
  };
}

export function getTheEndOfTheDay(time) {
  const endDate = new Date(time);
  endDate.setHours(23, 59, 59, 999);
  return endDate.getTime();
}

/**get the url query params
 * @param key query string key
 * @param url url address
 */
export function getQuery(key, url) {
  url = url || window.location.search;
  const hashIndex = url.indexOf("#");
  if (hashIndex > 0) {
    url = url.substr(0, hashIndex);
  }

  const keyMatches = url.match(
    new RegExp(`[?|&]${encodeURIComponent(key)}=([^&]*)(&|$)`)
  );
  if (keyMatches && keyMatches[1] === "%s") {
    return keyMatches[1];
  }
  return keyMatches ? decodeURIComponent(keyMatches[1]) : "";
}
