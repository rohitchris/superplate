import {
  IResourceComponentsProps,
  GetListResponse,
  useMany,
} from "@pankod/refine-core";
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
} from "@pankod/refine-antd";
import { IUser, ICategory } from "src/interfaces";

export const UserList: React.FC<
  IResourceComponentsProps<GetListResponse<IUser>>
> = ({ initialData }) => {
  const { tableProps, sorter } = useTable<IUser>({
    queryOptions: {
      initialData,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="firstName"
          key="firstName"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("firstName", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title="Status"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder("status", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="birthday"
          key="birthday"
          title="Birthday"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("birthday", sorter)}
          sorter
        />
        <Table.Column<IUser>
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
      </Table>
    </List>
  );
};
