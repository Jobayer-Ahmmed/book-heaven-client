import Banner from "./banner/Banner"
import Categories from "./category/Categories"
import Employees from "./employee/Employees"
import Support from "./support/Support"




const Home = () => {
  console.log("I am in home")
  return (
    <div>
      <Banner/>
      <Categories/>
      <Employees/>
      <Support/>
    </div>
  )
}

export default Home