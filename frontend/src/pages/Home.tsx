import { Input, Text, Button, Row } from 'components';

export const Home = () => {
    return (
        <div>
            <Text fontWeight="bold">Noun Buscas</Text>
            <Row>
            <Input placeholder="Digite uma palavra-chave para buscar um ponto turístico..." />
            <Button>Buscar</Button>
            </Row>
        </div>
    );
};