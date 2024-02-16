const bcrypt = require('bcrypt');

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.GENERATE_PASSWORD, 10);
  console.log(`Hashed Password: ${hashedPassword}`);
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to hash password:',
    err,
  );
});
