
import { Profile } from "./components/Profile"
import { FriendList } from "./components/FriendList"
import { TransactionHistory } from "./components/TransactionHistory"
import userData from "./userData.json"
import friends from "./friends.json"
import transactions from "./transactions.json"

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </>
  )
}