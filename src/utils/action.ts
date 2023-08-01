import { createContact } from "../contracts";

export async function action() {
  const contact = await createContact();
  return { contact };
}
