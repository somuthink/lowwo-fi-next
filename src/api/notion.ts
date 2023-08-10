import { cache } from 'react'

import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { CardProps, PlaylistProps } from "@/interfaces/Props";
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});



export const getCards = async ()  => {

  const databaseId = process.env.NEXT_PUBLIC_NOTION_CARDS_DATABASE_ID;
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

export const getPlaylists = async ()  => {

  const databaseId = process.env.NEXT_PUBLIC_NOTION_PLAYLISTS_DATABASE_ID;

  interface properties {
    Status: { status: { name: string } };
    Link: { url: string };
    Title: { title: { plain_text: string }[] };
  }

  const normalize = (item: DatabaseObjectResponse) => {
    const prop: properties = item.properties as any;

    if (prop.Status.status.name !== "Ready") {
      return null;
    }

    const result : PlaylistProps = {
      title: prop.Title.title[0].plain_text,
      link: prop.Link.url,
    }

    return result;
  };

  try {


    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: `${databaseId}`,
    });

    const items: PlaylistProps[] = response.results
      .map((item) => normalize(item as DatabaseObjectResponse))
      .filter((item) => item !== null) as PlaylistProps[];

    return items;

  } catch (error) {
    console.error(error);
    return [];
  }
};
