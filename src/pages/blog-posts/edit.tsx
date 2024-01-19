interface filePostCreate {
  name: string;
}

import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create, Edit } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { useForm, useSelect } from "@refinedev/antd";

export const BlogPostEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<filePostCreate>({
    resource: "file-posts",

    dataProviderName: "file-posts",
    metaData: {
        populate: ["articles", "category"],
      },
  });

  const { selectProps: promtSelectProps } = useSelect({
    resource: "file-props",
    dataProviderName: "file-posts",
    optionLabel: "displayName",
    optionValue: "uid",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Animal Name"
          name={["category", "Animal_Name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
