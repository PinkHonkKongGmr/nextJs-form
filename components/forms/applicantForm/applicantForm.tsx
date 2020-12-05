import { Form, Input, Button, Radio, Checkbox } from "antd";
import SingleLightWeightFileWithFakeProgressUploader from "../../uiKit/singleLightWeightFileWithFakeProgressUploader";
import {
  applicantFormConsts,
  submitButton,
} from "../../../constants/formConstats";
import "antd/dist/antd.css";
import classes from "./applicantForm.module.scss";

export default function ApplicantForm() {
  const region = "ru";
  const regionConstatns = applicantFormConsts[region];
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 0,
      span: 24,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className={classes.form}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2>{regionConstatns.personalData}</h2>
        <fieldset className="pairInputsfieldset">
          <Form.Item
            label={regionConstatns.name.label}
            name={regionConstatns.name.name}
            rules={[
              {
                required: true,
                message: regionConstatns.name.message,
                pattern: regionConstatns.name.pattern,
              },
            ]}
          >
            <Input placeholder={regionConstatns.name.name} />
          </Form.Item>

          <Form.Item
            label={regionConstatns.lastname.label}
            name={regionConstatns.lastname.name}
            rules={[
              {
                required: true,
                message: regionConstatns.lastname.message,
                pattern: regionConstatns.lastname.pattern,
              },
            ]}
          >
            <Input placeholder={regionConstatns.lastname.name} />
          </Form.Item>
        </fieldset>
        <fieldset className="pairInputsfieldset">
          <Form.Item
            label={regionConstatns.email.label}
            name={regionConstatns.email.name}
            rules={[
              {
                required: true,
                type: regionConstatns.email.name,
                message: regionConstatns.email.message,
              },
            ]}
          >
            <Input placeholder={regionConstatns.email.label} />
          </Form.Item>
          <SingleLightWeightFileWithFakeProgressUploader
            text={regionConstatns.resume.text}
          />
        </fieldset>

        <h2>{regionConstatns.gender.label}*</h2>
        <fieldset className={classes.genderRadioFieldset}>
          <Form.Item
            name={regionConstatns.gender.name}
            rules={[
              { required: true, message: regionConstatns.gender.message },
            ]}
          >
            <Radio.Group>
              <Radio value={regionConstatns.gender.values.male.value}>
                {regionConstatns.gender.values.male.text}
              </Radio>
              <Radio value={regionConstatns.gender.values.female.value}>
                {regionConstatns.gender.values.female.text}
              </Radio>
            </Radio.Group>
          </Form.Item>
        </fieldset>

        <h2>{regionConstatns.github.name}</h2>
        <fieldset className={classes.githubRadioFieldset}>
          <Form.Item
            label={regionConstatns.github.label}
            name={regionConstatns.github.name}
            rules={[
              {
                required: false,
                type: regionConstatns.github.type,
                message: regionConstatns.github.message,
              },
            ]}
          >
            <Input placeholder={regionConstatns.github.label} />
          </Form.Item>
        </fieldset>

        <fieldset className={classes.agreementCheckoutFieldset}>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>* Я согласен с политикой конфиденциальности</Checkbox>
          </Form.Item>
        </fieldset>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {submitButton[region]}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
