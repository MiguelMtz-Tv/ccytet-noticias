import HelloWorld   from './components/HelloWorld.vue'
import SecondPage   from './components/SecondPage.vue'
import IndexNoticia from './pages/Noticias/IndexNoticia.vue'
import CrearNoticia from './pages/Noticias/CrearNoticia.vue'

export const routes: Array<{path: string, component: any}> = [
  //Inicio
  { path: '/',          component:  HelloWorld},
  { path: '/second',    component:  SecondPage},

  //noticias
  { path: '/noticias',        component:  IndexNoticia },
  { path: '/noticias/crear',  component:  CrearNoticia }
]