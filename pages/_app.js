import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';



function MyApp({ Component, pageProps }) {
  return <>
  <head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <title>Demo-4</title>
</head>
  <Component {...pageProps} />
  </>
}

export default MyApp
