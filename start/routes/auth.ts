import UsersController from '#controllers/users_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.post('/login', [UsersController, 'login'])

router
  .group(() => {
    router.get('/verify_token', [UsersController, 'verifyToken'])
    router.post('/logout', [UsersController, 'logout'])
  })
  .use(middleware.auth({ guards: ['api'] }))
