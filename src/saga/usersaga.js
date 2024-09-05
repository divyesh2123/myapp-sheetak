import { call, put, takeLeading } from "redux-saga/effects";
import { UserError, UserRequest, UserSuc } from "../action/useraction";


async function  getData()
{
  let p = await  fetch("https://jsonplaceholder.typicode.com/posts")

  return p.json();
}

function* ayncuser()
{
        try
        {
      let data =   yield call(getData);

      yield put(UserSuc(data));

        }
        catch(e)
        {
            yield put(UserError(e))
        }
}
export function*  watcherUser()
{
    yield takeLeading(UserRequest().type,ayncuser)
}