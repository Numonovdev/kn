import nameperson from '../assets/name.png'

function Name(){
     return(
          <div className="w-full btn flex items-center justify-center btnstyle border-transparent hover:bg-[#4B5B75] gap-2">
               <img className='w-5' src={nameperson} alt="" />
               <p className='PatrickHand text-base font-normal'>Category name</p>
          </div>
     )
}

export default Name;