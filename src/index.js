import { port } from './utils/config';
import app from './app';

app.listen(port, () => console.log(`Server started on port ${port}`));
