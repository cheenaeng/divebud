import { initializeApp } from 'firebase/app'
import * as dotenv from 'dotenv'

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: 'finding-manta-b5429.firebaseapp.com',
  projectId: 'finding-manta-b5429',
  storageBucket: 'finding-manta-b5429.appspot.com',
  messagingSenderId: '366306083466',
  appId: '1:366306083466:web:e004c094f6662b70d36373',
  measurementId: 'G-E8W42X8393',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
