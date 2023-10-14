const LogoutUserLoaidng = () => {
  return (
    <div
      className="loading-container"
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        zIndex: "9999",
        background: "var(--white)",
      }}
    >
      <div className="loader" style={{ margin: "20rem auto" }}></div>
    </div>
  );
};

export default LogoutUserLoaidng;
