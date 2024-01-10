    const apikey = "c33267b30314ee91bdaf7b5896bd911a";
    const weatherURL = "https://api.openweathermap.org/data/2.5forecast?lat={lat}&lon={lon}&appid="+ apikey
    const searchBtn = document.getElementById("weathersearch");
    const inputField = document.getElementById("searchcity");

    var today = dayjs();
    document.getElementById('currentday').textContent = today.format('dddd, MMMM D');

    function selectcity(e) {
      e.preventDefault();
      let cityNameInput = inputField.value;
      getdata(cityNameInput);
    }

    function getdata(cityName) {
      let searchUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
        '&lat=38.8&lon=12.09&callback=test&appid=' + apikey + '&units=imperial';

      fetch(searchUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    }

    searchBtn.addEventListener("click", selectcity);


  

