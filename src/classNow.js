import { SimpleInput } from "./components/Inputs"

// Me - App
function App() {
  return (
  <Decagon pod="python" number="6" /> // Adams
  )
}
function Decagon(props) {
  const {number, pod} = props
  let room = "pepper"
  return (
    <h1>I belong to the {pod} pod</h1>
    <h2>We are {number} in the pod</h2>
    <Python room={room} number={number} />
  )
}

function Python(props) {
  const {room, number} = props
  return (
    <h1>We use the {room} room to teach {number} decadevs.</h1>
  )
}

<Card children={<SimpleInput/>} />

function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

const [values, setValues] = useState({
  name: "",
  email: "",
  valid: true
})

useEffect(() => {
  axios.get(BASE_URL + `/users?${id}`).then(res => setValues({...values, name: res.data.payload.name}))
}, [values.valid]);

useEffect(() => {
  
})


{props.name}

const [name, setName] = useState("");
const [email, setEmail] = useState("");

const handleNameChange = e => setName(e)

const handleChange = e => setValues({...values, [e.target.name]: e.target.value})

<form>
  <input type="text" name="name" placeholder="enter name" onChange={handleChange} value={values.name} />
  <input type="email" name="email" placeholder="enter email" onChange={handleChange} />
</form>


const [number, setNumber] = useState(0)

defaultProps = {
  name: "Adams"
}