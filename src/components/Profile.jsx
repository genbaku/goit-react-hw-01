import css from "../Profile.module.css"
export const Profile = ( { data: { username, tag, location, avatar, stats }, } ) => {
  return (
    <>
      <div className={css.card}>
        <div>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.username}>{username}</p>
          <p className={`${css.gray} ${css.tag}`}>{tag}</p>
          <p className={css.gray}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span className={css.fat}>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span className={css.fat}>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span className={css.fat}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};