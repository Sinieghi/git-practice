import { UnauthorizedError } from "../errors/index.js";
export const checkPermissions = ({ requestUser, resourceUserId }) => {
  if (requestUser === resourceUserId.toString()) {
    return;
  }
  throw new UnauthorizedError("acesso não ");
};
