import { Input, Text, Button, Row, Column, List, Logo } from 'components';
import { useState } from 'react';


export const Home = () => {
    const [taskPonto, setTaskPonto] = useState('');
    const [tasks, setTasks] = useState<{label: string }[]>([]);

    const handleOKButton = () => {
        if (!taskPonto) return;

        setTasks(previous => {
            const copy = [...previous];
            copy.push({label: taskPonto })
            return copy;
        });
        setTaskPonto('');
    };

    return (
        
        <Column width="600px" margin="0 auto">
            
            <Column width="100%" py="25px" alignItems="center">
                <Logo />
            </Column>

            <Text fontWeight="bold" fontSize="40px" marginTop="5%" pl="10px">Noun Buscas</Text>
            <Text fontWeight="150" fontSize="20px" marginTop="2px" marginBottom="5%" pl="10px">Procure o local desejado</Text>
            <Row width="100%">
            <Input flex={1} 
            placeholder="Digite uma palavra-chave para buscar um ponto turístico..." 
            value={taskPonto}
            onChange={(e) => 
            setTaskPonto(e.target.value)} />
            <Button onClick={handleOKButton}>Buscar</Button>

            </Row>

            <List items={tasks} />

            <Text fontSize="20px" my="5%" pl="10px">Nenhum resultado? Cadastre o ponto desejado:</Text>

            <Column width="100%" py="5px" bg="#94ff83" borderRadius="4px">
                <Button variant="primary">
                    <Text fontSize="bodyExtraLarge" fontWeight="bold" color="primary">
                        Cadastrar um Ponto Turístico
                    </Text>
                </Button>
            </Column>
    
        </Column>
        
    );
};


//my cria espaço e embaixo