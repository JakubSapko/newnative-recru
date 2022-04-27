import { Button, Form, Input } from "antd";
import { useApiContext } from "../../../components/ApiContext";
import { IApiInput } from "../Unauthorized";

const AcessedApp: React.FC = () => {
  const { openAiMemo } = useApiContext();
  const [form] = Form.useForm();

  //   const passInputValue = (value: IApiInput) => {
  //     console.log(value.apiKey);
  //     handleSubmit(value.apiKey);
  //   };

  // const { Configuration, OpenAIApi } = require("openai");

  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  const handleSubmit = async (value: string) => {
    if (openAiMemo) {
      const response = await openAiMemo.createCompletion("text-davinci-002", {
        prompt: "generate a Marx-like philosophical quote on cats.",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response);
      return response;
    }
    return null;
  };

  return (
    <div>
      authorized
      <Form form={form} name="apiConnector">
        <Form.Item
          label="Your philosophical request"
          name="prompt"
          rules={[
            {
              required: true,
              message: "Please provide your philosophical request!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((value: IApiInput) => {
                  handleSubmit(value.apiKey);
                })
                .catch((info) => {
                  console.log("Input failed", info);
                });
            }}
          >
            Submit your request
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AcessedApp;
