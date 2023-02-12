import Card from 'react-bootstrap/Card';

export default function PageHeader (prop){
    return (
        <>
            <Card className="className">
                <Card.Body>
                    {prop.text}
                </Card.Body>
            </Card>
            <br/>
        </>

    )
}