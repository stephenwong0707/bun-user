import { PrismaClient } from "@prisma/client";
import { UserT } from "../../api/user/model";

export const createUser = (db: PrismaClient, userT: UserT) => {
	return db.user.create({
		data: {
			email: userT.email,
			username: userT.username,
		},
	});
};
