import { useDispatch, useSelector } from "react-redux";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { clearSingleThicket } from "../feature/support/support";

//possível implementação para o futuro

const SingleUser = () => {
  const { users } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  const localTime = timeConvertor(users[0]?.createdAt);
  return (
    <article>
      {Boolean(users.length) && (
        <>
          <button
            type="button"
            onClick={() => dispatch(clearSingleThicket())}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <ul>
            <p>{users[0].supportOpt}</p>
            <p>{users[0].phone}</p>
            <p>{users[0].email}</p>
            <div>
              <p>{users[0].message}</p>
            </div>
            <p> {users[0].isOpen && "aberto"}</p>
            <p>{localTime}</p>
          </ul>
        </>
      )}
    </article>
  );
};

export default SingleUser;
