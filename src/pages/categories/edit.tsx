interface CategoryEdit{
  Animal_Name: string;
}

import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create, Edit } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { useForm, useSelect, } from "@refinedev/antd";

export const CategoryEdit: React.FC<IResourceComponentsProps> = () => {

    const { formProps, saveButtonProps } = useForm<CategoryEdit>({ resource: "categories", dataProviderName: "category" });


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
                    label="Animal Name"
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
        </Edit>
    );
};



