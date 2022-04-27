import { Button, Form, Input, Select } from "antd";
import { useApiContext } from "../../../components/ApiContext";

interface IApiInput {
  prompt: string;
  philosopher: string;
}

const AcessedApp: React.FC = () => {
  const { openAiMemo } = useApiContext();
  const [form] = Form.useForm();

  const { Option } = Select;

  const handleSubmit = async (prompt: string, philosopher: string) => {
    if (openAiMemo) {
      const response = await openAiMemo.createCompletion("text-davinci-002", {
        prompt: `generate a ${philosopher}-like philosophical quote on ${prompt}.`,
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

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const Philosophers = {
      Platon: "Platon",
      MarcusAurelius: "Marcus Aurelius",
      Socrates: "Socrates",
      Nietzsche: "Nietzsche",
      Marx: "Marx",
      StAugustin: "Saint Augustin"
  }

  return (
    <div>
      authorized
      <Form form={form} name="apiConnector">
        <Form.Item label="Choose your philosopher" name="philosopher" rules={[{required: true, message: "Please select the philosopher of your choice"}]}>
          <Select
            style={{ width: 170 }}
            onChange={handleChange}
          >
              {Object.entries(Philosophers).map(([key, value]) => <Option value={value}>{value}</Option>)}
          </Select>
        </Form.Item>
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
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((values: IApiInput) => {
                  console.log(values);
                  handleSubmit(values.prompt, values.philosopher);
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
