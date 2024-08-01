import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  function moveVocableup(vocable) {
    getSetNumber();
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
