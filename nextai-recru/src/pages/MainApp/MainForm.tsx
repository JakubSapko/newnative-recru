import { Button, Form, Input, Select } from "antd";
import styled from "styled-components";
import { useApiContext } from "../../components/ApiContext";
import { useApiResponseContext } from "../../components/ApiResponseContext";
import "../../global.css";

interface IApiInput {
  prompt: string;
  philosopher: string;
}

const StyledPromptForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 30px;
  margin: 10px auto;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const StyledInput = styled(Input)`
  width: 300px;
`;

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
        max_tokens: 120,
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
        return "Nietzsche.png";
      case "Marx":
        return "Marx.png";
      case "Saint Augustin":
        return "StAugustin.png";
      default:
        return "";
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const Philosophers = {
    Plato: "Plato",
    MarcusAurelius: "Marcus Aurelius",
    Socrates: "Socrates",
    Nietzsche: "Nietzsche",
    Marx: "Marx",
    StAugustin: "Saint Augustin",
  };

  return (
    <Wrapper>
      <StyledPromptForm
        requiredMark={"optional"}
        form={form}
        name="apiConnector"
      >
        <Form.Item
          label={<label style={{ color: "white" }}>Generate a </label>}
          name="philosopher"
          rules={[
            {
              required: true,
              message: "Please select the philosopher of your choice",
            },
          ]}
        >
          <Select
            placeholder="Philosopher"
            style={{ width: 170 }}
            onChange={handleChange}
          >
            {Object.entries(Philosophers).map(([key, value]) => (
              <Option value={value}>{value}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ color: "white" }}>-like</Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}> quote on</label>}
          name="prompt"
          rules={[
            {
              required: true,
              message: "Please provide your philosophical request!",
            },
          ]}
        >
          <StyledInput
            id="submitBtn"
            placeholder="(e.g.) money, bread, dogs, neural networks"
            autoComplete="off"
          />
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
                })
                .catch((info) => {
                  console.log("Input failed", info);
                });
            }}
          >
            Get your quote!
          </Button>
        </Form.Item>
      </StyledPromptForm>
    </Wrapper>
  );
};

export default MainForm;
