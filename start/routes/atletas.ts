import AtletasController from '#controllers/atletas_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/atletas', [AtletasController, 'index'])
    router.put('/atleta/:id', [AtletasController, 'update'])
    router.post('/atleta', [AtletasController, 'store'])
    router.delete('/atleta/:id', [AtletasController, 'delete'])
  })
  .use(middleware.auth())