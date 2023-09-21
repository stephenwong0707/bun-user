import { t } from "elysia";
import { Static } from "@sinclair/typebox";

export const userT = t.Object({
	id: t.Optional(t.Number()),
	email: t.String(),
	username: t.String(),
});

export type UserT = Static<typeof userT>;
