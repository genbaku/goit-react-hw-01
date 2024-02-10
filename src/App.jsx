
import { Profile } from "./components/Profile"
import { FriendList } from "./components/FriendList"
import { TransactionHistory } from "./components/TransactionHistory"
import userData from "./userData.json"
import friends from "./friends.json"
import transactions from "./transactions.json"

export const App = () => {
  return (
    <>
      <Profile data={userData}/>
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </>
  )
}