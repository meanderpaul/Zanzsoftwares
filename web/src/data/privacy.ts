import classicsArcade from '@privacy/classics-arcade.md?raw'
import archerypal from '@privacy/archerypal.md?raw'
import stratoAltus from '@privacy/strato-altus.md?raw'
import zanzPestPro from '@privacy/zanz-pestpro.md?raw'
import type { AppInfo } from './apps'

export const privacyBySlug: Record<string, string> = {
  'classics-arcade': classicsArcade,
  archerypal: archerypal,
  'strato-altus': stratoAltus,
  'zanz-pestpro': zanzPestPro,
}

export function hasPrivacyPolicy(app: AppInfo): boolean {
  return Boolean(app.privacyUrl || privacyBySlug[app.slug])
}
