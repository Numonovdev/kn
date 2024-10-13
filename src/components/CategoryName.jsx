import Name from "./Name";

function CategoryName(){
     return(
          <div className="w-80 flex flex-col gap-y-2 py-9 px-6 rounded-[30px]  bg-[#364152]">
                <Name/>
                <Name/>
                <Name/>
          </div>
     )
}

export default CategoryName;