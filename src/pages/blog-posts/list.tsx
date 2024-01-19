import { IResourceComponentsProps } from "@refinedev/core";
import { AntdListInferencer } from "@refinedev/inferencer/antd";

// export const BlogPostList: React.FC<IResourceComponentsProps> = () => {
//   return <AntdListInferencer />;
//   // return (
//   //   <div>This is a blog list component</div>
//   // );
// }

import {
  List,
  useTable,
  useImport,
  ImportButton,
  EditButton,
  ShowButton,
  DeleteButton,
} from "@refinedev/antd";
import { Space, Table } from "antd";

export const BlogPostList: React.FC = () => {
  // const { tableProps } = useTable<IPost>({
  //   // resource:"posts"
  //   resource: "posts",
  //   meta: {
  //     populate: ["attributes"],
  //   },
  // });

  const { tableProps } = useTable<IPost>({
    // resource:"posts"
    resource: "file-posts",
    dataProviderName: "file-posts",
    metaData: {
      populate: ["articles", "category"],
    },
  });

  console.log("Data from table props --->", { ...tableProps });

  // const importProps = useImport<IPostFile>();

  const importProps = useImport({
    // resource: "posts",
    // dataProviderName: "productService",
    // paparseOptions: {
    //     skipEmptyLines: "greedy",
    // },
    // batchSize: 1,

    // onFinish: (result) => {

    //   console.log("FIle data---> ",result.succeeded[0].request[0])
    // },

    mapData: (item) => {
      // console.log("Item from line 38--->", item);
      return {
        sku: item.sku,
        name: item.name,
        mrp: item.mrp,
      };
    },

    // mapData: (item) => {
    //     const attr_item: { [key: string]: string } = Object.keys(item).reduce((acc: any, key) => {
    //         if (key.startsWith("attr-")) {
    //             const newKey = key.replace("attr-", "");
    //             acc[newKey] = item[key];
    //         }
    //         return acc;
    //     }, {});

    //     return {
    //         model: item.sku,
    //         productStatus: "New",
    //         product_service_product_description: {
    //             name: item.name,
    //             primaryKeywords: item.primaryKeywords,
    //             secondaryKeywords: item.secondaryKeywords,
    //         },
    //         location: item.location,
    //         cost: !_.isEmpty(item.cost) ? item.cost : 0,
    //         mrp: !_.isEmpty(item.mrp) ? item.mrp : 0,
    //         price: !_.isEmpty(item.price) ? item.price : 0,
    //         quantity: !_.isEmpty(item.quantity) ? item.quantity : 0,
    //         attribute_model: item.attributeModel,
    //         excel_product_attributes: attr_item,
    //     };
    // },
  });

  console.log("Import data from file---->", { ...importProps });

  return (
    <List headerButtons={<ImportButton {...importProps} />}>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column
          // dataIndex={["articles", 0, "articaleName"]}
          // title="Article"

          dataIndex="articles"
          title="Article"
          render={(articles) => (
            <span>
              {articles.map((article: any, index: any) => (
                <span key={index}>{article.articaleName}</span>
              ))}
            </span>
          )}
        />

        <Table.Column
          // dataIndex={["category", 1, "Animal_Name"]}
          // dataIndex="category"
          // title="Category"

          // dataIndex="category"
          // title="Category"
          // render={(category) => (
          //   <span>
          //     {category &&
          //       category.map((item : any, index:any) => (
          //         <span key={index}>{item.Animal_Name}</span>
          //       ))}
          //   </span>
          // )}

        dataIndex={["category", "Animal_Name"]}
          title="Category"
        />

        <Table.Column<IPost>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />

        {/* <Table.Column dataIndex="sku" title="SKU" /> */}
        {/* <Table.Column dataIndex={["attributes", "0", "name"]} title="Name" /> */}
        {/* <Table.Column dataIndex="id" title="ID" /> */}

        {/* <Table.Column dataIndex="id" title="ID" /> */}
        {/* <Table.Column dataIndex="title" title="Title" /> */}
        {/* <Table.Column dataIndex="content" title="Content" /> */}
        {/* <Table.Column dataIndex={["category", "id"]} title="CategoryId" /> */}
        {/* <Table.Column dataIndex={["image", "0", "url"]} title="Image" />  */}
      </Table>
    </List>
  );
};

interface IPost {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  name: string;
}

interface IPostFile {
  sku: string;
  name: string;
  mrp: number;
}
