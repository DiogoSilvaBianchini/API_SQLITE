require('dotenv/config')
const app = require('./src/app')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))