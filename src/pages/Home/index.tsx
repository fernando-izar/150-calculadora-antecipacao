import {Container} from './style';
import {RequestValues} from '../../components/RequestValues';
import {ResponseValues} from '../../components/ResponseValues';

export const Home = () => {
    return (
        <Container>
            
                <RequestValues />
                <ResponseValues />
            
        </Container>
    );
    };