import * as React from "react"
import Container from '../components/Container'
import Header from '../components/Header'

fetch("http://acnhapi.com/v1/backgroundmusic/", {
    "method": "GET",
    "headers": {}
    })
    .then(response => {
    console.log(response.json());
    })
    .catch(err => {
    console.error(err);
    });

const IndexPage = () => {
  return (
    <Container>
        <Header />
    </Container>
  )
}

export default IndexPage
