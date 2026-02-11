/* ===================== DATA ===================== */
const ANIMALS_EMOJI = ['🐁','🐂','🐅','🐇','🐉','🐍','🐎','🐐','🐒','🐓','🐕','🐖'];
// Traditional Chinese animal characters (生肖)
const ANIMALS_HANZI = ['鼠','牛','虎','兔','龍','蛇','馬','羊','猴','雞','狗','豬'];

const ANIMAL_NAMES_EN = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig'];

// Back-compat aliases (some parts of the original code expect these names)
const ANIMALS = ANIMALS_EMOJI;
const ANIMAL_NAMES = ANIMAL_NAMES_EN;

const ELEMENTS = ['Wood','Fire','Earth','Metal','Water'];
const ELEMENT_EMOJI = { Wood:'🪵', Fire:'🔥', Earth:'⛰️', Metal:'⚙️', Water:'💧' };
const ELEMENT_HANZI = { Wood:'木', Fire:'火', Earth:'土', Metal:'金', Water:'水' };

// Colors (your spec)
const ELEMENT_COLORS = {
  Water: '#7db7ff',
  Wood:  '#d8b48a',
  Fire:  '#ffe36e',
  Earth: '#a0764a',
  Metal: '#c0c0c0'
};

const BASE_YEAR = 1984; // Wood-Rat (yang) — Jia-Zi (甲子)

/* === Chinese New Year 1900–2100 === */
const CNY_BY_YEAR = {
  1899: "1899-02-10",  
  1900:"1900-01-31",1901:"1901-02-19",1902:"1902-02-08",1903:"1903-01-29",1904:"1904-02-16",
  1905:"1905-02-04",1906:"1906-01-25",1907:"1907-02-13",1908:"1908-02-02",1909:"1909-01-22",
  1910:"1910-02-10",1911:"1911-01-30",1912:"1912-02-18",1913:"1913-02-06",1914:"1914-01-26",
  1915:"1915-02-14",1916:"1916-02-03",1917:"1917-01-23",1918:"1918-02-11",1919:"1919-02-01",
  1920:"1920-02-20",1921:"1921-02-08",1922:"1922-01-28",1923:"1923-02-16",1924:"1924-02-05",
  1925:"1925-01-24",1926:"1926-02-13",1927:"1927-02-02",1928:"1928-01-23",1929:"1929-02-10",
  1930:"1930-01-30",1931:"1931-02-17",1932:"1932-02-06",1933:"1933-01-26",1934:"1934-02-14",
  1935:"1935-02-04",1936:"1936-01-24",1937:"1937-02-11",1938:"1938-01-31",1939:"1939-02-19",
  1940:"1940-02-08",1941:"1941-01-27",1942:"1942-02-15",1943:"1943-02-05",1944:"1944-01-25",
  1945:"1945-02-13",1946:"1946-02-02",1947:"1947-01-22",1948:"1948-02-10",1949:"1949-01-29",
  1950:"1950-02-17",1951:"1951-02-06",1952:"1952-01-27",1953:"1953-02-14",1954:"1954-02-03",
  1955:"1955-01-24",1956:"1956-02-12",1957:"1957-01-31",1958:"1958-02-18",1959:"1959-02-08",
  1960:"1960-01-28",1961:"1961-02-15",1962:"1962-02-05",1963:"1963-01-25",1964:"1964-02-13",
  1965:"1965-02-02",1966:"1966-01-21",1967:"1967-02-09",1968:"1968-01-30",1969:"1969-02-17",
  1970:"1970-02-06",1971:"1971-01-27",1972:"1972-02-15",1973:"1973-02-03",1974:"1974-01-23",
  1975:"1975-02-11",1976:"1976-01-31",1977:"1977-02-18",1978:"1978-02-07",1979:"1979-01-28",
  1980:"1980-02-16",1981:"1981-02-05",1982:"1982-01-25",1983:"1983-02-13",1984:"1984-02-02",
  1985:"1985-02-20",1986:"1986-02-09",1987:"1987-01-29",1988:"1988-02-17",1989:"1989-02-06",
  1990:"1990-01-27",1991:"1991-02-15",1992:"1992-02-04",1993:"1993-01-23",1994:"1994-02-10",
  1995:"1995-01-31",1996:"1996-02-19",1997:"1997-02-07",1998:"1998-01-28",1999:"1999-02-16",
  2000:"2000-02-05",2001:"2001-01-24",2002:"2002-02-12",2003:"2003-02-01",2004:"2004-01-22",
  2005:"2005-02-09",2006:"2006-01-29",2007:"2007-02-18",2008:"2008-02-07",2009:"2009-01-26",
  2010:"2010-02-14",2011:"2011-02-03",2012:"2012-01-23",2013:"2013-02-10",2014:"2014-01-31",
  2015:"2015-02-19",2016:"2016-02-08",2017:"2017-01-28",2018:"2018-02-16",2019:"2019-02-05",
  2020:"2020-01-25",2021:"2021-02-12",2022:"2022-02-01",2023:"2023-01-22",2024:"2024-02-10",
  2025:"2025-01-29",2026:"2026-02-17",2027:"2027-02-06",2028:"2028-01-26",2029:"2029-02-13",
  2030:"2030-02-02",2031:"2031-01-23",2032:"2032-02-11",2033:"2033-01-31",2034:"2034-02-19",
  2035:"2035-02-08",2036:"2036-01-28",2037:"2037-02-15",2038:"2038-02-04",2039:"2039-01-24",
  2040:"2040-02-12",2041:"2041-02-01",2042:"2042-01-22",2043:"2043-02-10",2044:"2044-01-30",
  2045:"2045-02-17",2046:"2046-02-06",2047:"2047-01-26",2048:"2048-02-14",2049:"2049-02-02",
  2050:"2050-01-23",2051:"2051-02-11",2052:"2052-02-01",2053:"2053-02-19",2054:"2054-02-08",
  2055:"2055-01-28",2056:"2056-02-15",2057:"2057-02-04",2058:"2058-01-24",2059:"2059-02-12",
  2060:"2060-02-02",2061:"2061-01-21",2062:"2062-02-09",2063:"2063-01-29",2064:"2064-02-17",
  2065:"2065-02-05",2066:"2066-01-26",2067:"2067-02-14",2068:"2068-02-03",2069:"2069-01-23",
  2070:"2070-02-11",2071:"2071-01-31",2072:"2072-02-19",2073:"2073-02-07",2074:"2074-01-27",
  2075:"2075-02-15",2076:"2076-02-05",2077:"2077-01-24",2078:"2078-02-12",2079:"2079-02-02",
  2080:"2080-01-22",2081:"2081-02-09",2082:"2082-01-29",2083:"2083-02-17",2084:"2084-02-06",
  2085:"2085-01-26",2086:"2086-02-14",2087:"2087-02-03",2088:"2088-01-24",2089:"2089-02-10",
  2090:"2090-01-30",2091:"2091-02-18",2092:"2092-02-07",2093:"2093-01-27",2094:"2094-02-15",
  2095:"2095-02-05",2096:"2096-01-25",2097:"2097-02-12",2098:"2098-02-01",2099:"2099-01-21",
  2100:"2100-02-09", 2101: "2101-01-29",
};

