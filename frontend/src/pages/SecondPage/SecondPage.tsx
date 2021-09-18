import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, Header, Form, ButtonWrapper } from './styled'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { states } from "../../constants/statesOptions";



const SecondPage: React.FC = () => {

  //Usado o YUP para validação do cadastro
  const SignupSchema = Yup.object().shape({
    nome: Yup.string().required('Insira um Nome para continuar'),
    cidade: Yup.string().required('Insira uma Cidade para continuar'),
    referencia: Yup.string().required('Insira uma Referência para continuar'),
    descricao: Yup.string().max(100, "Número máximo de descrição é de 100 caracteres").required('Insira uma Descrição para continuar'),
    estado: Yup.string().required('Insira um Estado para continuar')
  });

  const formik = useFormik({
    initialValues: {
      nome: '',
      cidade: '',
      referencia: '',
      descricao: '',
      estado: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const { nome, cidade, referencia: localizacao, descricao, estado } = values
      try {
        await api.post('/PontosTuristicos', { nome, cidade, localizacao, descricao, estado });
        toast.success("Ponto turístico cadastrado")
        formik.resetForm()
      } catch (err) {
        toast.warning('Erro ao cadastrar, tente novamente');
      }
    },
  });
  //#endregion

  const history = useHistory();
  const voltar = () => {
    history.push(`/`);
  };


  return (
    <Container>

      <Header>
        <div className="logo"><img src={process.env.PUBLIC_URL + '/logoinsta.png'} alt="logo" width="20%" height="20%" /> </div>

      </Header>

      <Form onSubmit={formik.handleSubmit}>

        <div> <h5>Nome: </h5>
          <Input
            name="nome"
            placeholder="Nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            size="default"
            className={formik.errors.nome && 'displayErrors'} />
          {formik.errors.nome && formik.touched.nome && <span>{formik.errors.nome}</span>}
        </div>

        <h3>Localidade: <br /> </h3>
        <br />
        <div>
          <h5>UF: </h5>
          <Select
            name='estado'
            placeholder="Estado"
            size="default"
            options={states}
            value={formik.values.estado}
            onChange={formik.handleChange}
            className={formik.errors.estado && 'displayErrors'}
          />
          <br />
          {formik.errors.estado && formik.touched.estado && <span>{formik.errors.estado}</span>}
        </div>

        <div>
          <h5>Cidade: </h5>
          <Input
            name="cidade"
            value={formik.values.cidade}
            placeholder="Cidade"
            onChange={formik.handleChange}
            size="default"
            className={formik.errors.cidade && 'displayErrors'}
          />
          {formik.errors.cidade && formik.touched.cidade && <span>{formik.errors.cidade}</span>}
        </div>

        <h5>Referencia: </h5>
        <div>
          <Input
            name="referencia"
            value={formik.values.referencia}
            placeholder="Referencia"
            onChange={formik.handleChange}
            size="default"
            className={formik.errors.referencia && 'displayErrors'}
          />
          {formik.errors.referencia && formik.touched.referencia && <span>{formik.errors.referencia}</span>}
        </div>

        <h5>Descrição: </h5>
        <div>
          <Input
            name="descricao"
            value={formik.values.descricao}
            placeholder="Descrição"
            onChange={formik.handleChange}
            size="default"
            className={formik.errors.descricao && 'displayErrors'}
          />
          {formik.errors.descricao && formik.touched.descricao && <span>{formik.errors.descricao}</span>}
        </div>

        <ButtonWrapper>
          <Button type='button' onClick={() => voltar()} label='Voltar' variant='primary' size='small' />
          <Button type="submit" label='Salvar' variant='primary' size='small' />
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

export default SecondPage;


