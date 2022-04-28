import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { useApiContext } from "../../components/ApiContext";

export interface IApiKeyInput {
  apiKey: string;
}

const StyledApiKeyForm = styled.div`
  width: 720px;
  position: absolute;
  top: 40%;
  left: 25%;
`;

const StyledButton = styled(Button)`
  left: 40%;
`;

const StyledHeader = styled.h2`
  color: white;
  margin-left: 10%;
  font-family: "Raleway", sans-serif;
`;

const Unauthorized: React.FC = () => {
  const { handleSubmit } = useApiContext();

  const [form] = Form.useForm();

  return (
    <StyledApiKeyForm>
      <StyledHeader>You are unauthorized! Please provide your OpenAI API key below:</StyledHeader>
      <Form form={form} name="apiKeyHandler">
        <Form.Item
          label={<label style={{color: "white"}}>API KEY</label>}
          name="apiKey"
          rules={[
            { required: true, message: "Please provide your OpenAI API key!" },
          ]}
        >
          <Input type="password"/>
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" onClick={()=>{
              form
              .validateFields()
              .then((value: IApiKeyInput) => {
                handleSubmit(value.apiKey);
              })
              .catch((info) => {
                  console.log("Input failed", info);
              })
          }}>
            Submit your API key
          </StyledButton>
        </Form.Item>
      </Form>
    </StyledApiKeyForm>
  );
};

export default Unauthorized;
