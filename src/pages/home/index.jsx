
import './style.css'
import Trash from '../../assets/trash.png'

function home() {

const users = [
  {
    id: '12345678',
    name: 'Rodolfo',
    age: 33,
    email:'rod@email.com',
    
  },
  {
    id: '123456789',
    name: 'Aline',
    age: 28,
    email:'aline@email.com',
    
  },
]
  return (
  
   
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder='Nome' type='text' name='nome' />
          <input placeholder='Idade' type='number' nome='idade' />
          <input  placeholder='E-mail' type="email" name='email' />
          <button>cadastrar</button>
        </form>
        {users.map( user => (
          <div key={user.id} className='card'>
          <div>
            <p>Name: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash}/>
          </button>
        </div>
       
        ) )}
       
      </div>
    
    
  )
}

export default home
