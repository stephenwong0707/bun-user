import { PrismaClient } from "@prisma/client";
import { UserT } from "./model";
import { createUser } from "../../data/user/create";

export const handleCreateUser = async ({
	body,
	store: { db },
}: { body: UserT; store: { db: PrismaClient } }) => await createUser(db, body);
