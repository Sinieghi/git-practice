export const setupTokenForUser = (user) => {
  return {
    name: user.name,
    userId: user._id,
    role: user.role,
    signaturePlan: user.signaturePlan,
    isDeletede: user.isDeletede,
  };
};
