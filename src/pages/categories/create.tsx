interface CategoryCreate{
  Animal_Name: string;
}

import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { useForm, useSelect, } from "@refinedev/antd";

export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {

    const { formProps, saveButtonProps } = useForm<CategoryCreate>({ resource: "categories", dataProviderName: "category" });


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
                    label="Animanal Name"
                    name="Animal_Name"
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