// Lìchūn (立春) times: moment when Sun's apparent ecliptic longitude = 315°
// Computed in UTC (Z). Convert to local time zone in code if needed.
const LICHUN_BY_YEAR = {
  1899: "1899-02-04T11:22:00Z", // Lìchūn 1899 (UTC, avrundad till minut)
  1900: "1900-02-04T05:55:05Z",
  1901: "1901-02-04T11:45:27Z",
  1902: "1902-02-04T17:36:28Z",
  1903: "1903-02-04T23:27:57Z",
  1904: "1904-02-05T05:19:42Z",
  1905: "1905-02-04T11:11:27Z",
  1906: "1906-02-04T17:02:56Z",
  1907: "1907-02-04T22:53:57Z",
  1908: "1908-02-05T04:44:18Z",
  1909: "1909-02-04T10:33:55Z",
  1910: "1910-02-04T16:22:46Z",
  1911: "1911-02-04T22:10:56Z",
  1912: "1912-02-05T03:58:33Z",
  1913: "1913-02-04T09:45:51Z",
  1914: "1914-02-04T15:33:04Z",
  1915: "1915-02-04T21:20:28Z",
  1916: "1916-02-05T03:08:17Z",
  1917: "1917-02-04T08:56:42Z",
  1918: "1918-02-04T14:45:50Z",
  1919: "1919-02-04T20:35:45Z",
  1920: "1920-02-05T02:26:23Z",
  1921: "1921-02-04T08:17:36Z",
  1922: "1922-02-04T14:09:13Z",
  1923: "1923-02-04T20:01:00Z",
  1924: "1924-02-05T01:52:40Z",
  1925: "1925-02-04T07:44:00Z",
  1926: "1926-02-04T13:34:46Z",
  1927: "1927-02-04T19:24:51Z",
  1928: "1928-02-05T01:14:10Z",
  1929: "1929-02-04T07:02:44Z",
  1930: "1930-02-04T12:50:40Z",
  1931: "1931-02-04T18:38:08Z",
  1932: "1932-02-05T00:25:23Z",
  1933: "1933-02-04T06:12:38Z",
  1934: "1934-02-04T12:00:10Z",
  1935: "1935-02-04T17:48:12Z",
  1936: "1936-02-04T23:36:53Z",
  1937: "1937-02-04T05:26:19Z",
  1938: "1938-02-04T11:16:31Z",
  1939: "1939-02-04T17:07:24Z",
  1940: "1940-02-04T22:58:48Z",
  1941: "1941-02-04T04:50:31Z",
  1942: "1942-02-04T10:42:17Z",
  1943: "1943-02-04T16:33:51Z",
  1944: "1944-02-04T22:24:59Z",
  1945: "1945-02-04T04:15:30Z",
  1946: "1946-02-04T10:05:17Z",
  1947: "1947-02-04T15:54:18Z",
  1948: "1948-02-04T21:42:37Z",
  1949: "1949-02-04T03:30:21Z",
  1950: "1950-02-04T09:17:42Z",
  1951: "1951-02-04T15:04:55Z",
  1952: "1952-02-04T20:52:15Z",
  1953: "1953-02-04T02:39:57Z",
  1954: "1954-02-04T08:28:13Z",
  1955: "1955-02-04T14:17:11Z",
  1956: "1956-02-04T20:06:56Z",
  1957: "1957-02-04T01:57:24Z",
  1958: "1958-02-04T07:48:30Z",
  1959: "1959-02-04T13:40:03Z",
  1960: "1960-02-04T19:31:49Z",
  1961: "1961-02-04T01:23:32Z",
  1962: "1962-02-04T07:14:58Z",
  1963: "1963-02-04T13:05:53Z",
  1964: "1964-02-04T18:56:07Z",
  1965: "1965-02-04T00:45:37Z",
  1966: "1966-02-04T06:34:21Z",
  1967: "1967-02-04T12:22:25Z",
  1968: "1968-02-04T18:09:58Z",
  1969: "1969-02-03T23:57:14Z",
  1970: "1970-02-04T05:44:28Z",
  1971: "1971-02-04T11:31:55Z",
  1972: "1972-02-04T17:19:49Z",
  1973: "1973-02-03T23:08:21Z",
  1974: "1974-02-04T04:57:37Z",
  1975: "1975-02-04T10:47:39Z",
  1976: "1976-02-04T16:38:23Z",
  1977: "1977-02-03T22:29:41Z",
  1978: "1978-02-04T04:21:21Z",
  1979: "1979-02-04T10:13:07Z",
  1980: "1980-02-04T16:04:45Z",
  1981: "1981-02-03T21:56:00Z",
  1982: "1982-02-04T03:46:41Z",
  1983: "1983-02-04T09:36:38Z",
  1984: "1984-02-04T15:25:50Z",
  1985: "1985-02-03T21:14:18Z",
  1986: "1986-02-04T03:02:08Z",
  1987: "1987-02-04T08:49:33Z",
  1988: "1988-02-04T14:36:47Z",
  1989: "1989-02-03T20:24:04Z",
  1990: "1990-02-04T02:11:40Z",
  1991: "1991-02-04T07:59:48Z",
  1992: "1992-02-04T13:48:36Z",
  1993: "1993-02-03T19:38:10Z",
  1994: "1994-02-04T01:28:29Z",
  1995: "1995-02-04T07:19:27Z",
  1996: "1996-02-04T13:10:55Z",
  1997: "1997-02-03T19:02:39Z",
  1998: "1998-02-04T00:54:24Z",
  1999: "1999-02-04T06:45:55Z",
  2000: "2000-02-04T12:36:58Z",
  2001: "2001-02-03T18:27:23Z",
  2002: "2002-02-04T00:17:02Z",
  2003: "2003-02-04T06:05:57Z",
  2004: "2004-02-04T11:54:09Z",
  2005: "2005-02-03T17:41:48Z",
  2006: "2006-02-03T23:29:07Z",
  2007: "2007-02-04T05:16:20Z",
  2008: "2008-02-04T11:03:43Z",
  2009: "2009-02-03T16:51:30Z",
  2010: "2010-02-03T22:39:52Z",
  2011: "2011-02-04T04:28:58Z",
  2012: "2012-02-04T10:18:50Z",
  2013: "2013-02-03T16:09:25Z",
  2014: "2014-02-03T22:00:36Z",
  2015: "2015-02-04T03:52:12Z",
  2016: "2016-02-04T09:43:58Z",
  2017: "2017-02-03T15:35:40Z",
  2018: "2018-02-03T21:27:01Z",
  2019: "2019-02-04T03:17:50Z",
  2020: "2020-02-04T09:07:58Z",
  2021: "2021-02-03T14:57:20Z",
  2022: "2022-02-03T20:45:57Z",
  2023: "2023-02-04T02:33:56Z",
  2024: "2024-02-04T08:21:25Z",
  2025: "2025-02-03T14:08:40Z",
  2026: "2026-02-03T19:55:55Z",
  2027: "2027-02-04T01:43:26Z",
  2028: "2028-02-04T07:31:25Z",
  2029: "2029-02-03T13:20:04Z",
  2030: "2030-02-03T19:09:27Z",
  2031: "2031-02-04T00:59:36Z",
  2032: "2032-02-04T06:50:26Z",
  2033: "2033-02-03T12:41:49Z",
  2034: "2034-02-03T18:33:30Z",
  2035: "2035-02-04T00:25:17Z",
  2036: "2036-02-04T06:16:52Z",
  2037: "2037-02-03T12:08:02Z",
  2038: "2038-02-03T17:58:36Z",
  2039: "2039-02-03T23:48:27Z",
  2040: "2040-02-04T05:37:31Z",
  2041: "2041-02-03T11:25:52Z",
  2042: "2042-02-03T17:13:38Z",
  2043: "2043-02-03T23:01:00Z",
  2044: "2044-02-04T04:48:13Z",
  2045: "2045-02-03T10:35:33Z",
  2046: "2046-02-03T16:23:13Z",
  2047: "2047-02-03T22:11:27Z",
  2048: "2048-02-04T04:00:22Z",
  2049: "2049-02-03T09:50:03Z",
  2050: "2050-02-03T15:40:29Z",
  2051: "2051-02-03T21:31:33Z",
  2052: "2052-02-04T03:23:04Z",
  2053: "2053-02-03T09:14:50Z",
  2054: "2054-02-03T15:06:34Z",
  2055: "2055-02-03T20:58:01Z",
  2056: "2056-02-04T02:48:58Z",
  2057: "2057-02-03T08:39:16Z",
  2058: "2058-02-03T14:28:48Z",
  2059: "2059-02-03T20:17:35Z",
  2060: "2060-02-04T02:05:42Z",
  2061: "2061-02-03T07:53:17Z",
  2062: "2062-02-03T13:40:34Z",
  2063: "2063-02-03T19:27:48Z",
  2064: "2064-02-04T01:15:14Z",
  2065: "2065-02-03T07:03:05Z",
  2066: "2066-02-03T12:51:34Z",
  2067: "2067-02-03T18:40:47Z",
  2068: "2068-02-04T00:30:46Z",
  2069: "2069-02-03T06:21:28Z",
  2070: "2070-02-03T12:12:44Z",
  2071: "2071-02-03T18:04:22Z",
  2072: "2072-02-03T23:56:09Z",
  2073: "2073-02-03T05:47:48Z",
  2074: "2074-02-03T11:39:05Z",
  2075: "2075-02-03T17:29:48Z",
  2076: "2076-02-03T23:19:49Z",
  2077: "2077-02-03T05:09:04Z",
  2078: "2078-02-03T10:57:34Z",
  2079: "2079-02-03T16:45:27Z",
  2080: "2080-02-03T22:32:54Z",
  2081: "2081-02-03T04:20:07Z",
  2082: "2082-02-03T10:07:24Z",
  2083: "2083-02-03T15:54:58Z",
  2084: "2084-02-03T21:43:04Z",
  2085: "2085-02-03T03:31:49Z",
  2086: "2086-02-03T09:21:20Z",
  2087: "2087-02-03T15:11:36Z",
  2088: "2088-02-03T21:02:32Z",
  2089: "2089-02-03T02:53:58Z",
  2090: "2090-02-03T08:45:42Z",
  2091: "2091-02-03T14:37:27Z",
  2092: "2092-02-03T20:29:00Z",
  2093: "2093-02-03T02:20:05Z",
  2094: "2094-02-03T08:10:32Z",
  2095: "2095-02-03T14:00:15Z",
  2096: "2096-02-03T19:49:12Z",
  2097: "2097-02-03T01:37:27Z",
  2098: "2098-02-03T07:25:08Z",
  2099: "2099-02-03T13:12:28Z",
  2100: "2100-02-03T18:59:41Z",
  2101: "2101-02-03T21:00:00Z", // Lìchūn 2101 (UTC, avrundad)
};

