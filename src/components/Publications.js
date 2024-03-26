import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../App.css'; // assuming you have a CSS file named Publications.css
import { FaExternalLinkAlt } from "react-icons/fa";

function Publications() {
    return (
        <Container fluid id="publications" className="publications-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                        className="publications-container"
                    >
                        <h2 style={{ textAlign: "center",  marginBottom: "30px" }}>
                            PUBLICATIONS
                        </h2>
                        <h3 style={{ fontSize: "1.6em", textAlign: "center", fontFamily: "Arial", color: "#C499F3",  marginBottom: "20px" }}>
                            Evaluating Bert and GPT-2 Models for Personalised Linkedin Post Recommendation
                        </h3>
                        <p style={{ textAlign: "center" ,  marginBottom: "20px" }}>Social networking platforms have become essential tools for individuals and organisations to connect, communicate, and collaborate in today’s digital age. LinkedIn is a professional social networking platform facilitating career development and job searching. LinkedIn’s traditional post recommendation system limits users to seeing only those posts that have been engaged upon by their following or first-degree connections, limiting the user’s perspective. The proposed system leverages the content posted by the user to provide personalised content delivery on LinkedIn, potentially enhancing user engagement and satisfaction. This research study proposes and examines the performance of three content-based recommender models developed with Machine Learning (ML), Generative Pre-Trained Transformer (GPT-2), and Bidirectional Encoder Representations from Transformers (BERT). In terms of capturing the similarity between user-generated and recommended posts, BERT outperformed the other models, achieving the highest similarity score of 97.13%, compared to GPT-2 (96.27%) and basic ML (95.69%).</p>
                        <Button 
                            variant="primary" 
                            href="https://ieeexplore.ieee.org/document/10307957" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ 
                                display: "block", 
                                margin: "0 auto 20px", 
                                maxWidth: "200px" // adjust this value as needed
                            }}
                        >
                            View Paper  <FaExternalLinkAlt style={{ color: '#F3CCF3' }} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Publications;