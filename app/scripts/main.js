'use strict';

function playSound(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('div[data-key="' + e.keyCode + '"]');

  if (!audio) return;

  key.classList.add('playing');

  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function setDate(){
  const now = new Date();

  const secondHand = document.querySelector('.sec-hand');
  const minutesHand = document.querySelector('.min-hand');
  const hoursHand = document.querySelector('.hour-hand');

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
  minutesHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
  hoursHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';

  console.log(hours, ":", minutes, ":", seconds);
}


function handleUpdate(){
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const body = document.querySelector('body');

switch (body.classList[0]){
  case "drumkit":
    console.log("drumkit");

    window.addEventListener('keydown', playSound);
    var keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(function (key) {
      return key.addEventListener('transitionend', removeTransition);
    });
    break;
  case "jsclock":
    console.log("jsclock");


    setInterval(setDate, 1000);
    break;
  case "cssvariables":
    console.log("cssvariables");

    const inputs = document.querySelectorAll('.controls input');

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    break;

  case "arraycardio1":
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))

    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

    const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

    console.log(fullnames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const sorted = inventors.sort((a,b) => a.year < b.year ? -1 : 1)

    console.table(sorted);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    const sumyears = inventors.reduce((acc, inventor) => acc + (inventor.passed - inventor.year), 0)

    console.log(sumyears);

    // 5. Sort the inventors by years lived

    const sortedByYearsLived = inventors.sort((a,b) => {
        var aLived = a.passed - a.year;
        var bLived = b.passed - b.year;

        return aLived < bLived ? -1 : 1
    })

    console.table(sortedByYearsLived);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const sortedByName = people.sort((a,b) => {
        const [aLast, aFirst] = a.split(', ');
        const [bLast, bFirst] = b.split(', ');
        return aLast < bLast ? -1 : 1;
    })

    console.log(sortedByName);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce((acc, item) => {
      if(!acc[item]) {
        acc[item] = 0;
      } else {
        acc[item]++;
      }
      console.log(item); acc[item] += 1
    }, {})

    console.log(transportation);
    break;
}

//# sourceMappingURL=main.js.map
