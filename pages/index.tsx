import { GetServerSideProps } from "next";
import { GetListResponse, LayoutWrapper, useTable } from "@pankod/refine-core";
import { DataProvider } from "@pankod/refine-strapi-v4";
import React from "react";
import Users from "./users";

interface IProduct {
  id: number;
  name: string;
  username: string;
}
type ItemProp = {
  users: GetListResponse<IProduct>;
};

const index: React.FC<ItemProp> = ({ users }) => {
  const { tableQueryResult } = useTable<IProduct>({
    resource: "users",
    queryOptions: {
      initialData: users,
    },
  });

  return (
    <LayoutWrapper>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6  mt-12 px-4 md:px-48 ">
        {tableQueryResult?.data?.data?.map((product) => {
          console.log(product);

          return (
            <>
              <Users id={product.id} name={product.name} />
            </>
          );
        })}
      </div>
    </LayoutWrapper>
  );
};

export default index;

export const getStaticProps: GetServerSideProps = async (context) => {
  const data = await DataProvider(
    "https://jsonplaceholder.typicode.com"
  ).getList<IProduct>({
    resource: "users",
  });

  return {
    props: { users: data },
  };
};
