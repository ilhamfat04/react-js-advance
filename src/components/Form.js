// create style here
const styles = {
  form: {
    margin: "15px 10px",
    backgroundColor: "blue"
  },
  newInput: {

  }
}

// create Form component
function Form() {
  return (
    // code inside div
    <form style={styles.form} >
      <div style={{ marginBottom: "20px" }} >
        <label htmlFor="usernameInput"
          style={{ display: "block", marginBottom: "5px" }}
        >Username</label>
        <input
          type="text"
          id="usernameInput"
          placeholder="type username here"
          style={{
            padding: "10px",
            borderRadius: "10"
          }} />
        <input type="text" name="" id="" style={styles.newInput} />
      </div>

      <button style={{
        cursor: "pointer",
        padding: "5px 20px"
      }}>Submit</button>
    </form>
  )
}

export default Form
