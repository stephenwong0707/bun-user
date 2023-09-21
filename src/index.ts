import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import { userT } from "./api/user/model";
import { handleCreateUser } from "./api/user/handler";

const db = new PrismaClient();

const app = new Elysia()
	.use(swagger())
	.onError(({ code }) => {
		return new Response(code, { status: 500 });
	})
	.state("db", db)
	.get("/", () => "hello world")
	.post("/user", handleCreateUser, {
		body: userT,
		response: userT,
	})
	.listen(8080);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
