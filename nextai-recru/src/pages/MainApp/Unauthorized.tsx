import { Button, Form, Input } from "antd";
import { useApiContext } from "../../components/ApiContext";

export interface IApiInput {
  apiKey: string;
}

const Unauthorized: React.FC = () => {
  const { handleSubmit } = useApiContext();

  const [form] = Form.useForm();

//   const passInputValue = (value: IApiInput) => {
//     console.log(value.apiKey);
//     handleSubmit(value.apiKey);
//   };

  return (
    <div>
      unauthorized
      <Form form={form} name="apiKeyHandler">
        <Form.Item
          label="API Key"
          name="apiKey"
          rules={[
            { required: true, message: "Please provide your OpenAI API key!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={()=>{
              form
              .validateFields()
              .then((value: IApiInput) => {
                handleSubmit(value.apiKey);
              })
              .catch((info) => {
                  console.log("Input failed", info);
              })
          }}>
            Submit your API key
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Unauthorized;
