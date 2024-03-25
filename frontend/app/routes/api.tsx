import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const data = context.remixService.getHello();
  console.log(data);
  return json(data);
};

export default function Page() {
  const data = useLoaderData<typeof loader>();
  return <h1>Hello, world! {data}</h1>;
}
