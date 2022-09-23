import { useState } from 'react'

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: ''
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [form, setForm] = useState({
    userFirstame: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999',
  })

  function handleChange(e) {
    e.preventDefault()
    const inputName = e.target.name
    const value = e.target.value
    console.log(inputName, value)
    setForm({ ...form, [inputName]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addEntryToPhoneBook(form)
  }

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstame'
        name='userFirstame'
        type='text'
        value={form.userFirstame}
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={form.userLastname}
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={form.userPhone}
        onChange={handleChange}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
    </table>
  )
}

function App() {
  return (
    <section>
      <PhoneBookForm />
      <InformationTable />
    </section>
  )
}

export default App
