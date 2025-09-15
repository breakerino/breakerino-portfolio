import axios from 'axios';

const APP_BASE_URL = process.env.APP_BASE_URL;
const REFRESH_TOKEN = process.env.APP_REFRESH_TOKEN;

export async function refreshAppCache() {
  try {
    const url = `${APP_BASE_URL}/?refresh&token=${REFRESH_TOKEN}`;

    const res = await axios.get(url);
		
    if (res.status === 200) {
      console.log('✅ App cache refreshed successfully!');
    } else {
      console.error('❌ Failed to refresh app cache:', res.status, res.statusText);
    }
  } catch (err) {
    console.error('❌ Error refreshing app cache:', err);
  }
}
