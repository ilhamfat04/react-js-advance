// import necessary react-bootstrap component 
import { Button, Container } from "react-bootstrap";

// import hooks from react-router-dom here
import { useHistory } from "react-router-dom"

function Home() {

  // call that hooks here and store to variable
  const history = useHistory()

  // create function here for handle push to another pages
  const handleClick = () => {
    setTimeout(() => {
      history.push("/signin")
    }, 3000)
  }
  return (
    <Container className="text-center">
      <p className="h1">Home</p>
      <p>
        Cras sit amet mauris ac urna pellentesque rhoncus sed nec felis. Sed
        augue tortor, pretium euismod massa eu, fringilla viverra ante. Proin ut
        nisl neque. In varius nibh eget diam pharetra, sed gravida sem commodo.
        Proin in tortor tristique lorem dignissim elementum. Quisque gravida
        augue quis aliquam ultrices. Nullam risus est, malesuada vitae pretium
        eu, congue a magna. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec et maximus tellus, sit
        amet hendrerit augue.
      </p>
      {/* code element here */}
      <Button variant="success" onClick={handleClick} >Click To SignIn</Button>
    </Container>
  );
}

export default Home;
