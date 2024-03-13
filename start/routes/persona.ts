import PersonasController from '#controllers/personas_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/personas', [PersonasController, 'index'])
    router.put('/persona/:id', [PersonasController, 'update'])
    router.post('/persona', [PersonasController, 'store'])
    router.delete('/persona/:id', [PersonasController, 'delete'])
  })
  .use(middleware.auth())
