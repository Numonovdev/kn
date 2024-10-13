import CategoryName from "./CategoryName"
import MainChat from "./MainChat"

function Main(){
     return(
          <>
          <div className="mt-6 w-full flex gap-12 justify-between">
               <CategoryName/>
               <MainChat/>
          </div>
          </>
     )
}
export default Main