import userCreate from '#controllers/create_user_controller';
import router from '@adonisjs/core/services/router';
router.post('/user', [userCreate, 'create']);
//# sourceMappingURL=user.js.map