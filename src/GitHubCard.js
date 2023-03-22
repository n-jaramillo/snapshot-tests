import { useEffect, useState } from "react"
import { Button, Card, Container, Image, Row } from "react-bootstrap"


function GitHubCard() {
    const [gitHubPhoto, setGitHubPhoto] = useState('')
    const [gitHubName, setGitHubName] = useState('')
    const [gitHubUsername, setGitHubUsername] = useState('')
    const [gitHubBio, setGitHubBio] = useState('')
    const [gitHubURL, setGitHubURL] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/n-jaramillo')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGitHubPhoto(data.avatar_url)
                setGitHubName(data.name)
                setGitHubUsername(data.login)
                setGitHubBio(data.bio)
                setGitHubURL(data.html_url)
                document.title = `${data.login} (${data.name})`
            })
    }, [])

    return (
        <Container>
            <title>{`${gitHubUsername} (${gitHubName})`}</title>
            <Card className="mx-auto my-5" style={{ width: "340px", backgroundColor: "#0d1117", color: "white" }}>
                <Card.Header style={{ height: "70px", borderBottom: "1px solid #21262d" }}>
                    <Image src={gitHubPhoto} roundedCircle className="position-absolute" style={{ width: "275px", height: "275px", left: "30px", top: "25px" }} />
                </Card.Header>
                <Card.Body className="text-start d-flex" style={{ height: "200px", margin: "218px 30px 0px" }}>
                    <div>
                        <Row style={{ fontSize: "26px", fontWeight: "600" }}>
                            {gitHubName}
                        </Row>
                        <Row style={{ fontSize: "20px", marginTop: "-6px", fontWeight: "300", color: "#828c97" }}>
                            {gitHubUsername} · they/them
                        </Row>
                        <Row style={{ fontSize: "18px", marginTop: "10px" }}>
                            {gitHubBio}
                        </Row>
                        <Row>
                            <Button href={gitHubURL} target="_blank" style={{ width: "275px", height: "34px", marginTop: "15px", backgroundColor: "#21262d", border: "1px solid #363b43", fontSize: "14px" }}>
                                Link to Profile
                            </Button>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default GitHubCard