/* ===================== GEOMETRI ===================== */
const CX = 450, CY = 450;

const OUTER_R = 440;
const RINGS = 4;
const INNER_HOLE_R = 90;
const RING_W = (OUTER_R - INNER_HOLE_R) / RINGS;

// ring-gränser
const R0 = INNER_HOLE_R;
const R1 = R0 + RING_W;
const R2 = R1 + RING_W;
const R3 = R2 + RING_W;
const R4 = OUTER_R;

// centerlinjer (där emojis placeras)
const YY_R      = (R0 + R1) / 2;
const ELEMENT_R = (R1 + R2) / 2;
const ANIMAL_R  = (R2 + R3) / 2;
const CYCLE_R   = (R3 + R4) / 2;

const TICK_R = ANIMAL_R;

/* ===================== DOM ===================== */
const elementsRing = document.getElementById('elementsRing');
const yyRing       = document.getElementById('yyRing');
const animalsRing  = document.getElementById('animalsRing');
const cycleRing    = document.getElementById('cycleRing');

const elementSectors = document.getElementById('elementSectors');
const cycleSectors   = document.getElementById('cycleSectors');

const cycleLabels  = document.getElementById('cycleLabels');

const elementTicks = document.getElementById('elementTicks');
const yyTicks      = document.getElementById('yyTicks');
const animalTicks  = document.getElementById('animalTicks');
const cycleTicks   = document.getElementById('cycleTicks');

const focusBox     = document.getElementById('focusBox');

let state = {
  mode: 'emoji',
  yearBoundary: 'cny', // 'cny' | 'lichun'
  zodiacYear: null,
  rotElements: 0,
  rotYY: 0,
  rotAnimals: 0,
  rotCycle: 0
};

/* ===================== HELPERS ===================== */

const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function minKey(obj){
  return Math.min(...Object.keys(obj).map(Number));
}
function maxKey(obj){
  return Math.max(...Object.keys(obj).map(Number));
}

// Vi kräver att boundary-datan finns för zodiacYear och zodiacYear+1 (för period)
function supportedZodiacYearRange(){
  const minC = minKey(CNY_BY_YEAR);
  const maxC = maxKey(CNY_BY_YEAR);
  const minL = (typeof LICHUN_BY_YEAR !== 'undefined') ? minKey(LICHUN_BY_YEAR) : minC;
  const maxL = (typeof LICHUN_BY_YEAR !== 'undefined') ? maxKey(LICHUN_BY_YEAR) : maxC;

  const minY = Math.max(minC, minL);
  const maxY = Math.min(maxC, maxL) - 1; // -1 eftersom period behöver nästa år också
  return { minY, maxY };
}

function getLichunMomentOrNull(year){
  const iso = LICHUN_BY_YEAR[year];
  if(!iso) return null;
  return new Date(iso); // exakt ögonblick (UTC)
}

function fmtISOInOffset(date, offsetMinutes){
  return ymdInOffset(date, offsetMinutes);
}

