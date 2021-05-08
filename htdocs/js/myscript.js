window.onload = function() {

    document.getElementById('header').innerHTML += `<style media="screen">
      #header #logo {
        height: 75%;
        width: 150px;
        background-image: url("img/logo.png");
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
      }

      #header #menu {
        background-color: rgb(93, 142, 101);
      }
    </style>
    <div id="logo">
    </div>
    <div id="menu">
      MENU
    </div>`;

document.getElementById('middle').innerHTML +=`
<style media="screen">
  #middle #nav {
    width: 170px;
    background-color: rgb(93, 142, 101);
    float: left;
    height: 100%;
  }
  #nav #plus{
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 10px;
    margin-right: 10px;
    background-image: url("img/plus.png");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;

  }

  #nav #iconbar{
    margin-top: 40px;
  }
  #nav .icon {
    float: right;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background-image: url("img/threedot_before.png");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  #nav .icon2 {
    float: right;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background-image: url("img/edit.png");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
</style>
<div id="nav">
  <div id="plus">

  </div>
  <div id="iconbar">

    <div class="nav1">
      <div class="text">
        test1
      </div>
      <div class="icon">
      </div>
      <div class="icon2">
      </div>
    </div>

  </div>

</div>`;
    var a = document.getElementsByClassName("nav1");
    var b = document.getElementsByClassName("icon");
    var c = document.getElementById('plus');
    var d = document.getElementsByClassName('icon');
    var g = document.getElementsByClassName('text');

  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseover', function(e) {
      b[i].style.backgroundImage = "url('C:/Apache24/htdocs/img/threedot_after.png')";
    });

    a[i].addEventListener('mouseout', function(e) {
      b[i].style.backgroundImage = "url('C:/Apache24/htdocs/img/threedot_before.png')";
    });

    d[i].addEventListener('click', function(e) {

      alert("clicked!");
    });

    g[i].addEventListener('click', function(e) {
      location.href="page1_test1.html";
      console.log(e);

    });
  }

  c.addEventListener('click', function(e) {
    alert("clicked!");
  });



};

function writeFile(name, msg){

	if(name == "") return false;

	var defaultpath = "C:/Apache24/htdocs"; // 기록하고자 하는 경로. ex) C:\\Program Files\\logs

	var fileObject = new ActiveXObject("Scripting.FileSystemObject");

	var fullpath = defaultpath+"\\"+name;

 // 파일이 생성되어있지 않으면 새로 만들고 기록

	if(!fileObject.FileExists(fullpath)){

		var fWrite = fileObject.CreateTextFile(fullpath,false);

		fWrite.write(msg);

		fWrite.close();

	}else{

// 파일이 이미 생성되어 있으면 appending 모드로 파일 열고 기록

		var fWrite = fileObject.OpenTextFile(fullpath, 8);

		fWrite.write(msg);

		fWrite.close();

	}

}
