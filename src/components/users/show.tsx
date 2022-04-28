import { IResourceComponentsProps, useOne, useShow } from "@pankod/refine-core";
import { Show, Typography, Tag, MarkdownField } from "@pankod/refine-antd";

import { IUser, ICategory } from "src/interfaces";

const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IUser>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  // const { data: categoryData } = useOne<ICategory>({
  //   resource: "categories",
  //   id: record?.category.id ?? "",
  //   queryOptions: {
  //     enabled: !!record?.category.id,
  //   },
  // });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>
        {record?.firstName} {record?.lastName}
      </Text>

      <Title level={5}>Email Address</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Birthday</Title>
      <Text>{record?.birthday} </Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      {/* <Title level={5}>Category</Title>
      <Text>{categoryData?.data.title}</Text> */}

      {/* <Title level={5}>Content</Title>
      <MarkdownField value={record?.content} /> */}
    </Show>
  );
};
