export async function saveRefreshToken(connection, sno, token) {

  await connection.execute(
    `INSERT INTO USER_TOKENS(SNO, REFRESH_TOKEN)
     VALUES (:sno, :token)`,
    [sno, token]
  );
}