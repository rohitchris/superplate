export interface ICategory {
  id: string;
  title: string;
}
export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}
export interface IUser {
  id: string;
  firstName: string;
  status: "true" | "false";
  birthday: string;
}
export interface ICategory {
  id: string;
  title: string;
}
