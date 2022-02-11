import NextHead from "next/head";

function Head({title}){
  return(
    <NextHead>
      
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="public/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>

      <link rel="apple-touch-icon" sizes="57x57" href="public/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="public/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="public/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="public/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="public/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="public/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="public/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="public/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="public/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="public/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="public/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="public/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="public/favicon-16x16.png"/>
      <link rel="manifest" href="public/manifest.json"/>
      <link rel="canonical" href="https://www.agenciamilkshake.com.br" />

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
      <title>
        {title}
      </title>
    </NextHead>
  )
}


export default Head;