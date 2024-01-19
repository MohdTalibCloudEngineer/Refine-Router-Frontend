import { useParsed, useShow, IResourceComponentsProps, useMany } from "@refinedev/core";
import { Show, MarkdownField } from "@refinedev/antd";
import { Typography, Tag } from "antd";
const { Title, Text } = Typography;


interface CategoryShow{
  Animal_Name: string;
}

export const CategoryShow: React.FC<IResourceComponentsProps> = () => {
    const { id } = useParsed();
    const { queryResult } = useShow<CategoryShow>({ resource: "categories",dataProviderName:"category", id });
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Animal Name</Title>
            <Text>{record?.Animal_Name}</Text>
        </Show>
    );
};

