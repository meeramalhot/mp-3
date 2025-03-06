import { TextDiv } from "./HomePage";
import { WorkDiv, Title, MiniTitle} from "./WorkPage";
import Calculator from "./Calculator";


export default function Projects() {
    return (
        <WorkDiv>
            <TextDiv>
            <Title>Projects</Title>
                <MiniTitle>American Sign Language Translation Server</MiniTitle>
                <p>An example of cyber physical computing, I worked on a server that follows https protocol and
                    can render webpages (written in C), that also
                    communicates with a ML backend (written in Python using scikit-learn's RandomForestClassifier,
                    numpy, and computer vision packages like mediapipe and cv2) that's trained to interpret ASL
                    from a RaspberryPi camera.</p><br></br>
                <a href="https://github.com/meeramalhot/asl_server">Check it out here!</a>
                <MiniTitle>Gradient and Lasso/Ridge Stock Prediction Models</MiniTitle>
                <p>I worked on two models, one using xdgboost for gradient boosting, as well as a lasso and ridge models
                    for next day SPY predictions using Python, pandas, sci-kit learn, and yfinance API.</p><br></br>
                <a href="https://github.com/meeramalhot/spy_prediction_models">Check it out here!</a>
                <MiniTitle>React.js Calculator</MiniTitle><br></br>

                <Calculator />

            </TextDiv>
        </WorkDiv>

);
}

//three use states -> one for first input, second input, output