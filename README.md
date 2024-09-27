<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      display: flex;
      flex-direction: column; /* Stack items vertically */
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-image: url("https://i.ibb.co/3d7jDJf/39661351-a037-4d07-9b78-2878b55a13ed.jpg"); /* Set the background image */
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .btn {
      --color: #FFC0CB;
      --color2: rgb(10, 25, 30);
      width: 200px; /* Set a fixed width for the buttons */
      padding: 0.8em 1.75em;
      background-color: transparent;
      border-radius: 6px;
      border: .3px solid var(--color);
      transition: .5s;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 1;
      font-weight: 300;
      font-size: 17px;
      font-family: 'Roboto', 'Segoe UI', sans-serif;
      text-transform: uppercase;
      color: var(--color);
      margin-bottom: 10px; /* Add margin to separate buttons */
    }

    .btn::after, .btn::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      transform: skew(90deg) translate(-50%, -50%);
      position: absolute;
      inset: 50%;
      left: 25%;
      z-index: -1;
      transition: .5s ease-out;
      background-color: var(--color);
    }

    .btn::before {
      top: -50%;
      left: -25%;
      transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::before {
      transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::after {
      transform: skew(45deg) translate(-50%, -50%);
    }

    .btn:hover {
      color: var(--color2);
    }

    .btn:active {
      filter: brightness(.7);
      transform: scale(.98);
    }
  </style>
</head>
<body>

  <button onclick="window.open(`/pair`)" class="btn">pair code</button>
  <button onclick="window.open(`https://github.com/ANIKMONDALM`)" class="btn">github</button>
  <button onclick="window.open(`https://whatsapp.com/+917479144389`)" class="btn">whatsapp</button>
  <button onclick="window.open(`https://Wa.me/https://chat.whatsapp.com/EybwJjX24t0GLVdYsKIw5w`)" class="btn">whatsapp_group</button>
  <button onclick="window.open(`https://www.instagram.com/b_a_d_b_o_y_699`)" class="btn">instagram</button>

</body>
</html>
