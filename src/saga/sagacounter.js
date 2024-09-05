import {delay, put, takeLatest, takeLeading} from 'redux-saga/effects'
import { DEC, INC } from '../action/counterAction'

function* counterasyncdec()
{
    yield delay(3000);
    yield put(DEC())
}

export default function*  waterdec()
{

    yield takeLatest('DEC_AYNC',counterasyncdec)
}


function* counterasync()
{
    yield delay(3000);
    yield put(INC())
}

export  function*  waterinc()
{

    yield takeLatest('INC_AYNC',counterasync)
}