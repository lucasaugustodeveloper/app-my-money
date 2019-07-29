const fs = require('fs');

fs.writeFileSync('./.env', `BASE_URL=${process.env.BASE_URL}`);
