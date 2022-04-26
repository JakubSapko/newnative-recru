import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useApiContext } from "../../components/ApiContext";


interface IApiInput {
    apiKey: string
}

const Unauthorized: React.FC = () => {
  const { handleSubmit } = useApiContext();


  const passInputValue = (value: IApiInput) => {
    console.log(value.apiKey);
    handleSubmit(value.apiKey);
  };

  return (
    <div>
      unauthorized
      <Form name="apiKeyHandler" onFinish={passInputValue}>
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
          <Button type="primary" htmlType="submit">
            Submit your API key
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Unauthorized;
