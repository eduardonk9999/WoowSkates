import h from 'hyperscript'
import helpers from 'hyperscript-helpers'



const { button } = helpers(h)


const Button = button({id:'btn'}, 'Meu Botao')


export default Button