function htmlToText(el){
  if(!el) return '';
  return el.innerText
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function setHalo(node, on){
  const useStrokeHalo = IS_IOS && state.mode === 'emoji';

  if(useStrokeHalo){
    node.classList.toggle('haloStroke', !!on);
    node.removeAttribute('filter');
    return;
  }

  node.classList.toggle('haloStroke', false);
  if(on) node.setAttribute('filter', 'url(#halo)');
  else node.removeAttribute('filter');
}

function cycleStartYearFor(zodiacYear){
  const info = sexagenary(zodiacYear);
  return info.isYang ? zodiacYear : (zodiacYear - 1); // alltid yang-start för segmentet
}

function cyclePairIndexForStartYear(startYear){
  // startYear är alltid yang; varje segment = 2 år
  // vi kan räkna absolut index relativt BASE_YEAR (1984 är yang)
  return Math.floor((startYear - BASE_YEAR) / 2);
}

// I SVG är positiv rotation "medsols" (pga y-axeln nedåt).
const DIR = -1; 
// DIR = -1 betyder: vi bygger ringarna i motsatt ordning,
// så att ökande år kan animeras med +vinkel (= medsols) och fortfarande träffa markören.

function wrapDeg(d) {
  return ((d + 180) % 360 + 360) % 360 - 180;
}
function nearestAngle(current, rawTarget) {
  const delta = wrapDeg(rawTarget - current);
  return current + delta;
}
const mod=(n,m)=>((n%m)+m)%m;

function polar(r,deg){
  const rad = deg*Math.PI/180;
  return { x: CX + r*Math.cos(rad), y: CY + r*Math.sin(rad) };
}

function makeText(txt, x, y, cls, dy=null){
  const t=document.createElementNS('http://www.w3.org/2000/svg','text');
  t.setAttribute('class', cls);
  t.setAttribute('x', x);
  t.setAttribute('y', y);
  t.setAttribute('text-anchor','middle');
  t.setAttribute('dominant-baseline','central');
  if(dy !== null) t.setAttribute('dy', dy);
  t.textContent = txt;
  return t;
}

// ----- Symbol mode helpers -----
function animalGlyph(index){
  return (state.mode === 'hanzi') ? ANIMALS_HANZI[index] : ANIMALS_EMOJI[index];
}
function elementGlyph(elementName){
  return (state.mode === 'hanzi') ? ELEMENT_HANZI[elementName] : ELEMENT_EMOJI[elementName];
}

function refreshRingGlyphs(){
  // Elements ring (10 stems -> 5 elements)
  for(const node of elementsRing.querySelectorAll('text')){
    const stemIndex = Number(node.dataset.stem);
    const elementIndex = Math.floor(stemIndex / 2);
    const name = ELEMENTS[elementIndex];
    node.textContent = elementGlyph(name);
  }

  // Animals ring (12)
  for(const node of animalsRing.querySelectorAll('text')){
    const i = Number(node.dataset.index);
    node.textContent = animalGlyph(i);
  }

  // 60-year ring texts (use dataset.year)
  for(const t of cycleTextNodes){
    const yr = Number(t.dataset.year);
    if(!Number.isFinite(yr)) continue;
    t.textContent = animalGlyph(sexagenary(yr).animalIndex);
  }
}

function annularSectorPath(cx, cy, rInner, rOuter, startDeg, endDeg) {
  const toRad = d => d * Math.PI / 180;
  const a0 = toRad(startDeg);
  const a1 = toRad(endDeg);

  const x0o = cx + rOuter * Math.cos(a0);
  const y0o = cy + rOuter * Math.sin(a0);
  const x1o = cx + rOuter * Math.cos(a1);
  const y1o = cy + rOuter * Math.sin(a1);

  const x0i = cx + rInner * Math.cos(a0);
  const y0i = cy + rInner * Math.sin(a0);
  const x1i = cx + rInner * Math.cos(a1);
  const y1i = cy + rInner * Math.sin(a1);

  const largeArc = (endDeg - startDeg) > 180 ? 1 : 0;

  return [
    `M ${x0o} ${y0o}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x1o} ${y1o}`,
    `L ${x1i} ${y1i}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${x0i} ${y0i}`,
    'Z'
  ].join(' ');
}

function getCNYDateOrNull(year){
  const iso = CNY_BY_YEAR[year];
  if(!iso) return null;
  return new Date(`${iso}T00:00:00`);
}

function addDays(date, days){
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function fmtISO(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

const HK_OFFSET_MIN = 8 * 60;

function ymdInOffset(date, offsetMinutes){
  const ms = date.getTime() + offsetMinutes * 60 * 1000;
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth()+1).padStart(2,'0');
  const day = String(d.getUTCDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

function zodiacYearForDate(date){
  const y = date.getFullYear();

  if(state.yearBoundary === 'lichun'){
    const lichun = getLichunMomentOrNull(y);
    if(!lichun) throw new Error(`Missing Lìchūn for ${y}`);

    const birthHK  = ymdInOffset(date,   HK_OFFSET_MIN);
    const lichunHK = ymdInOffset(lichun, HK_OFFSET_MIN);

    // år byter vid Lìchūn-datumet i HK-tid
    return (birthHK < lichunHK) ? (y - 1) : y;
  }

  const cny = getCNYDateOrNull(y);
  if(!cny) throw new Error(`Missing CNY for ${y}`);
  return (date < cny) ? (y - 1) : y;
}

function zodiacPeriodOrNull(ganzhiYear){
  if(state.yearBoundary === 'lichun'){
    const start = getLichunMomentOrNull(ganzhiYear);
    const next  = getLichunMomentOrNull(ganzhiYear + 1);
    if(!start || !next) return null;

    // Slutar precis innan nästa Lìchūn
    const end = new Date(next.getTime() - 1);
    return { start, end };
  }

  // Default: Chinese New Year period
  const start = getCNYDateOrNull(ganzhiYear);
  const nextStart = getCNYDateOrNull(ganzhiYear + 1);
  if(!start || !nextStart) return null;

  return { start, end: addDays(nextStart, -1) };
}

// Sexagenary info for a Ganzhi year
function sexagenary(year){
  const d = year - BASE_YEAR;
  const animalIndex = mod(d, 12);
  const stemIndex   = mod(d, 10);
  const elementIndex= Math.floor(stemIndex / 2);
  const isYang      = (stemIndex % 2 === 0);
  return { animalIndex, stemIndex, elementIndex, isYang };
}

/* ===================== STATIC RINGS ===================== */
function buildElementsStatic(){
  elementsRing.innerHTML='';
  const step = 360/10;

  for(let stemIndex=0; stemIndex<10; stemIndex++){
    const deg = DIR * ((stemIndex + 0.5) * step);
    const {x,y} = polar(ELEMENT_R, deg);

    const elementIndex = Math.floor(stemIndex/2);
    const name = ELEMENTS[elementIndex];
    const t = makeText(elementGlyph(name), x, y, 'emoji');
    t.dataset.stem = String(stemIndex);
    elementsRing.appendChild(t);
  }
}

function buildAnimalsStatic(){
  animalsRing.innerHTML='';
  const step = 360/12;
  for(let i=0;i<12;i++){
    const deg = DIR * (i * step);
    const {x,y} = polar(ANIMAL_R, deg);
    const t = makeText(animalGlyph(i), x, y, 'emoji');
    t.dataset.index = String(i);
    animalsRing.appendChild(t);
  }
}

// YY ring: 10 positions, “hands” (rotate with ring, no upright correction)
function buildYYStatic(){
  yyRing.innerHTML='';
  const step = 360/10;
  for(let i=0;i<10;i++){
    const deg = DIR * ((i + 0.5) * step);
    const {x,y} = polar(YY_R, deg);

    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.dataset.index = String(i);
    g.setAttribute('transform', `translate(${x} ${y}) rotate(${deg})`);

    const isYang = (i % 2 === 0);
    if(isYang){
      const l = document.createElementNS('http://www.w3.org/2000/svg','line');
      l.setAttribute('class', 'yyLine');
      l.setAttribute('x1', -14); l.setAttribute('y1', 0);
      l.setAttribute('x2',  14); l.setAttribute('y2', 0);
      g.appendChild(l);
    } else {
      const l1 = document.createElementNS('http://www.w3.org/2000/svg','line');
      l1.setAttribute('class', 'yyLine');
      l1.setAttribute('x1', -14); l1.setAttribute('y1', 0);
      l1.setAttribute('x2',  -4); l1.setAttribute('y2', 0);

      const l2 = document.createElementNS('http://www.w3.org/2000/svg','line');
      l2.setAttribute('class', 'yyLine');
      l2.setAttribute('x1',  4); l2.setAttribute('y1', 0);
      l2.setAttribute('x2', 14); l2.setAttribute('y2', 0);

      g.appendChild(l1);
      g.appendChild(l2);
    }
    yyRing.appendChild(g);
  }
}

/* ===================== SECTORS ===================== */
function buildElementSectors(){
  elementSectors.innerHTML = '';

  const step = 360/10; // 10 "års-fält"
  for(let stemIndex=0; stemIndex<10; stemIndex++){
    const a = DIR * (stemIndex*step);
    const b = DIR * ((stemIndex+1)*step);
    const start = Math.min(a,b);
    const end   = Math.max(a,b);

    const elementIndex = Math.floor(stemIndex/2);
    const name = ELEMENTS[elementIndex];
    const fill = ELEMENT_COLORS[name];

    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('class','sector');
    p.setAttribute('fill', fill);
    p.setAttribute('d', annularSectorPath(CX, CY, R1, R2, start, end));
    elementSectors.appendChild(p);
  }
}

// 60-year ring: zodiacYear .. zodiacYear+59, with element color per 2-year segment
// cache-arrayer så updateCycleRing slipper querySelectorAll varje gång
let cycleSectorNodes = [];
let cycleTextNodes = [];

function initCycleRing(){
  cycleRing.innerHTML = '';
  cycleSectors.innerHTML = '';
  cycleTicks.innerHTML = '';

  cycleSectorNodes = [];
  cycleTextNodes = [];

  const cells = 60;
  const step = 360 / cells;

  // Draw 60 sectors + 60 centered glyphs (one per sector)
  for(let i = 0; i < cells; i++){
    const startU = i * step;
    const endU   = (i + 1) * step;

    const a = DIR * startU;
    const b = DIR * endU;
    const start = Math.min(a,b);
    const end   = Math.max(a,b);

    const seg = document.createElementNS('http://www.w3.org/2000/svg','path');
    seg.setAttribute('class','sector');
    seg.setAttribute('d', annularSectorPath(CX, CY, R3, R4, start, end));
    cycleSectors.appendChild(seg);
    cycleSectorNodes.push(seg);

    // Tick at the boundary (between cells)
    const tickDeg = DIR * startU;
    const p1 = polar(R3, tickDeg);
    const p2 = polar(R4, tickDeg);
    const ln = document.createElementNS('http://www.w3.org/2000/svg','line');
    ln.setAttribute('class','tick');
    ln.setAttribute('x1', p1.x);
    ln.setAttribute('y1', p1.y);
    ln.setAttribute('x2', p2.x);
    ln.setAttribute('y2', p2.y);
    cycleTicks.appendChild(ln);

    // Centered glyph for this cell
    const midDeg = DIR * (startU + step * 0.5);
    const pos = polar(CYCLE_R, midDeg);

    const t = document.createElementNS('http://www.w3.org/2000/svg','text');
    t.setAttribute('class','cycleEmoji');
    t.setAttribute('x', pos.x);
    t.setAttribute('y', pos.y);
    t.setAttribute('text-anchor','middle');
    t.setAttribute('dominant-baseline','central');
    // keep the character visually centered and aligned with the ring
    t.dataset.baseRot = String(midDeg);
    t.setAttribute('transform', `rotate(${midDeg} ${pos.x} ${pos.y})`);

    cycleRing.appendChild(t);
    cycleTextNodes.push(t);
  }

  // Add the final tick at 360° boundary so you get all separators
  const lastDeg = DIR * 360;
  const q1 = polar(R3, lastDeg);
  const q2 = polar(R4, lastDeg);
  const ln2 = document.createElementNS('http://www.w3.org/2000/svg','line');
  ln2.setAttribute('class','tick');
  ln2.setAttribute('x1', q1.x);
  ln2.setAttribute('y1', q1.y);
  ln2.setAttribute('x2', q2.x);
  ln2.setAttribute('y2', q2.y);
  cycleTicks.appendChild(ln2);
}

function updateCycleRing(_ignored){
  // Fixed 60-year cycle anchored at BASE_YEAR so rotation targets are stable.
  for(let i = 0; i < cycleTextNodes.length; i++){
    const yr = BASE_YEAR + i;
    const t = cycleTextNodes[i];
    t.dataset.year = String(yr);
    t.textContent = animalGlyph(sexagenary(yr).animalIndex);
  }

  for(let i = 0; i < cycleSectorNodes.length; i++){
    const yr = BASE_YEAR + i;
    const info = sexagenary(yr);
    const elementName = ELEMENTS[info.elementIndex];
    cycleSectorNodes[i].setAttribute('fill', ELEMENT_COLORS[elementName]);
  }
}

/* ===================== TICKS ===================== */
function drawElementTicks(){
  elementTicks.innerHTML='';
  const step = 360 / 10;

  for(let i = 0; i < 10; i++){
    const deg = DIR * (i * step);
    const a = deg * Math.PI / 180;

    const x1 = CX + (R1) * Math.cos(a);
    const y1 = CY + (R1) * Math.sin(a);
    const x2 = CX + (R2) * Math.cos(a);
    const y2 = CY + (R2) * Math.sin(a);

    const l = document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('class','tick');
    l.setAttribute('x1',x1); l.setAttribute('y1',y1);
    l.setAttribute('x2',x2); l.setAttribute('y2',y2);
    elementTicks.appendChild(l);
  }
}

function drawYYTicks(){
  yyTicks.innerHTML='';
  const step = 360 / 10;

  for(let i = 0; i < 10; i++){
    const deg = DIR * (i * step);
    const a = deg * Math.PI / 180;

    const x1 = CX + (R0) * Math.cos(a);
    const y1 = CY + (R0) * Math.sin(a);
    const x2 = CX + (R1) * Math.cos(a);
    const y2 = CY + (R1) * Math.sin(a);

    const l = document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('class','tick');
    l.setAttribute('x1',x1); l.setAttribute('y1',y1);
    l.setAttribute('x2',x2); l.setAttribute('y2',y2);
    yyTicks.appendChild(l);
  }
}

function drawAnimalTicks(){
  animalTicks.innerHTML='';
  const step = 360 / 12;

  for(let i = 0; i < 12; i++){
    const deg = DIR * ((i + 0.5) * step);
    const a = deg * Math.PI / 180;

    const x1 = CX + (R2) * Math.cos(a);
    const y1 = CY + (R2) * Math.sin(a);
    const x2 = CX + (R3) * Math.cos(a);
    const y2 = CY + (R3) * Math.sin(a);

    const l = document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('class','tick');
    l.setAttribute('x1',x1); l.setAttribute('y1',y1);
    l.setAttribute('x2',x2); l.setAttribute('y2',y2);
    animalTicks.appendChild(l);
  }
}


/* ===================== SELECTION ===================== */
function setSelected(elementIndex, stemIndex, animalIndex, zodiacYear){
  for(const node of elementsRing.querySelectorAll('text')){
    const s = Number(node.dataset.stem);
    const on = (s===stemIndex);
    node.setAttribute('class', on ? 'emoji selected' : 'emoji');
    setHalo(node, on);
  }
for(const node of animalsRing.querySelectorAll('text')){
  const i = Number(node.dataset.index);
  const on = (i===animalIndex);
  node.setAttribute('class', on ? 'emoji selected' : 'emoji');
  setHalo(node, on);
}
for(const g of yyRing.querySelectorAll('g')){
  for(const line of g.querySelectorAll('line')){
    line.setAttribute('class', 'yyLine');
  }
}
for(const t of cycleRing.querySelectorAll('text')){
  t.setAttribute('class', 'cycleEmoji');
  setHalo(t, false);
}
}

/* ===================== UPRIGHT FIX ===================== */
function keepTextsUpright(group, ringRotationDeg){
  const inv = -ringRotationDeg;
  for(const t of group.querySelectorAll('text')){
    const x = Number(t.getAttribute('x'));
    const y = Number(t.getAttribute('y'));
    t.setAttribute('transform', `rotate(${inv} ${x} ${y})`);
  }
}

/* ===================== TARGETS (SNAP TARGETS) ===================== */
function rotationTargetsForZodiacYear(zodiacYear) {
  const info = sexagenary(zodiacYear);

  const stemStep = 360/10;
  const animalStep = 360/12;
  const cycleStep = 360/60;

  const rawStemCentered = DIR * (-((info.stemIndex + 0.5) * stemStep));

  const rawElements = rawStemCentered;
  const rawYY       = rawStemCentered;

  const rawAnimals  = DIR * (-(info.animalIndex * animalStep));

  // 60-year ring: one cell per year. Each cell is centered at (index + 0.5) * step.
  const cycleIndex = mod(zodiacYear - BASE_YEAR, 60); // 0..59
  const rawCycleBase = DIR * (-((cycleIndex + 0.5) * cycleStep));

  return { info, rawElements, rawYY, rawAnimals, rawCycleBase };
}

/* ===================== ANIMATION ===================== */
function easeInOutCubic(t){
  return t<0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
}

function animateTo(target, durationMs){
  return new Promise(resolve => {
    const start = performance.now();
    const from = {
      rotElements: state.rotElements,
      rotYY: state.rotYY,
      rotAnimals: state.rotAnimals,
      rotCycle: state.rotCycle
    };

    const dE = target.rotElements - from.rotElements;
    const dY = target.rotYY       - from.rotYY;
    const dA = target.rotAnimals  - from.rotAnimals;
    const dC = target.rotCycle    - from.rotCycle;

    function frame(now){
      const t = Math.min(1, (now - start) / durationMs);
      const e = easeInOutCubic(t);

      state.rotElements = from.rotElements + dE * e;
      state.rotYY       = from.rotYY       + dY * e;
      state.rotAnimals  = from.rotAnimals  + dA * e;
      state.rotCycle    = from.rotCycle    + dC * e;

      applyTransforms();

      if(t < 1) requestAnimationFrame(frame);
      else resolve();
    }
    requestAnimationFrame(frame);
  });
}

function applyTransforms(){
  elementsRing.setAttribute('transform', `rotate(${state.rotElements} ${CX} ${CY})`);
  yyRing.setAttribute('transform',       `rotate(${state.rotYY} ${CX} ${CY})`);
  animalsRing.setAttribute('transform',  `rotate(${state.rotAnimals} ${CX} ${CY})`);
  cycleRing.setAttribute('transform',    `rotate(${state.rotCycle} ${CX} ${CY})`);

  // ticks + sectors must rotate with their ring
  elementTicks.setAttribute('transform', `rotate(${state.rotElements} ${CX} ${CY})`);
  yyTicks.setAttribute('transform',      `rotate(${state.rotYY} ${CX} ${CY})`);
  animalTicks.setAttribute('transform',  `rotate(${state.rotAnimals} ${CX} ${CY})`);

  elementSectors.setAttribute('transform', `rotate(${state.rotElements} ${CX} ${CY})`);
  cycleSectors.setAttribute('transform',   `rotate(${state.rotCycle} ${CX} ${CY})`);
  cycleTicks.setAttribute('transform',   `rotate(${state.rotCycle} ${CX} ${CY})`);

  // Upright emojis: element + 12-djur (INTE 60-ringen, INTE yy)
  keepTextsUpright(elementsRing, state.rotElements);
  keepTextsUpright(animalsRing,  state.rotAnimals);
}

/* ===================== LABELS ===================== */
function clearCycleLabels(){ cycleLabels.innerHTML=''; }

function addLabelBox(anchorX, anchorY, lines){
  const paddingX = 10;
  const paddingY = 8;
  const lineH = 15;
  const maxLen = Math.max(...lines.map(s => s.length));
  const boxW = Math.min(420, Math.max(230, maxLen * 6.7 + paddingX*2));
  const boxH = paddingY*2 + lineH*(lines.length);
  const x = anchorX - boxW/2;
  const y = anchorY - boxH/2;

  const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
  rect.setAttribute('class','labelBox');
  rect.setAttribute('x', x);
  rect.setAttribute('y', y);
  rect.setAttribute('width', boxW);
  rect.setAttribute('height', boxH);
  cycleLabels.appendChild(rect);

  const text = document.createElementNS('http://www.w3.org/2000/svg','text');
  text.setAttribute('class','labelText');
  text.setAttribute('x', x + paddingX);
  text.setAttribute('y', y + paddingY + 12);
  text.setAttribute('text-anchor','start');
  text.setAttribute('dominant-baseline','alphabetic');

  lines.forEach((line, i) => {
    const tspan = document.createElementNS('http://www.w3.org/2000/svg','tspan');
    tspan.setAttribute('x', x + paddingX);
    tspan.setAttribute('dy', i === 0 ? 0 : lineH);
    tspan.textContent = line;
    text.appendChild(tspan);
  });

  cycleLabels.appendChild(text);
}

function periodLineOrFallback(year){
  const p = zodiacPeriodOrNull(year);
  if(!p) return 'Period: (missing boundary data)';
  const a = (state.yearBoundary === 'lichun')
    ? fmtISOInOffset(p.start, HK_OFFSET_MIN)
    : fmtISO(p.start);
  const b = (state.yearBoundary === 'lichun')
    ? fmtISOInOffset(p.end, HK_OFFSET_MIN)
    : fmtISO(p.end);
  return `Period: ${a} – ${b}`;
}

// Vi visar “förra/ nästa samma tecken” som +/-60 (sexagenary repeterar var 60:e)
function drawCyclePeriodLabels(zodiacYear){
  clearCycleLabels();

  const curInfo = sexagenary(zodiacYear);
  const prevY = zodiacYear - 60;
  const nextY = zodiacYear + 60;
  const prevInfo = sexagenary(prevY);
  const nextInfo = sexagenary(nextY);

  const curTitle  = `Current: ${zodiacYear}  ${ELEMENT_EMOJI[ELEMENTS[curInfo.elementIndex]]} ${curInfo.isYang?'yang':'yin'} ${animalGlyph(curInfo.animalIndex)}`;
  const prevTitle = `Previous: ${prevY}  ${ELEMENT_EMOJI[ELEMENTS[prevInfo.elementIndex]]} ${prevInfo.isYang?'yang':'yin'} ${animalGlyph(prevInfo.animalIndex)}`;
  const nextTitle = `Next: ${nextY}  ${ELEMENT_EMOJI[ELEMENTS[nextInfo.elementIndex]]} ${nextInfo.isYang?'yang':'yin'} ${animalGlyph(nextInfo.animalIndex)}`;

  const right = polar(R4 + 44, 0);
  const left  = polar(R4 + 44, 180);

  addLabelBox(right.x + 130, right.y, [curTitle,  periodLineOrFallback(zodiacYear)]);
  addLabelBox(left.x - 130,  left.y - 46, [prevTitle, periodLineOrFallback(prevY)]);
  addLabelBox(left.x - 130,  left.y + 46, [nextTitle, periodLineOrFallback(nextY)]);
}

/* ===================== UI ===================== */
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const year  = document.getElementById('year');
const month = document.getElementById('month');
const day   = document.getElementById('day');

function populate(){
  year.innerHTML = '';
  for(let y = 1900; y <= 2100; y++){
    year.add(new Option(y, y));
  }

  month.innerHTML = '';
  MONTHS_EN.forEach((m, i) => month.add(new Option(m, i + 1)));
}

function populateDays(y, m, selectedDay){
  day.innerHTML = '';
  const dim = new Date(y, m, 0).getDate();
  const safe = Math.min(selectedDay, dim);

  for(let d = 1; d <= dim; d++){
    day.add(new Option(d, d, false, d === safe));
  }
}

function syncDays(){
  const y = +year.value;
  const m = +month.value;
  const currentDay = +day.value || 1;
  populateDays(y, m, currentDay);
}

/* ===================== MAIN UPDATE ===================== */
async function update(animated = true) {
  const y = +year.value, m = +month.value, d = +day.value;
  const result = document.getElementById('result');
  const meta = document.getElementById('meta');

  try {
    if(state.yearBoundary === 'cny'){
      const cnyY = getCNYDateOrNull(y);
      if(!cnyY) throw new Error(`Missing Chinese New Year for ${y} in the table.`);
    } else {
      const lichunY = getLichunMomentOrNull(y);
      if(!lichunY) throw new Error(`Missing Lìchūn for ${y} in the table.`);
    }

    const birth = new Date(y, m - 1, d);
    const zodiacYear = zodiacYearForDate(birth);

    const { minY, maxY } = supportedZodiacYearRange();
    if (zodiacYear < minY || zodiacYear > maxY) {
      throw new Error(`Zodiac year ${zodiacYear} is outside supported range ${minY}–${maxY}.`);
    }

    const prevZodiacYear = state.zodiacYear; // kan vara null första gången
    const t = rotationTargetsForZodiacYear(zodiacYear);

    // ------- UI-text direkt -------
    result.textContent =
      `${ELEMENTS[t.info.elementIndex]} ${ANIMAL_NAMES_EN[t.info.animalIndex]} • ` +
      `${elementGlyph(ELEMENTS[t.info.elementIndex])} ${animalGlyph(t.info.animalIndex)}`;

const period = zodiacPeriodOrNull(zodiacYear);

const periodLine = period
  ? `Period: ${fmtISO(period.start)} → ${fmtISO(period.end)}`
  : 'Period: (missing data)';

const boundaryLabel =
  state.yearBoundary === 'lichun'
    ? 'Lìchūn, BaZi'
    : 'Chinese New Year';

const boundarySource = ' (Hong Kong Observatory)';

meta.innerHTML =
  `Zodiac year: ${zodiacYear}<br>` +
  `${periodLine}<br>` +
  `Boundary: ${boundaryLabel}${boundarySource}<br>` +
  `Previous: ${zodiacYear - 60} &nbsp; Next: ${zodiacYear + 60}`;

drawCyclePeriodLabels(zodiacYear);

    // ------- 60-årsring: uppdatera direkt bara vid första render / utan animation -------
    if (!animated || prevZodiacYear == null) {
      updateCycleRing(zodiacYear);
    }

    // Markera val (första passet)
    setSelected(t.info.elementIndex, t.info.stemIndex, t.info.animalIndex, zodiacYear);

// ======== ANIMATION ========
if (animated && prevZodiacYear != null) {
  const deltaYears = zodiacYear - prevZodiacYear;

// ------- Animate with astro-clock discipline AND correct number of turns -------
const snap = rotationTargetsForZodiacYear(zodiacYear);

// Degrees per zodiac-year step for each ring.
// NOTE: We keep the sign discipline via DIR and the direction of deltaYears.
// Future (delta>0) => clockwise, Past (delta<0) => counter-clockwise.
const stepStemPerYear   = 360 / 10; // 36° per year (stems/elements/yy)
const stepAnimalPerYear = 360 / 12; // 30° per year (animals)
const stepCyclePerYear  = 360 / 60; // 6° per year (60-year ring)

const target = {
  rotElements: state.rotElements + deltaYears * stepStemPerYear,
  rotYY:       state.rotYY       + deltaYears * stepStemPerYear,
  rotAnimals:  state.rotAnimals  + deltaYears * stepAnimalPerYear,
  rotCycle:    state.rotCycle    + deltaYears * stepCyclePerYear
};

const jump = Math.max(1, Math.abs(deltaYears));
const duration = Math.min(2200, 650 + Math.min(1550, jump * 22));

await animateTo(target, duration);
  // Apply exact snapped rotations (should already match, but keeps it deterministic)
  state.rotElements = snap.rawElements;
  state.rotYY       = snap.rawYY;
  state.rotAnimals  = snap.rawAnimals;
  state.rotCycle    = snap.rawCycleBase;

  applyTransforms();

  // ------- Uppdatera 60-årsringen EFTER animation+snap (minimerar glitch) -------
  updateCycleRing(zodiacYear);

  // Re-markera (cycleRing-texter har fått nya dataset/year)
  setSelected(snap.info.elementIndex, snap.info.stemIndex, snap.info.animalIndex, zodiacYear);

} else {
  // Ingen animation / första gången: snap direkt
  state.rotElements = t.rawElements;
  state.rotYY       = t.rawYY;
  state.rotAnimals  = t.rawAnimals;
  state.rotCycle    = t.rawCycleBase;

  applyTransforms();

  // Första gången / ingen animation: uppdatera 60-ringen direkt
  updateCycleRing(zodiacYear);

  setSelected(t.info.elementIndex, t.info.stemIndex, t.info.animalIndex, zodiacYear);
}

    state.zodiacYear = zodiacYear;

  } catch (e) {
    console.error(e);
    result.textContent = 'Missing data för valt år i tabellen.';
    meta.textContent = e.message;
  }
}

/* ===================== INIT ===================== */
function layoutFocusBox(){
  const padX = 58;
  const boxH = 66;
  const xElement = CX + ELEMENT_R;
  const xAnimal  = CX + ANIMAL_R;

  // Vänster/högerkant runt de två ringarnas glyph-centrum
  const left  = Math.min(xElement, xAnimal) - padX;
  const right = Math.max(xElement, xAnimal) + padX;

  const boxW = right - left;

  // Placera rutan centrerad på dessa två ringar
  const boxX = left;
  const boxY = CY - boxH / 2;

  focusBox.setAttribute('x', boxX);
  focusBox.setAttribute('y', boxY);
  focusBox.setAttribute('width', boxW);
  focusBox.setAttribute('height', boxH);

  focusBox.setAttribute('rx', '14');
  focusBox.setAttribute('ry', '14');
}

function layoutMobileHalfWheel(){
  const vp = document.querySelector('.wheelViewport');
  const svg = vp?.querySelector('svg');
  if(!vp || !svg) return;

  // Matcha samma logik som CSS (viktigt!)
  const isMobile = window.matchMedia(
    '(max-width: 540px), (max-width: 900px) and (hover: none) and (pointer: coarse)'
  ).matches;

  if(!isMobile){
    svg.style.transform = '';
    return;
  }

  // Se till att focusBox har korrekt bbox (kan vara känsligt tidigt vid load)
  const box = focusBox.getBBox();
  const focusCenterX = box.x + box.width/2;  // viewBox units (0..900)
  const focusCenterY = box.y + box.height/2; // viewBox units (0..900)

  const vpW = vp.clientWidth;
  const vpH = vp.clientHeight;

  const svgRect = svg.getBoundingClientRect();
  const svgW = svgRect.width;
  const svgH = svgRect.height;

  // Fokuspunkt i px i det renderade SVG:t
  const focusPxX = (focusCenterX / 900) * svgW;
  const focusPxY = (focusCenterY / 900) * svgH;

  // UI-höjd (bottom sheet)
  const ui = document.querySelector('.ui');
  const uiH = ui ? ui.getBoundingClientRect().height : 0;

  // Målyta: lägg fokus en bit ovanför UI
  const bottomReserve = uiH + 24;            // lite luft
  const maxY = Math.max(90, vpH - bottomReserve);
  const targetY = Math.min(vpH * 0.42, maxY * 0.65); // “känns” bra på iPhone 14/16

  const targetX = vpW / 2;

  const dx = targetX - focusPxX;
  const dy = targetY - focusPxY;

  // translateY(-50%) är “baseline” från CSS-positioneringen (top:50%)
  // Vi lägger dy som extra offset. translateZ(0) kan hjälpa iOS att repain ta emoji-text.
  svg.style.transform = `translate(${dx}px, calc(-50% + ${dy}px)) translateZ(0)`;
}

function relayout(){
  // focusBox är statisk i viewBox, men kalla ändå deterministiskt
  layoutFocusBox();
  layoutMobileHalfWheel();
}

// iOS: adressfältet påverkar layout utan vanlig resize
if(window.visualViewport){
  visualViewport.addEventListener('resize', () => requestAnimationFrame(relayout));
  visualViewport.addEventListener('scroll', () => requestAnimationFrame(relayout));
}

// BFCache: när man kommer tillbaka kan SVG/emoji glappa → tvinga relayout + repaint
window.addEventListener('pageshow', (e) => {
  requestAnimationFrame(() => {
    refreshRingGlyphs();
    applyTransforms();
    relayout();

    // liten repaint-knuff (iOS/Safari)
    const svgEl = document.querySelector('.wheelViewport svg');
    if(svgEl){
      const prev = svgEl.style.opacity;
      svgEl.style.opacity = '0.999';
      requestAnimationFrame(() => {
        svgEl.style.opacity = prev || '1';
      });
    }
  });
});

function setRingLineRadii(){
  document.getElementById('ring0').setAttribute('r', R0);
  document.getElementById('ring1').setAttribute('r', R1);
  document.getElementById('ring2').setAttribute('r', R2);
  document.getElementById('ring3').setAttribute('r', R3);
  document.getElementById('ring4').setAttribute('r', R4);
}

setRingLineRadii();

// Delare/ticks + UI
drawElementTicks();
drawYYTicks();
drawAnimalTicks();
layoutFocusBox();
layoutMobileHalfWheel();
populate();

// Bygg statiska ringar/segment (en gång)
buildElementSectors();
buildElementsStatic();
buildYYStatic();
buildAnimalsStatic();

// Bygg 60-årsringen DOM EN GÅNG (ingen rebuild senare)
initCycleRing();

// Default mode
const mode = document.getElementById('mode');
mode.value = state.mode;

const boundary = document.getElementById('boundary');
boundary.value = state.yearBoundary;

boundary.onchange = async () => {
  state.yearBoundary = boundary.value;
  await update(false);
  layoutMobileHalfWheel();
};

const exportTextBtn = document.getElementById('exportText');

if(exportTextBtn){
  // 🔥 KLONTRICKET: tar bort ALLA gamla event listeners
  const cleanBtn = exportTextBtn.cloneNode(true);
  exportTextBtn.parentNode.replaceChild(cleanBtn, exportTextBtn);

    cleanBtn.onclick = async () => {
    const y = Number(year.value);
    const m = Number(month.value);
    const d = Number(day.value);

    const dateStr = `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

    const resultLine =
        (document.getElementById('result')?.innerText || '').trim();

    const metaText =
        htmlToText(document.getElementById('meta')).trim();

    // Result överst
    const parts = [
        resultLine,
        `Date: ${dateStr}`,
        metaText
    ].filter(s => s.length > 0);

    const text = parts.join('\n') + '\n';

    if(navigator.clipboard && window.isSecureContext){
        try{
        await navigator.clipboard.writeText(text);
        const prev = cleanBtn.textContent;
        cleanBtn.textContent = 'Copied!';
        setTimeout(()=> cleanBtn.textContent = prev, 1200);
        return;
        }catch(e){}
    }

    const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `chinese-zodiac-${dateStr}.txt`;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 0);
    };
}

const infoBtn = document.getElementById('infoBtn');
const infoPanel = document.getElementById('infoPanel');

let infoOpen = false;

function setInfoOpen(open){
  infoOpen = open;
  if(!infoBtn || !infoPanel) return;

  infoBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  infoBtn.textContent = open ? '×' : 'i';
  infoPanel.hidden = !open;
}

/* Toggle via knappen */
if(infoBtn && infoPanel){
  setInfoOpen(false);

  infoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setInfoOpen(!infoOpen);
  });
}

/* Klick UTANFÖR panelen stänger */
document.addEventListener('click', (e) => {
  if(!infoOpen) return;
  if(infoPanel.contains(e.target)) return;
  if(infoBtn.contains(e.target)) return;
  setInfoOpen(false);
});

/* ESC-tangent stänger */
document.addEventListener('keydown', (e) => {
  if(!infoOpen) return;
  if(e.key === 'Escape') setInfoOpen(false);
});

// Initiera dropdowns med dagens datum (EN gång)
{
  const t = new Date();
  year.value  = t.getFullYear();
  month.value = t.getMonth() + 1;
  populateDays(+year.value, +month.value, t.getDate());
}

// Förfyll 60-årsringen med samma år som dropdown visar (EN gång)
updateCycleRing(+year.value);
refreshRingGlyphs();

// Resize/orientation listeners (EN gång)
window.addEventListener('resize', () => requestAnimationFrame(relayout));
window.addEventListener('orientationchange', () => setTimeout(relayout, 50));

/* =========================================================
   DATE BOUNDARY AUTO-UPDATE (midnight + wake), FULL SYNC
========================================================= */

let lastDateKey = new Date().toDateString();
let midnightTimer = null;
let isAutoUpdatingDate = false;

function msUntilNextMidnight(){
  const now  = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0,0,0,0);
  return Math.max(250, next - now);
}

async function applyTodayEverywhere(){
  if(isAutoUpdatingDate) return;
  isAutoUpdatingDate = true;
  try{
    const t = new Date();

    // 1) Uppdatera dropdowns
    year.value  = t.getFullYear();
    month.value = t.getMonth() + 1;
    populateDays(+year.value, +month.value, t.getDate());

    // 2) Uppdatera ringar/glypher
    updateCycleRing(+year.value);
    refreshRingGlyphs();

    // 3) Full render + layout
    await update(false);
    layoutMobileHalfWheel();
    requestAnimationFrame(relayout);
  } finally {
    isAutoUpdatingDate = false;
  }
}

async function handleDateBoundaryIfNeeded(){
  const key = new Date().toDateString();
  if(key !== lastDateKey){
    lastDateKey = key;
    await applyTodayEverywhere();
  }
}

function scheduleMidnightWatcher(){
  if(midnightTimer) clearTimeout(midnightTimer);
  midnightTimer = setTimeout(async () => {
    await handleDateBoundaryIfNeeded();
    scheduleMidnightWatcher();
  }, msUntilNextMidnight());
}

// När man återvänder till fliken (mobiler pausar timers)
document.addEventListener('visibilitychange', () => {
  if(!document.hidden) handleDateBoundaryIfNeeded();
});
window.addEventListener('focus', () => handleDateBoundaryIfNeeded());

/* =========================================================
   APP START
========================================================= */

(async () => {
  applyTransforms();
  await update(false);
  layoutMobileHalfWheel();

  scheduleMidnightWatcher();
  handleDateBoundaryIfNeeded();

  year.onchange = async () => {
    syncDays();
    await update(true);
  };

  mode.onchange = async () => {
    state.mode = mode.value;
    refreshRingGlyphs();
    await update(false);
    layoutMobileHalfWheel();
  };

  month.onchange = async () => {
    syncDays();
    await update(true);
  };

  day.onchange = async () => {
    await update(true);
  };
})();