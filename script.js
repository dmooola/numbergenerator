document.getElementById('generateButton').addEventListener('click', function() {
    var min = parseInt(prompt('Enter the minimum number:'));
    var max = parseInt(prompt('Enter the maximum number:'));
  
    if (!isNaN(min) && !isNaN(max)) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      document.getElementById('result').innerText = 'Random Number: ' + randomNumber;
    } else {
      alert('Please enter valid numbers.');
    }
  });
  
