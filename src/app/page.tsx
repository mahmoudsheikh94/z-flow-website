import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

// German-speaking country codes
const GERMAN_SPEAKING_COUNTRIES = ['DE', 'AT', 'CH', 'LI']

export default async function RootPage() {
  const headersList = await headers()

  // Check for geo-location headers (only available in production)
  const country =
    headersList.get('x-vercel-ip-country') ||
    headersList.get('cf-ipcountry') ||
    ''

  // Default to English, use German only for DACH region
  const locale = GERMAN_SPEAKING_COUNTRIES.includes(country.toUpperCase())
    ? 'de'
    : 'en'

  redirect(`/${locale}`)
}
