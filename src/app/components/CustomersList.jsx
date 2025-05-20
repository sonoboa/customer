import Link from "next/link";

export default function CustomersList() {
    return (
      <>
        <Link href='/add'>
            Add New Customer
        </Link>
        <p>Jane Doe</p>
        <p>John Smith</p>
        <p>Lisa Baker</p>

        
      </>
    )
  }
  