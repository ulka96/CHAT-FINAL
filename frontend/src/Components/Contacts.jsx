// Components
import ContactsHeader from "./ContactsHeader"
import Users from "./Users"

const Contacts = (props) => {
  return (
    <div className="h-full col-span-4 flex flex-col gap-2 overflow-y-hidden">
      
   <ContactsHeader/>
   <Users />

  </div>
  )
}

export default Contacts
