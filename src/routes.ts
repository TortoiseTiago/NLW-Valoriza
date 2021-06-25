import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserController } from "./controllers/ListUsersController";
import { ListSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listUserSendCompliment = new ListSenderComplimentsController();
const listUserReceiverCompliment = new ListReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.get(
  "/users/compliments/send",
  ensureAuthenticate,
  listUserSendCompliment.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticate,
  listUserReceiverCompliment.handle
);
router.get("/tags", ensureAuthenticate, listTagsController.handle);
router.get("/users", ensureAuthenticate, listUsersController.handle);

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticate,
  ensureAdmin,
  createTagController.handle
);
router.post(
  "/compliments",
  ensureAuthenticate,
  createComplimentController.handle
);

export { router };
