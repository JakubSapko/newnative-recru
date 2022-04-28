import { Button, Form, Input, Select } from "antd";
import { useApiContext } from "../../components/ApiContext";
import { useNavigate } from "react-router-dom";
import { useApiResponseContext } from "../../components/ApiResponseContext";

interface IApiInput {
  prompt: string;
  philosopher: string;
}

const MainForm: React.FC = () => {
  const { openAiMemo } = useApiContext();
  const [form] = Form.useForm();

  const { Option } = Select;

  const { setStatesAfterResponse, setIsLoading, isLoading } =
    useApiResponseContext();

  const handleSubmit = async (prompt: string, philosopher: string) => {
    if (openAiMemo) {
      setIsLoading(true);

      const response = await openAiMemo.createCompletion("text-davinci-002", {
        prompt: `generate a ${philosopher}-like philosophical quote on ${prompt}.`,
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      setStatesAfterResponse(
        response.data.choices?.[0].text || "",
        philosopher,
        determinePhoto(philosopher)
      );
      setIsLoading(false);
    }
    return null;
  };

  const determinePhoto = (philosopher: string) => {
    switch (philosopher) {
      case "Plato":
        return "Plato.png";
      case "Marcus Aurelius":
        return "Marcus_Aurelius.png";
      case "Socrates":
        return "Socrates.png";
      case "Nietzsche":
        return "Nieztsche.png";
      case "Marx":
        return "Marx.png";
      case "Saint Augustin":
        return "StAugustin";
      default:
        return "";
    }
  };

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const Philosophers = {
    Plato: "Plato",
    MarcusAurelius: "Marcus Aurelius",
    Socrates: "Socrates",
    Nietzsche: "Nietzsche",
    Marx: "Marx",
    StAugustin: "Saint Augustin",
  };

  return (
    <div>
      <Form form={form} name="apiConnector">
        <Form.Item
          label="Choose your philosopher"
          name="philosopher"
          rules={[
            {
              required: true,
              message: "Please select the philosopher of your choice",
            },
          ]}
        >
          <Select style={{ width: 170 }} onChange={handleChange}>
            {Object.entries(Philosophers).map(([key, value]) => (
              <Option value={value}>{value}</Option>
            ))}
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
            loading={isLoading}
            onClick={() => {
              form
                .validateFields()
                .then((values: IApiInput) => {
                  console.log(values);
                  handleSubmit(values.prompt, values.philosopher);
                  // navigate("/philo");
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

export default MainForm;
