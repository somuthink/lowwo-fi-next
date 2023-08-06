import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { CardProps } from "@/interfaces/CardProps";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export const getCards = async ()  => {

  interface properties {
    Sound_src: { url: string };
    Status: { status: { name: string } };
    Image_src: { url: string };
    Description: { rich_text: { plain_text: string }[] };
    Background_src: { url: string };
    Title: { title: { plain_text: string }[] };
  }

  const normalize = (item: DatabaseObjectResponse) => {

    const prop: properties = item.properties as any;

    if (prop.Status.status.name !== "Ready") {
      return null;
    }

    const result : CardProps = {
      title: prop.Title.title[0].plain_text,
      description: prop.Description.rich_text[0].plain_text,
      imageSrc: prop.Image_src.url,
      soundSrc: prop.Sound_src.url,
      backgroundSrc: prop.Background_src.url,
    }

    return result;
  };

  try {



    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: `${databaseId}`,
    });

    const items: CardProps[] = response.results
      .map((item) => normalize(item as DatabaseObjectResponse))
      .filter((item) => item !== null) as CardProps[];

    return items;

  } catch (error) {
    console.error(error);
    return [];
  }
};


export const netlyTest = async ()  => {

  return "hello"
}