export function messageConstruction(verifyEmail, name) {
  const htmlContent = [
    `<!DOCTYPE html>
<html lang="pt-BR" dir="ltr">

<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
<!-- <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&f[]=rosaline@400&display=swap" rel="stylesheet"> -->
<link href="https://api.fontshare.com/v2/css?f[]=supreme@400&f[]=recia@500&f[]=telma@700&display=swap"
rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=supreme@400&f[]=recia@500&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>onfrete</title>
</head>
<style>
body {
    margin: 0;
    font-family: 'Recia', serif;
    box-sizing: border-box;
}

section {
    height: 100vh;
    /* background-color: #D0854E; */
    padding-top: 5rem;
}

.content {
    margin: 0 auto;
    width: 50%;
}

h1 {
    font-size: 4rem;
}

span {
    color: #2998ff;
}

p {
    font-size: 2rem;
}
</style>

<body>
<section>
<div class="content">

<h1>Ola <span>${name}</span></h1>
<p>Para que possamos prosseguir com seu registro basta clicar nesse <a href=${verifyEmail}>link</a></p>
</div>
<!-- <p>nota: esse é um email automático não tente responder por aqui, caso queira entra em contato envie</p> -->
</section>
</body>

</html>`,
  ];
  return htmlContent;
}
