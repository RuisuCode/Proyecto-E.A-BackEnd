import router from '@adonisjs/core/services/router';
import './routes/auth.js';
import './routes/persona.js';
import './routes/user.js';
router.get('/', async () => {
    return {
        hello: 'Server online',
    };
});
import { sep, normalize } from 'node:path';
import app from '@adonisjs/core/services/app';
const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
router.get('/uploads/*', ({ request, response }) => {
    const filePath = request.param('*').join(sep);
    const normalizedPath = normalize(filePath);
    if (PATH_TRAVERSAL_REGEX.test(normalizedPath)) {
        return response.badRequest('Malformed path');
    }
    const absolutePath = app.makePath('uploads', normalizedPath);
    return response.download(absolutePath);
});
//# sourceMappingURL=routes.js.map