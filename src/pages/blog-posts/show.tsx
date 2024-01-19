import { useParsed, useShow, IResourceComponentsProps, useMany } from "@refinedev/core";
import { Show, MarkdownField } from "@refinedev/antd";
import { Typography, Tag } from "antd";
const { Title, Text } = Typography;


interface filePostShow{
  id:number
  name: string;
}

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
    const { id } = useParsed();
    const { queryResult } = useShow<filePostShow>({ resource: "file-posts",dataProviderName:"file-posts", id });
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Name</Title>
            <Text>{record?.name}</Text>
        </Show>
    );
};

