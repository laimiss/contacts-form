import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const QuestionsTable = () => {

    const [questions, setQuestions] = useState([])

    async function getDataFromFirestore() {
        const querySnapshot = await getDocs(collection(db, "clientsReq"))
        const tempQuestion = querySnapshot.docs.map(doc => (
            {
                id: doc.id,
                ...doc.data()
            }
        ))
        console.log(tempQuestion)
        setQuestions(tempQuestion)
    }

    useEffect(() => {
        getDataFromFirestore()
    }, [])

    console.log(questions)
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Client Name</th>
                    <th>questions</th>
                </tr>
            </thead>
            <tbody>
                {questions && questions.map((oneQuestion, index) => (
                    <tr key={oneQuestion.id}>
                        <td>{index + 1}</td>
                        <td>{oneQuestion.name}</td>
                        <td>{oneQuestion.client_message}</td>


                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default QuestionsTable
