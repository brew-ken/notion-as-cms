// import { notion } from './client';

// export const queryDatabase = async () =>
//   await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID ?? '',
//   });


const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const queryDatabase = async () => {
  const blockId = '2482ad1120a7457dbb0cf0039a9b75b0';
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });

  return response
}

export default queryDatabase