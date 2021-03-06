import { fetch } from 'camera/epics/fetch'
import { combineEpics } from 'redux-observable'
import { register } from 'camera/epics/register'
import { sendDetections } from 'camera/epics/send-detections'
import { fetchFingerprint } from 'camera/epics/fetch-fingerprint'

export const camera = combineEpics(fetch, register, fetchFingerprint, sendDetections)
