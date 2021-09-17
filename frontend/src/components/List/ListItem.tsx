import { Column, Row, Text } from 'components';

export type ListItemProps = {
  label: string;
//   id: number;
//   nome: string;
//   descricao: string;
//   localizacao: string;
//   cidade: string;
//   estado: string;
//   task: string;
  //isDone: number;
  //onClick: (id: number) => void;
  //isActive: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return (
    <Column
      width="100%"
      bg="rgba(0, 0, 0, 0.2)"
      p="20px"
      mb="10px"
      cursor="pointer"
      borderRadius="4px"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
    >
        <Row>
        <Text>{label}</Text>
        {/* <Text>{id}</Text>
        <Text>{nome}</Text>
        <Text>{descricao}</Text>
        <Text>{localizacao}</Text>
        <Text>{cidade}</Text>
        <Text>{estado}</Text>
        <Text>{task}</Text> */}
      
        
      </Row>
    </Column>
  );
};

