const ValidPassword = () =>   <h1>Valid Password</h1>
const InvalidPassword = () =>   <h1>Invalid Password</h1>



const Password = ({isValid}) => {

  return isValid? <ValidPassword/> : <InvalidPassword/>
}

const App = () => {
  return (
  <section>
    <Password isValid = {true}/>
  </section>
  )
}
export default App;