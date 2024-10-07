PE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pair with me</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-image: url("https://i.ibb.co/3d7jDJf/39661351-a037-4d07-9b78-2878b55a13ed.jpg"); /* Set the background image */
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      font-family: Arial, sans-serif;
    }
  color: #000; /* Set the text color to black (#000) */
}

.input-container input {
  color: #000; /* Set the text color to black (#000) */
}

.centered-text {
  color: #000; /* Set the text color to black (#000) */
}

  
   
}
  </style>
</head>
<body>
  <div class="container">
    <div class="main">
      <div class="box" id="box">
        <div id="text">
          <i class="fa fa-user"></i>
          <p>
            <h3 class="centered-text">Link with phone number</h3>
            <br>
            <h6>Enter your number with country code.</h6>
            <div class="input-container">
                <input placeholder="+917479144389" type="number" id="number" placeholder="enter your phone number with country code" name="">
                <button id="submit">enter</button>
              </div>
             
              <a id="waiting-message" class="centered-text" style="display: none;">in process...</a>
              <br>
              <br>
              <main id="pair"></main>
          </p>
        </div>
      </div>
    </div>
  </div>
  <script
  src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"
></script>
  <script>
    let a = document.getElementById("pair");
    let b = document.getElementById("submit");
    let c = document.getElementById("number");
    let box = document.getElementById("box");
