
import Link from 'next/link';

const Page = () => {
  return (

      <div> 
            <h1> users</h1>
        
            <ul className="mt-10">
                <li> <Link href="/dashboard/users/1" >user 1</Link></li>
                <li> <Link href="/dashboard/users/2" >user 2</Link></li>
                <li> <Link href="/dashboard/users/3" >user 3</Link></li>

            </ul>
        </div>   

  )
}

export default Page