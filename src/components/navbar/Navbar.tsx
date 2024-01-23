import { Link } from "react-router-dom";


function Navbar() {



  return (
    <>
      <div className='w-full bg-slate-400 
                flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
          <Link to='/home' className="text-2xl font-bold">Game Store</Link>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            <Link to='' className='hover:underline'>Sair</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar