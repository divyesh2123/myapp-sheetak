import { all } from "redux-saga/effects";
import waterdec, { waterinc } from "./sagacounter";
import { watcherUser } from "./usersaga";

export default function* rootSaga()
{
    yield all([waterinc(),waterdec(),watcherUser()])
}