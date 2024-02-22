import HelloWorld   from './components/HelloWorld.vue'
import SecondPage   from './components/SecondPage.vue'
import IndexNoticia from './pages/Noticias/IndexNoticia.vue'
import CrearNoticia from './pages/Noticias/CrearNoticia.vue'
import IndexConvocatoria from './pages/Convocatorias/IndexConvocatoria.vue'
import CrearConvocatoria from './pages/Convocatorias/CrearConvocatoria.vue'
import IndexESF from './pages/EstadosSituacionFinanciera/IndexESF.vue'
import CrearESF from './pages/EstadosSituacionFinanciera/CrearESF.vue'

export const routes: Array<{path: string, component: any}> = [
  //Inicio
  { path: '/',                      component:  HelloWorld},
  { path: '/second',                component:  SecondPage},

  //noticias
  { path: '/noticias',              component:  IndexNoticia },
  { path: '/noticias/crear',        component:  CrearNoticia },

  //Convocatorias
  { path: '/convocatorias',         component:  IndexConvocatoria },
  { path: '/convocatorias/crear',   component:  CrearConvocatoria },

  //Estados de situación financiera
  { path: '/esf',                   component:  IndexESF },
  { path: '/esf/crear',             component:  CrearESF },
]