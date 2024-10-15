import header from "./components/header";
export default function Home(){
  return(
    <>
    <header/>
    <hr className="line border-t-2"/>
    <div className="homecontainer" > <img src="https://files.oaiusercontent.com/file-lchHnJwzz4cqH5nyAuBMYP07?se=2024-10-15T03%3A00%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcd90cd40-cb98-464c-8211-388e508416ed.webp&sig=7HY2fE37VkTE1R2KjFqZdlpkXcH43liAjzCfYNBbxFs%3D "alt="cartonic girl image"/></div>
    <p className="childcontainer"><span className="text-3xl"> Hey There,</span> <br/>I am Aqsa 
    <br/>
    a<span className="color">Next.js developer</span>. <br/>I create modern and responsive website<br/>
    with Next.js...</p>
    </>
  )
}