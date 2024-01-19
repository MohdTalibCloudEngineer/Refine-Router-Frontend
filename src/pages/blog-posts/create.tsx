// import { IResourceComponentsProps } from "@refinedev/core";
// import { AntdCreateInferencer } from "@refinedev/inferencer/antd";

// export const BlogPostCreate: React.FC<IResourceComponentsProps> = () => {
//   return <AntdCreateInferencer />;
// };




interface filePostCreate{
  name: string;
}

import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { useForm, useSelect, } from "@refinedev/antd";

export const BlogPostCreate: React.FC<IResourceComponentsProps> = () => {

    const { formProps, saveButtonProps } = useForm<filePostCreate>({ resource: "file-posts", dataProviderName: "file-posts" });


    const { selectProps: promtSelectProps } = useSelect({
        resource: "file-props",
        dataProviderName: "file-posts",
        optionLabel: "displayName",
        optionValue: "uid",
    }); 


    return (
        <Create saveButtonProps={saveButtonProps}>
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
            </Form>
        </Create>
    );
};



