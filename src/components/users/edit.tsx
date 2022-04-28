import { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
  DateField,
  DatePicker,
  Edit,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost } from "src/interfaces";
import dayjs from "dayjs";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const { formProps, saveButtonProps, queryResult } = useForm<IPost>();

  // const { selectProps: categorySelectProps } = useSelect<IPost>({
  //   resource: "categories",
  //   defaultValue: queryResult?.data?.data.category.id,
  // });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Birth Date"
          name="birthday"
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
        })}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: "published",
                value: "published",
              },
              {
                label: "draft",
                value: "draft",
              },
              {
                label: "rejected",
                value: "rejected",
              },
            ]}
          />
        </Form.Item>

        {/* <Form.Item
          label="Category"
          name={["category", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item> */}
        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
