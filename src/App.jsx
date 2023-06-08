import React from 'react'
import ContactsForm from './components/ContactsForm'
import QuestionsTable from './components/QuestionsTable'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <ContactsForm />
      <QuestionsTable />
    </div>
  )
}

export default App
