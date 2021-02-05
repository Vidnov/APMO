var FirstName = document.getElementById('FirstName')
var LastName = document.getElementById('LastName')
var SecondName = document.getElementById('SecondName')
var PresentBlock = document.getElementById('content1').style
var FinishBlock = document.getElementById('content2').style
var Server = document.getElementById('server')
var Cli = document.getElementById('cli')
var Company = document.getElementById('company')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  options ={
      height:580
  }

async function getData() {

    let response = await fetch('http:localhost:8888/test', {
        method: 'GET',
        mode: 'no-cors'
    })

    let data = await response.json()

    let peoples = data.peoples
    let frameworks = data.frameworks
    let company = data.company

    Company.innerHTML = company

    Server.innerHTML = frameworks.server
    Cli.innerHTML = frameworks.client

    PresentBlock.display = "none";
    FinishBlock.display = "block";





    FirstName.innerHTML = peoples[0].FirstName
    LastName.innerHTML = peoples[0].LastName
    SecondName.innerHTML = peoples[0].SecondName


}

