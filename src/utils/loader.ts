import { getContacts } from "../contracts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
