import Form from 'react-bootstrap/Form'

const ContactsForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter name'/>
            </Form.Group>
            <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder='name@example.com' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    )
}

export default ContactsForm
