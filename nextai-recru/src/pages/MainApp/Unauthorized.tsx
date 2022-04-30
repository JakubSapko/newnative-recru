import { Button, Form, Input, message } from "antd";
import { Configuration, OpenAIApi } from "openai";
import styled from "styled-components";
import { useApiContext } from "../../components/ApiContext";
import { useApiResponseContext } from "../../components/ApiResponseContext";

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
  const { handleSubmit, clearApiKey } = useApiContext();
  const { setIsLoading, isLoading } = useApiResponseContext();

  const [form] = Form.useForm();


  const throwMessage = () => {
    message.error("You provided invalid API key!");
  };

  const validateKey = async (apiKey: string) => {
    setIsLoading(true);

    try {
      const config = new Configuration({
        apiKey: apiKey,
      });

      const openAI = new OpenAIApi(config);

      const response = await openAI.createCompletion("text-davinci-002", {
        prompt: `generate some text`,
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    } catch (e) {
      clearApiKey();
      throwMessage();

      return false;
    }

    setIsLoading(false);
    return true;
  };

  return (
    <StyledApiKeyForm>
      <StyledHeader>
        You are unauthorized! Please provide your OpenAI API key below:
      </StyledHeader>
      <Form form={form} name="apiKeyHandler">
        <Form.Item
          label={<label style={{ color: "white" }}>API Key</label>}
          name="apiKey"
          rules={[
            { required: true, message: "Please provide your OpenAI API key!" },
          ]}
        >
          <Input
            placeholder="Please note that your key will be validated!"
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <StyledButton
            loading={isLoading}
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then(async (value: IApiKeyInput) => {
                  if(await validateKey(value.apiKey)){
                    handleSubmit(value.apiKey);
                  }
                  
                })
                .catch((info) => {
                  console.log("Input failed", info);
                });
            }}
          >
            Submit your API key
          </StyledButton>
        </Form.Item>
      </Form>
    </StyledApiKeyForm>
  );
};

export default Unauthorized;
